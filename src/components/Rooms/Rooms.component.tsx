import type { FC } from "react";
import type { RoomsComponentProps, RoomsSearchForm } from "./types";
import { Button, Empty, Flex, Form, Input, Spin, Typography } from "antd";
import styles from "./styles.module.scss";
import {
    LoadingOutlined,
    RollbackOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import RoomModalContainer from "./RoomModal/RoomModal.container";
import RoomCardContainer from "./RoomCard/RoomCard.container";

const RoomsComponent: FC<RoomsComponentProps> = ({
    form,
    rooms,
    isRoomsFetching,
    isCreateModalOpen,
    typeModal,
    object,
    handleBack,
    onSearchFormChange,
    handleOpenCreateModal,
    handleCloseCreateModal,
}) => {
    return (
        <Flex className={styles.container} vertical gap={20}>
            <Flex className={styles["header-container"]} vertical gap={5}>
                <Flex align="center" justify="space-between">
                    <Flex gap={10} align="center" justify="space-between" className={styles['object-info']}>
                        <Button onClick={handleBack} type="text"><RollbackOutlined /></Button>
                        <Typography.Text>{object?.name}</Typography.Text>
                    </Flex>
                    <Button onClick={handleOpenCreateModal}>
                        Создать помещение
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
                {rooms.length > 0 ? (
                    <>
                        {isRoomsFetching ? (
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
                                {rooms.map((room) => (
                                    <RoomCardContainer
                                        title={room.name}
                                        number={room.number}
                                        id={room.id}
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

            <RoomModalContainer
                open={isCreateModalOpen}
                type={typeModal}
                handleClose={handleCloseCreateModal}
            />
        </Flex>
    );
};

export default RoomsComponent;
