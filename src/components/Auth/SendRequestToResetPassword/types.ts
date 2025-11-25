import type { FormInstance } from "antd";

export interface SendRequestToResetPasswordProps {
    form: FormInstance<SendRequestToResetPasswordForm>;
    isLoading: boolean;
    handleSendRequest: () => void;
}

export interface SendRequestToResetPasswordForm {
    email: string;
}
