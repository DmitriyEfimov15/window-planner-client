import { Flex, Form, Input, InputNumber, Modal } from "antd";
import type { PlanModalComponentProps, PlanModalFormI } from "./types";
import { defaultRules } from "../../../core/utils/formContants";
import type { FC } from "react";

const PlanModalComponent: FC<PlanModalComponentProps> = ({
    open,
    type,
    form,
    isPlanLoading,
    handleOk,
    handleCancel,

}) => {
    return (
        <Modal
            title={
                type === "edit" ? "Редактирование чертежа" : "Создание чертежа"
            }
            open={open}
            onCancel={handleCancel}
            onOk={handleOk}
            okButtonProps={{ loading: isPlanLoading }}
            okText={type === "edit" ? "Редактировать" : "Создать"}
        >
            <Form form={form}>
                <Flex vertical>
                    <Form.Item<PlanModalFormI>
                        name="name"
                        label="Название"
                        rules={defaultRules}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 16 }}
                        labelAlign="left"
                    >
                        <Input allowClear />
                    </Form.Item>
                    <Form.Item<PlanModalFormI>
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

export default PlanModalComponent;