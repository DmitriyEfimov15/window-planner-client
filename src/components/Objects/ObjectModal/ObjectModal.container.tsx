import { useEffect, type FC } from "react";
import ObjectModalComponent from "./ObjectModal.component";
import type { ObjectModalContainerProps, ObjectModalForm } from "./types";
import { useForm } from "antd/es/form/Form";
import { useCreateObjectMutation, useUpdateObjectMutation } from "../api";
import type { CreateObjectPayload, UpdateObjectPayload } from "../types";

const ObjectModalContainer: FC<ObjectModalContainerProps> = ({
    open,
    object,
    type,
    handleClose,
}) => {
    const [form] = useForm<ObjectModalForm>();

    const [createObject, { isLoading: isObjectCreateLoading }] =
        useCreateObjectMutation();
    const [updateObject, { isLoading: isObjectEditLoading }] =
        useUpdateObjectMutation();

    const isObjectLoading = isObjectCreateLoading || isObjectEditLoading;
    const handleOnCancel = () => {
        handleClose();
        form.resetFields();
    };

    const handleCreate = async () => {
        await form.validateFields();
        const values = form.getFieldsValue();

        const payload: CreateObjectPayload = { ...values };

        await createObject(payload).unwrap();
        handleClose();
    };

    const handleEditObject = async () => {
        if (object) {
            await form.validateFields();
            const { name, number } = form.getFieldsValue();

            const payload: UpdateObjectPayload = {
                params: {
                    objectId: object.id,
                },
                body: {
                    name,
                    number,
                },
            };

            await updateObject(payload).unwrap();
            handleClose();
        }
    };

    const handleOk = async () => {
        if (object && type === "edit") {
            handleEditObject();
            return;
        }

        await handleCreate();
    };

    useEffect(() => {
        if (object && type === "edit") {
            form.setFieldsValue({
                name: object.name,
                number: object.number,
            });
        }
    }, [object, open]);

    return (
        <ObjectModalComponent
            open={open}
            form={form}
            isObjectLoading={isObjectLoading}
            type={type}
            handleClose={handleOnCancel}
            handleOk={handleOk}
        />
    );
};

export default ObjectModalContainer;
