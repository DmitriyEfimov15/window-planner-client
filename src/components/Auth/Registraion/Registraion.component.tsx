import type { FC } from "react";
import type { RegistraionCompinentProps, RegistrationForm } from "./types";
import { Button, Flex, Form } from "antd";
import styles from "./styles.module.scss";
import FormCard from "../../../UI/FormCard/FormCard";
import { FloatingLabelInput } from "../../../UI/FloatLabelInput";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../core/utils/routes";

const RegistraionComponent: FC<RegistraionCompinentProps> = ({
    form,
    registrationLoading,
    handleRegister,
}) => {
    return (
        <Flex align="center" justify="center" className={styles.container}>
            <FormCard title="Регистрация">
                <Form form={form}>
                    <Flex
                        className={styles.content}
                        gap={20}
                        align="center"
                        vertical
                    >
                        <Form.Item<RegistrationForm> noStyle name="email">
                            <FloatingLabelInput label="Почта" />
                        </Form.Item>
                        <Form.Item<RegistrationForm> noStyle name="password">
                            <FloatingLabelInput
                                label="Пароль"
                                type="password"
                            />
                        </Form.Item>
                        <Form.Item<RegistrationForm> noStyle name="name">
                            <FloatingLabelInput label="Имя" />
                        </Form.Item>
                        <Form.Item<RegistrationForm> noStyle name="surname">
                            <FloatingLabelInput label="Фамилия" />
                        </Form.Item>
                        <Flex className={styles.buttonContainer} align="center" gap={10} vertical>
                            <Button
                                onClick={handleRegister}
                                loading={registrationLoading}
                                type="primary"
                                className={styles.button}
                            >
                                Регистрация
                            </Button>
                            <Link to={LOGIN_ROUTE} className={styles.link}>Уже есть аккаунт?</Link>
                        </Flex>
                    </Flex>
                </Form>
            </FormCard>
        </Flex>
    );
};

export default RegistraionComponent;
