import type { TypeModalT } from "../../../core/types/modal.types";
import type { RoomI } from "../types";

export interface RoomsCardContainerProps {
    id: string;
    title: string;
    number: number;
}

export interface RoomCardComponentProps
    extends Pick<RoomsCardContainerProps, "title" | "number"> {
    room: RoomI;
    isEditModalOpen: boolean;
    typeEditModal: TypeModalT;
    handleRoomClick: () => void;
    handleOpenEditModal: () => void;
    handleDeleteRoom: () => void;
    handleCloseEditModal: () => void;
}
