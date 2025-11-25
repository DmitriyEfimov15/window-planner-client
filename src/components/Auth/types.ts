import type { RegistrationForm } from "./Registraion/types";

export type RegistrationPayload = RegistrationForm;

export interface UserI {
    name: string;
    surname: string;
    email: string;
}

export interface RegistrationResponse {
    user: {
        activation_link: string;
    };
}

export interface AuthSliceStateI {
    profile: UserI | null;
}

export interface VerifyEmailPayload {
    activationCode: number;
    activationLink: string;
}

export interface VerifyEmailResponse {
    accessToken: string;
    user: UserI;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export type LoginResponse = VerifyEmailResponse;

export interface SendRequestToResetPasswordPayload {
    email: string
}

export interface ResetPasswordPayload {
    token: string
    newPassword: string
}