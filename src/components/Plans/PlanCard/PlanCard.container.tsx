import { useMemo, useState, type FC } from "react";
import PlanCardComponent from "./PlanCard.component";
import type { ModalStateI } from "../../../core/types/modal.types";
import type { DeletePlanPayload, PlanI } from "../types";
import type { PlanCardContainerProps } from "./types";
import { useNavigate } from "react-router-dom";
import useModal from "antd/es/modal/useModal";
import { useDeletePlanMutation } from "../api";

const PlanCardContainer: FC<PlanCardContainerProps> = ({
    id,
    title,
    number,
}) => {
    const [editModalState, setEditModalState] = useState<ModalStateI>({
        open: false,
        type: "edit",
    });
    const plan: PlanI = useMemo(() => ({ name: title, id, number }), [id]);
    const [modal, context] = useModal();
    const navigate = useNavigate();

    const [deletePlan, { isLoading: isDeletingPlan }] = useDeletePlanMutation();

    const handleOpenEditModal = () => {
        setEditModalState({ open: true, type: "edit" });
    };

    const handleCloseEditModal = () => {
        setEditModalState({ open: false, type: "edit" });
    };

    const handleDeletePlan = async () => {
        const confirm = await modal.confirm({
            title: "Удаление помещения",
            content: `Вы действительно хотите удалить помещение "${title}"`,
            okText: "Удалить",
            okButtonProps: { danger: true, loading: isDeletingPlan },
        });

        if (confirm) {
            const payload: DeletePlanPayload = {
                planId: id,
            };

            await deletePlan(payload);
        }
    };

    const handlePlanClick = () => {
        navigate(`/plan/${id}`);
    };

    return (
        <>
            {context}
            <PlanCardComponent
                number={number}
                title={title}
                isEditModalOpen={editModalState.open}
                typeEditModal={editModalState.type}
                plan={plan}
                handleOpenEditModal={handleOpenEditModal}
                handleCloseEditModal={handleCloseEditModal}
                handleDeletePlan={handleDeletePlan}
                handlePlanClick={handlePlanClick}
            />
        </>
    );
};

export default PlanCardContainer;
