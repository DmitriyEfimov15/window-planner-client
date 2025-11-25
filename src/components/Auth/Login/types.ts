import type { FormInstance } from "antd"

export interface LoginComponentProps {
    form: FormInstance<LoginForm>
    isLoading: boolean
    handleLogin: () => void
}

export interface LoginForm {
    email: string
    password: string
}