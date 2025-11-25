import useNotification from "antd/es/notification/useNotification";
import type { FC } from "react";
import ResetPasswordComponent from "./ResetPassword.component";
import { useForm } from "antd/es/form/Form";
import type { ResetPasswordForm } from "./types";
import { useResetPasswordMutation } from "../api";
import type { ResetPasswordPayload } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../core/utils/routes";

const ResetPasswordContainer: FC = () => {
    const [notification, context] = useNotification();
    const [form] = useForm<ResetPasswordForm>();

    const params = useParams();
    const navigate = useNavigate();

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleResetPassword = async () => {
        const { password, confirmPasword } = form.getFieldsValue();

        if (!password || !confirmPasword) {
            notification.error({
                message: "Ошибка!",
                description: "Заполните все поля!",
            });
            return;
        }

        if (password !== confirmPasword) {
            notification.error({
                message: "Ошибка!",
                description: "Пароли не совпадают!",
            });
            return;
        }

        if (params.token) {
            const payload: ResetPasswordPayload = {
                token: params.token,
                newPassword: password,
            };

            await resetPassword(payload).unwrap();
            navigate(LOGIN_ROUTE);
        }
    };
    return (
        <>
            {context}
            <ResetPasswordComponent
                form={form}
                isLoading={isLoading}
                handleResetPassword={handleResetPassword}
            />
        </>
    );
};

export default ResetPasswordContainer;
