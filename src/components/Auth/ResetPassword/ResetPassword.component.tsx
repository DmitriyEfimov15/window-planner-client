import type { FC } from "react";
import type { ResetPasswordComponentProps, ResetPasswordForm } from "./types";
import { Button, Flex, Form } from "antd";
import FormCard from "../../../UI/FormCard/FormCard";
import { FloatingLabelInput } from "../../../UI/FloatLabelInput";
import styles from "./styles.module.scss";

const ResetPasswordComponent: FC<ResetPasswordComponentProps> = ({
    form,
    isLoading,
    handleResetPassword,
}) => {
    return (
        <Flex align="center" justify="center" className={styles.container}>
            <FormCard title="Запрос на смену пароля">
                <Form form={form} className={styles.form}>
                    <Form.Item<ResetPasswordForm> noStyle name="password">
                        <FloatingLabelInput label="Пароль" type="password" />
                    </Form.Item>
                    <Form.Item<ResetPasswordForm> noStyle name="confirmPasword">
                        <FloatingLabelInput label="Подтверждение пароля" type="password" />
                    </Form.Item>
                    <Button
                        loading={isLoading}
                        className={styles.button}
                        type="primary"
                        onClick={handleResetPassword}
                    >
                        Отправить
                    </Button>
                </Form>
            </FormCard>
        </Flex>
    );
};

export default ResetPasswordComponent;
