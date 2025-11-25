import type { FC } from "react";
import type { LoginComponentProps, LoginForm } from "./types";
import styles from "./styles.module.scss";
import { Button, Flex, Form } from "antd";
import FormCard from "../../../UI/FormCard/FormCard";
import { FloatingLabelInput } from "../../../UI/FloatLabelInput";
import { Link } from "react-router-dom";
import {
    REGISTRATION_ROUTE,
    SEND_REQUEST_TO_CHANGE_PASSWORD_ROUTE,
} from "../../../core/utils/routes";

const LoginComponent: FC<LoginComponentProps> = ({
    form,
    isLoading,
    handleLogin,
}) => {
    return (
        <Flex align="center" justify="center" className={styles.container}>
            <FormCard title="Вход">
                <Form className={styles.form} form={form}>
                    <Form.Item<LoginForm> noStyle name="email">
                        <FloatingLabelInput label="Почта" />
                    </Form.Item>
                    <Form.Item<LoginForm> noStyle name="password">
                        <FloatingLabelInput label="Пароль" type="password" />
                    </Form.Item>
                    <Flex
                        className={styles.buttonContainer}
                        align="center"
                        gap={15}
                        vertical
                    >
                        <Button
                            type="primary"
                            onClick={handleLogin}
                            loading={isLoading}
                            className={styles.button}
                        >
                            Войти
                        </Button>
                        <Flex vertical align="center">
                            <Link
                                to={REGISTRATION_ROUTE}
                                className={styles.link}
                            >
                                Еще нет аккаунта?
                            </Link>
                            <Link
                                to={SEND_REQUEST_TO_CHANGE_PASSWORD_ROUTE}
                                className={styles.link}
                            >
                                Забыли пароль?
                            </Link>
                        </Flex>
                    </Flex>
                </Form>
            </FormCard>
        </Flex>
    );
};

export default LoginComponent;
