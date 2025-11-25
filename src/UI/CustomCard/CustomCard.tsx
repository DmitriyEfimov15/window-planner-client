import { Card, Flex, Typography } from "antd";
import type { FC } from "react";
import type { CustomCardProps } from "./types";
import styles from "./styles.module.scss";

const CustomCard: FC<CustomCardProps> = ({ title, number, actions, handleClick }) => {
    return (
        <Card className={styles.card} actions={actions}>
                <Flex onClick={handleClick} justify="space-between" align="center">
                    <Typography.Text>{title}</Typography.Text>
                    {number && (
                        <Typography.Title level={3}>№{number}</Typography.Title>
                    )}
                </Flex>
        </Card>
    );
};

export default CustomCard;
