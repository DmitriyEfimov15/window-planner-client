import { createSlice } from "@reduxjs/toolkit";
import type { AuthSliceStateI } from "./types";
import { authApi } from "./api";

const initialState: AuthSliceStateI = {
    profile: null,
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            authApi.endpoints.getProfile.matchFulfilled,
            (state, action) => {
                state.profile = action.payload;
            }
        );
        builder.addMatcher(
            authApi.endpoints.verifyEmail.matchFulfilled,
            (state, action) => {
                localStorage.setItem("accessToken", action.payload.accessToken);
                state.profile = action?.payload.user;
            }
        );
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            (state, action) => {
                localStorage.setItem("accessToken", action.payload.accessToken);
                state.profile = action?.payload.user;
            }
        );
    },
});
