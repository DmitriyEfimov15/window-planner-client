import type { FC } from "react";
import type { ObjectCardComponentProps } from "./types";
import CustomCard from "../../../UI/CustomCard/CustomCard";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import ObjectModalContainer from "../ObjectModal/ObjectModal.container";

const ObjectCardComponent: FC<ObjectCardComponentProps> = ({
    title,
    number,
    isEditModalOpen,
    object,
    typeEditModal,
    handleObjectClick,
    handleOpenEditModal,
    handleCloseEditModal,
    handleDeleteObject,
}) => {
    return (
        <>
            <CustomCard
                title={title}
                number={number}
                handleClick={handleObjectClick}
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
                        onClick={handleDeleteObject}
                        className={styles.action}
                    >
                        <DeleteFilled />
                    </span>,
                ]}
            />
            <ObjectModalContainer
                open={isEditModalOpen}
                object={object}
                type={typeEditModal}
                handleClose={handleCloseEditModal}
            />
        </>
    );
};

export default ObjectCardComponent;
