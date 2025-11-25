import type { FC } from "react";
import type { ObjectsComponentProps, ObjectsSearchForm } from "./types";
import { Button, Empty, Flex, Form, Input, Spin, Typography } from "antd";
import styles from "./styles.module.scss";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import ObjectCardContainer from "./ObjectCard/ObjectCardContainer";
import ObjectModalContainer from "./ObjectModal/ObjectModal.container";

const ObjectsComponent: FC<ObjectsComponentProps> = ({
    form,
    objects,
    isObjectsLoading,
    isCreateModalOpen,
    isCreateModalType,
    handleOpenCreateModal,
    handleCloseCreateModal,
    onSearchFormChange,
}) => {
    return (
        <Flex className={styles.container} vertical gap={20}>
            <Flex className={styles["header-container"]} vertical gap={5}>
                <Flex align="center" justify="space-between">
                    <Typography.Title level={2}>
                        Список объектов
                    </Typography.Title>
                    <Button onClick={handleOpenCreateModal}>
                        Создать объект
                    </Button>
                </Flex>
                <Flex>
                    <Form onValuesChange={onSearchFormChange} form={form}>
                        <Form.Item<ObjectsSearchForm> noStyle name="search">
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
                {objects.length > 0 ? (
                    <>
                        {isObjectsLoading ? (
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
                                {objects.map((item) => (
                                    <ObjectCardContainer
                                        id={item.id}
                                        title={item.name}
                                        number={item.number}
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

            <ObjectModalContainer
                open={isCreateModalOpen}
                type={isCreateModalType}
                handleClose={handleCloseCreateModal}
            />
        </Flex>
    );
};

export default ObjectsComponent;
