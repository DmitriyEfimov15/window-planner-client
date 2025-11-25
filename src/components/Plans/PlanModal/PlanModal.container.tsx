import { useEffect, type FC } from "react";
import PlanModalComponent from "./PlanModal.component";
import type { PlanModalContainerProps, PlanModalFormI } from "./types";
import { useForm } from "antd/es/form/Form";
import { useCreatePlanMutation, useUpdatePlanMutation } from "../api";
import { useParams } from "react-router-dom";
import type { CreatePlanPayload, UpdatePlanPayload } from "../types";

const PlanModalContainer: FC<PlanModalContainerProps> = ({
    open,
    type,
    plan,
    handleClose,
}) => {
    const [form] = useForm<PlanModalFormI>();
    const params = useParams();

    const [createPlan, { isLoading: isCreatingPlan }] = useCreatePlanMutation();
    const [updatePlan, { isLoading: isUpdatePlan }] = useUpdatePlanMutation();

    const isPlanLoading = isCreatingPlan || isUpdatePlan;

    const handleCancel = () => {
        handleClose();
        form.resetFields();
    };

    const handleCreatePlan = async () => {
        await form.validateFields();
        const { name, number } = form.getFieldsValue();

        if (params.roomId) {
            const payload: CreatePlanPayload = {
                name,
                number,
                roomId: params.roomId,
            };

            await createPlan(payload).unwrap();
            handleCancel();
        }
    };

    const handleUpdatePlan = async () => {
        try {
            await form.validateFields();
            const { name, number } = form.getFieldsValue();

            if (plan && params.roomId) {
                const payload: UpdatePlanPayload = {
                    params: { planId: plan.id },
                    body: { name, number, roomId: params.roomId },
                };

                await updatePlan(payload).unwrap();
                handleCancel();
            }
        } catch (error) {
            console.error("Ошибка при обновлении:", error);
        }
    };

    const handleOk = async () => {
        if (type === "edit" && plan) {
            await handleUpdatePlan();
            return;
        }

        await handleCreatePlan();
    };

    useEffect(() => {
        if (plan && type === "edit") {
            form.setFieldsValue({
                name: plan.name,
                number: plan.number,
            });
        }
    }, [plan, type, open]);

    return (
        <PlanModalComponent
            form={form}
            handleCancel={handleCancel}
            open={open}
            type={type}
            isPlanLoading={isPlanLoading}
            handleOk={handleOk}
        />
    );
};

export default PlanModalContainer;
