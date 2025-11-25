import type { FC } from "react";
import RegistraionComponent from "./Registraion.component";
import { useForm } from "antd/es/form/Form";
import type { RegistrationForm } from "./types";
import { useRegistrationMutation } from "../api";
import type { RegistrationPayload } from "../types";
import { useNavigate } from "react-router-dom";
import useNotification from "antd/es/notification/useNotification";

const RegistraionContainer: FC = () => {
    const [form] = useForm<RegistrationForm>();
    const [notification, context] = useNotification();

    const navigate = useNavigate();

    const [registration, { isLoading: registrationLoading }] =
        useRegistrationMutation();

    const handleRegister = async () => {
        const { email, name, password, surname } = form.getFieldsValue();
        if (!email || !name || !password || !surname) {
            notification.error({ message: "Ошибка!", description: "Заполните все поля!" });
            return;
        }

        const payload: RegistrationPayload = {
            email,
            name,
            surname,
            password,
        };

        const { user } = await registration(payload).unwrap();

        navigate(`/auth/verify-email/${user.activation_link}`);
    };

    return (
        <>
            {context}
            <RegistraionComponent form={form} registrationLoading={registrationLoading} handleRegister={handleRegister}/>;
        </>
    );
};

export default RegistraionContainer;
