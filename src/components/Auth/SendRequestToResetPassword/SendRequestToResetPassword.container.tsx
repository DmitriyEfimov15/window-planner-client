import { useForm } from "antd/es/form/Form";
import SendRequestToResetPasswordComponent from "./SendRequestToResetPassword.component";
import { type SendRequestToResetPasswordForm } from "./types";
import useNotification from "antd/es/notification/useNotification";
import { useSendRequestToResetPasswordMutation } from "../api";
import type { SendRequestToResetPasswordPayload } from "../types";

const SendRequestToResetPasswordContainer = () => {
    const [notification, context] = useNotification();

    const [form] = useForm<SendRequestToResetPasswordForm>();

    const [sendRequestToResetPassword, { isLoading }] =
        useSendRequestToResetPasswordMutation();

    const handleSendRequest = () => {
        const { email } = form.getFieldsValue();
        if (!email) {
            notification.error({
                message: "Ошибка!",
                description: "Введите почту!",
            });
            return;
        }

        const payload: SendRequestToResetPasswordPayload = {
            email,
        };

        sendRequestToResetPassword(payload);
    };

    return (
        <>
            {context}
            <SendRequestToResetPasswordComponent
                form={form}
                isLoading={isLoading}
                handleSendRequest={handleSendRequest}
            />
        </>
    );
};

export default SendRequestToResetPasswordContainer;
