import type { FC } from "react";
import CustomCard from "../../../UI/CustomCard/CustomCard";
import type { RoomCardComponentProps } from "./types";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import styles from './styles.module.scss'
import RoomModalContainer from "../RoomModal/RoomModal.container";

const RoomCardComponent: FC<RoomCardComponentProps> = ({
    title,
    number,
    room,
    isEditModalOpen,
    typeEditModal,
    handleRoomClick,
    handleOpenEditModal,
    handleDeleteRoom,
    handleCloseEditModal,
}) => {
    return (
        <>
            <CustomCard
                title={title}
                number={number}
                handleClick={handleRoomClick}
                actions={[
                    <span
                        key="edit"
                        onClick={handleOpenEditModal}
                        className={styles.action}
                    >
                        <EditOutlined />
                    </span>,
                    <span
                        key="delete"
                        onClick={handleDeleteRoom}
                        className={styles.action}
                    >
                        <DeleteFilled />
                    </span>,
                ]}
            />
            <RoomModalContainer
                open={isEditModalOpen}
                room={room}
                type={typeEditModal}
                handleClose={handleCloseEditModal}
            />
        </>
    );
};

export default RoomCardComponent;
