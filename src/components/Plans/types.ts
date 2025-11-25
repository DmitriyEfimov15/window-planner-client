import type { FormInstance } from "antd";
import type { ObjectI } from "../Objects/types";
import type { RoomI } from "../Rooms/types";
import type { TypeModalT } from "../../core/types/modal.types";

export interface PlansComponentProps {
    form: FormInstance<PlanSearchForm>;
    object: ObjectI | null;
    room: RoomI | null;
    plans: PlanI[];
    isPlansFetching: boolean;
    isCreateModalOpen: boolean;
    typeCreateModal: TypeModalT;
    onSearchFormChange: (values: PlanSearchForm) => void;
    handleBack: () => void;
    handleOpenCreateModal: () => void;
    handleCloseCreateModal: () => void;
}

export interface PlanI {
    id: string;
    name: string;
    number: number;
}

export interface PlanFormI {
    name: string;
    number: number;
}

export interface PlanSearchForm {
    search: string;
}

export interface GetAllPlansPayload {
    roomId: string;
    objectId: string;
    search?: string;
}

export interface GetAllPlansResponse {
    room: RoomI;
    plans: PlanI[];
    object: ObjectI;
}

export interface CreatePlanPayload extends PlanFormI {
    roomId: string;
}

export interface UpdatePlanPayload {
    body: PlanFormI & { roomId: string };
    params: {
        planId: string;
    };
}

export interface DeletePlanPayload {
    planId: string;
}

export interface PlansStateI {
    object: ObjectI | null;
    room: RoomI | null;
}
