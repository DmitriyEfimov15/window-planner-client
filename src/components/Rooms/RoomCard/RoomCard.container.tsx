import { useMemo, useState, type FC } from "react";
import RoomCardComponent from "./RoomCard.component";
import type { RoomsCardContainerProps } from "./types";
import type { DeleteRoomPayload, RoomI } from "../types";
import type { ModalStateI } from "../../../core/types/modal.types";
import useModal from "antd/es/modal/useModal";
import { useNavigate } from "react-router-dom";
import { useDeleteRoomMutation } from "../api";

const RoomCardContainer: FC<RoomsCardContainerProps> = ({
    id,
    title,
    number,
}) => {
    const [editModalState, setEditModalState] = useState<ModalStateI>({
        open: false,
        type: "edit",
    });
    const room: RoomI = useMemo(() => ({ name: title, id, number }), [id]);
    const [modal, context] = useModal();
    const navigate = useNavigate();
    const [deleteRoom, { isLoading: isDeletingRoom }] =
        useDeleteRoomMutation();

    const handleDeleteRoom = async () => {
        const confirm = await modal.confirm({
            title: "Удаление помещения",
            content: `Вы действительно хотите удалить помещение "${title}"`,
            okText: "Удалить",
            okButtonProps: { danger: true, loading: isDeletingRoom },
        });

        if (confirm) {
            const payload: DeleteRoomPayload = {
                roomId: id,
            };
            await deleteRoom(payload);
        }
    };

    const handleOpenEditModal = () => {
        setEditModalState({ open: true, type: "edit" });
    };

    const handleCloseEditModal = () => {
        setEditModalState({ open: false, type: "edit" });
    };

    const handleRoomClick = () => {
        navigate(`room/${room.id}`);
    };

    return (
        <>
            {context}
            <RoomCardComponent
                room={room}
                title={title}
                number={number}
                isEditModalOpen={editModalState.open}
                typeEditModal={editModalState.type}
                handleOpenEditModal={handleOpenEditModal}
                handleCloseEditModal={handleCloseEditModal}
                handleDeleteRoom={handleDeleteRoom}
                handleRoomClick={handleRoomClick}
            />
        </>
    );
};

export default RoomCardContainer;
