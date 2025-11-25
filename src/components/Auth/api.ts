import { createApi } from "@reduxjs/toolkit/query/react";
import fetchMainBaseQuery from "../../core/store/utils/fetchMainBaseQuery";
import type {
    LoginPayload,
    LoginResponse,
    RegistrationPayload,
    RegistrationResponse,
    ResetPasswordPayload,
    SendRequestToResetPasswordPayload,
    UserI,
    VerifyEmailPayload,
    VerifyEmailResponse,
} from "./types";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchMainBaseQuery("/auth"),
    endpoints: (builder) => ({
        registration: builder.mutation<
            RegistrationResponse,
            RegistrationPayload
        >({
            query: (body) => ({
                url: "/registration",
                method: "POST",
                body,
            }),
        }),
        getProfile: builder.query<UserI, void>({
            query: () => ({
                url: "/get-profile",
            }),
        }),
        verifyEmail: builder.mutation<VerifyEmailResponse, VerifyEmailPayload>({
            query: (body) => ({
                url: "/verify-email",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation<LoginResponse, LoginPayload>({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),
        sendRequestToResetPassword: builder.mutation<
            void,
            SendRequestToResetPasswordPayload
        >({
            query: (body) => ({
                url: "/send-request-to-reset-password",
                method: "POST",
                body,
            }),
        }),
        resetPassword: builder.mutation<void, ResetPasswordPayload>({
            query: (body) => ({
                url: `/reset-password/${body.token}`,
                method: "POST",
                body: {
                    newPassword: body.newPassword,
                },
            }),
        }),
    }),
});

export const {
    useLazyGetProfileQuery,
    useRegistrationMutation,
    useVerifyEmailMutation,
    useLoginMutation,
    useSendRequestToResetPasswordMutation,
    useResetPasswordMutation,
} = authApi;
