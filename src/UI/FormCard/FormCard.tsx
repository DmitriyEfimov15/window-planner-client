import { Flex, Typography } from "antd";
import type { FC } from "react";
import styles from "./styles.module.scss";
import type { FormCardProps } from "./types";

const FormCard: FC<FormCardProps> = ({ title, children }) => (
    <Flex className={styles.container} vertical align="center">
        <Typography.Title level={3}>{title}</Typography.Title>

        <Flex vertical gap={16} style={{ width: "100%" }}>
            {children}
        </Flex>
    </Flex>
);

export default FormCard;
