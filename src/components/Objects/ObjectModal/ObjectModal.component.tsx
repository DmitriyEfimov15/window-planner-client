import { Flex, Form, Input, InputNumber, Modal } from "antd";
import type { FC } from "react";
import type { ObjectModalComponentProps, ObjectModalForm } from "./types";
import { defaultRules } from "../../../core/utils/formContants";

const ObjectModalComponent: FC<ObjectModalComponentProps> = ({
    open,
    form,
    isObjectLoading,
    type,
    handleClose,
    handleOk,
}) => {
    return (
        <Modal
            title={type === 'edit' ? "Редактирование объекта" : "Создание объекта"}
            open={open}
            onCancel={handleClose}
            onOk={handleOk}
            okButtonProps={{ loading: isObjectLoading }}
            okText={type === 'edit' ? "Редактировать" : "Создать"}
        >
            <Form form={form}>
                <Flex vertical>
                    <Form.Item<ObjectModalForm>
                        name="name"
                        label="Название"
                        rules={defaultRules}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        labelAlign="left"
                    >
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item<ObjectModalForm>
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
    );
};

export default ObjectModalComponent;
