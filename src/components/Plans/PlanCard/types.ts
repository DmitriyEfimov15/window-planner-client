import type { TypeModalT } from "../../../core/types/modal.types";
import type { PlanI } from "../types";

export interface PlanCardContainerProps {
    id: string;
    title: string;
    number: number;
}

export interface PlanCardComponentProps
    extends Pick<PlanCardContainerProps, "title" | "number"> {
    plan: PlanI
    isEditModalOpen: boolean;
    typeEditModal: TypeModalT;
    handlePlanClick: () => void;
    handleOpenEditModal: () => void;
    handleDeletePlan: () => void;
    handleCloseEditModal: () => void;
}
