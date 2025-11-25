import type { FC } from "react";
import styles from "./styles.module.scss";
import type { PlanConvaComponentProps } from "./types";
import PlanDockContainer from "./PlanDock/PlanDock.container";
import PlanWorkZoneContainer from "./PlanWorkZone/PlanWorkZone.container";
import PlanSpecificationContainer from "./PlanSpecification/PlanSpecification.container";

const PlanConvaComponent: FC<PlanConvaComponentProps> = () => {
    return (
        <div className={styles.container}>
            <PlanDockContainer />
            <PlanWorkZoneContainer />
            <PlanSpecificationContainer />
        </div>
    );
};

export default PlanConvaComponent;
