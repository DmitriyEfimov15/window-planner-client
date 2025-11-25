import type { FormInstance } from "antd";

export interface ResetPasswordComponentProps {
    form: FormInstance<ResetPasswordForm>;
    isLoading: boolean
    handleResetPassword: () => void
}

export interface ResetPasswordForm {
    password: string;
    confirmPasword: string;
}
