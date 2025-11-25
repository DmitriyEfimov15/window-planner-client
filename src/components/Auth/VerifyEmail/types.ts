import type { FormInstance } from "antd"

export interface VerifyEmailComponentProps {
    form: FormInstance<VerifyEmailForm>
    isLoading: boolean
    handleVerify: () => void
}

export interface VerifyEmailForm {
    activationCode: number
}