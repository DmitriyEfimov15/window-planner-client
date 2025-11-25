import { useForm } from "antd/es/form/Form";
import VerifyEmailComponent from "./VerifyEmail.component";
import type { VerifyEmailForm } from "./types";
import useNotification from "antd/es/notification/useNotification";
import type { FC } from "react";
import { useVerifyEmailMutation } from "../api";
import type { VerifyEmailPayload } from "../types";
import { useParams } from "react-router-dom";

const VerifyEmailContiner: FC = () => {
    const [form] = useForm<VerifyEmailForm>();
    const [notification, context] = useNotification();

    const params = useParams();

    const [verifyEmail, {isLoading}] = useVerifyEmailMutation();

    const handleVerify = () => {
        const { activationCode } = form.getFieldsValue();
        if (!activationCode || String(activationCode).length < 6) {
            notification.error({
                message: "Ошибка",
                description: "Введите код активации!",
            });
            return;
        }

        if (params.activationLink) {
            console.log(params.activationLink)
            const payload: VerifyEmailPayload = {
                activationCode,
                activationLink: params.activationLink,
            };
            verifyEmail(payload);
        }
    };

    return (
        <>
            {context}
            <VerifyEmailComponent form={form} isLoading={isLoading} handleVerify={handleVerify} />
        </>
    );
};

export default VerifyEmailContiner;
