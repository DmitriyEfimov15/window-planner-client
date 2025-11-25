import type { FormInstance } from "antd";

export interface RegistraionCompinentProps {
    form: FormInstance<RegistrationForm>;
    registrationLoading: boolean;
    handleRegister: () => void;
}

export interface RegistrationForm {
    email: string;
    password: string;
    name: string;
    surname: string;
}
