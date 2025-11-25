import type { FC } from "react";
import type { PlansComponentProps } from "./types";
import { Button, Empty, Flex, Form, Input, Spin, Typography } from "antd";
import styles from "./styles.module.scss";
import {
    LoadingOutlined,
    RollbackOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import type { RoomsSearchForm } from "../Rooms/types";
import PlanModalContainer from "./PlanModal/PlanModal.container";
import PlanCardContainer from "./PlanCard/PlanCard.container";

const PlansComponent: FC<PlansComponentProps> = ({
    form,
    object,
    room,
    plans,
    isPlansFetching,
    isCreateModalOpen,
    typeCreateModal,
    onSearchFormChange,
    handleBack,
    handleOpenCreateModal,
    handleCloseCreateModal,
}) => {
    return (
        <Flex className={styles.container} vertical gap={20}>
            <Flex className={styles["header-container"]} vertical gap={5}>
                <Flex align="center" justify="space-between">
                    <Flex
                        gap={10}
                        align="center"
                        justify="space-between"
                        className={styles["object-info"]}
                    >
                        <Button onClick={handleBack} type="text">
                            <RollbackOutlined />
                        </Button>
                        <Flex vertical>
                            <Typography.Text>{object?.name}</Typography.Text>
                            <Typography.Text>{room?.name}</Typography.Text>
                        </Flex>
                    </Flex>
                    <Button onClick={handleOpenCreateModal}>
                        Создать чертёж
                    </Button>
                </Flex>
                <Flex>
                    <Form onValuesChange={onSearchFormChange} form={form}>
                        <Form.Item<RoomsSearchForm> noStyle name="search">
                            <Input
                                className={styles.input}
                                placeholder="Поиск"
                                allowClear
                                suffix={<SearchOutlined />}
                            />
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>

            <Flex className={styles.content}>
                {plans.length > 0 ? (
                    <>
                        {isPlansFetching ? (
                            <Flex
                                className={styles.loading}
                                align="center"
                                justify="center"
                            >
                                <Spin
                                    size="large"
                                    indicator={
                                        <LoadingOutlined
                                            style={{ fontSize: 90 }}
                                        />
                                    }
                                />
                            </Flex>
                        ) : (
                            <div className={styles.list}>
                                {plans.map((plan) => (
                                    <PlanCardContainer
                                        title={plan.name}
                                        number={plan.number}
                                        id={plan.id}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <Flex
                        className={styles.empty}
                        align="center"
                        justify="center"
                    >
                        <Empty description="Список пуст" />
                    </Flex>
                )}
            </Flex>

            <PlanModalContainer
                type={typeCreateModal}
                open={isCreateModalOpen}
                handleClose={handleCloseCreateModal}
            />
        </Flex>
    );
};

export default PlansComponent;
