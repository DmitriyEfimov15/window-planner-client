import type { FC } from "react";
import LoginComponent from "./Login.component";
import { useForm } from "antd/es/form/Form";
import { type LoginForm } from "./types";
import useNotification from "antd/es/notification/useNotification";
import { useLoginMutation } from "../api";
import type { LoginPayload } from "../types";

const LoginContainer: FC = () => {
    const [form] = useForm<LoginForm>();
    const [notification, context] = useNotification();

    const [login, { isLoading }] = useLoginMutation();

    const handleLogin = () => {
        const { email, password } = form.getFieldsValue();

        if (!email || !password) {
            notification.error({
                message: "Ошибка!",
                description: "Заполните все поля!",
            });
            return;
        }

        const payload: LoginPayload = {
            email,
            password,
        };
        login(payload);
    };

    return (
        <>
            {context}
            <LoginComponent
                form={form}
                isLoading={isLoading}
                handleLogin={handleLogin}
            />
        </>
    );
};

export default LoginContainer;
