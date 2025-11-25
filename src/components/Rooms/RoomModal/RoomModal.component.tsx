import { Flex, Form, Input, InputNumber, Modal } from "antd";
import type { FC } from "react";
import type { RoomModalComponentProps } from "./types";
import { defaultRules } from "../../../core/utils/formContants";
import type { RoomFormI } from "../types";


const RoomModalComponent: FC<RoomModalComponentProps> = ({
    open,
    type,
    form,
    isLoading,
    handleOk,
    handleCancel,
    
}) => {
    return (
        <Modal
            title={type === 'edit' ? "Редактирование помещенья" : "Создание помещенья"}
            open={open}
            onCancel={handleCancel}
            onOk={handleOk}
            okButtonProps={{ loading: isLoading }}
            okText={type === 'edit' ? "Редактировать" : "Создать"}
        >
            <Form form={form}>
                <Flex vertical>
                    <Form.Item<RoomFormI>
                        name="name"
                        label="Название"
                        rules={defaultRules}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        labelAlign="left"
                    >
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item<RoomFormI>
                        name="number"
                        label="Номер"
                        rules={defaultRules}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        labelAlign="left"
                    >
                        <InputNumber />
                    </Form.Item>
                </Flex>
            </Form>
        </Modal>
    )
}

export default RoomModalComponent;