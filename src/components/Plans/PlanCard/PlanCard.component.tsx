import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import CustomCard from "../../../UI/CustomCard/CustomCard";
import PlanModalContainer from "../PlanModal/PlanModal.container";
import type { FC } from "react";
import type { PlanCardComponentProps } from "./types";
import styles from "./styles.module.scss";

const PlanCardComponent: FC<PlanCardComponentProps> = ({
    title,
    number,
    isEditModalOpen,
    typeEditModal,
    plan,
    handlePlanClick,
    handleOpenEditModal,
    handleDeletePlan,
    handleCloseEditModal,
}) => {
    return (
        <>
            <CustomCard
                title={title}
                number={number}
                handleClick={handlePlanClick}
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
                        onClick={handleDeletePlan}
                        className={styles.action}
                    >
                        <DeleteFilled />
                    </span>,
                ]}
            />
            <PlanModalContainer
                open={isEditModalOpen}
                type={typeEditModal}
                plan={plan}
                handleClose={handleCloseEditModal}
            />
        </>
    );
};

export default PlanCardComponent;
