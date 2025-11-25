import type { FormInstance } from "antd";
import type { TypeModalT } from "../../core/types/modal.types";
import type { ObjectI } from "../Objects/types";

export interface RoomsComponentProps {
    form: FormInstance<RoomsSearchForm>;
    rooms: RoomI[];
    isRoomsFetching: boolean;
    isCreateModalOpen: boolean;
    typeModal: TypeModalT;
    object: ObjectI | null
    handleBack: () => void
    onSearchFormChange: (values: RoomsSearchForm) => void;
    handleOpenCreateModal: () => void;
    handleCloseCreateModal: () => void;
}

export interface RoomsSearchForm {
    search: string;
}

export interface RoomI {
    id: string;
    name: string;
    number: number;
}

export interface RoomFormI {
    name: string;
    number: number;
}

export interface GetAllRoomsPayload {
    search?: string;
    objectId: string;
}

export interface GetAllRoomsResponse {
    rooms: RoomI[];
    object: ObjectI
}

export interface CreateRoomPayload extends RoomFormI {
    objectId: string;
}

export interface UpdateRoomPayload {
    body: Partial<CreateRoomPayload> & {objectId: string};
    params: {
        roomId: string;
    };
}

export interface DeleteRoomPayload {
    roomId: string;
}

export interface RoomStateI {
    object: ObjectI | null
}