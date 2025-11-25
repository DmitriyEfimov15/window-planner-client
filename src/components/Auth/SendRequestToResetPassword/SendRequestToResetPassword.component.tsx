import type { FC } from "react";
import type {
    SendRequestToResetPasswordForm,
    SendRequestToResetPasswordProps,
} from "./types";
import { Button, Flex, Form } from "antd";
import FormCard from "../../../UI/FormCard/FormCard";
import styles from "./styles.module.scss";
import { FloatingLabelInput } from "../../../UI/FloatLabelInput";

const SendRequestToResetPasswordComponent: FC<
    SendRequestToResetPasswordProps
> = ({ form, isLoading, handleSendRequest }) => {
    return (
        <Flex align="center" justify="center" className={styles.container}>
            <FormCard title="Запрос на смену пароля">
                <Form form={form} className={styles.form}>
                    <Form.Item<SendRequestToResetPasswordForm>
                        noStyle
                        name="email"
                    >
                        <FloatingLabelInput label="Почта" />
                    </Form.Item>
                    <Button
                        loading={isLoading}
                        className={styles.button}
                        type="primary"
                        onClick={handleSendRequest}
                    >
                        Отправить
                    </Button>
                </Form>
            </FormCard>
        </Flex>
    );
};

export default SendRequestToResetPasswordComponent;
