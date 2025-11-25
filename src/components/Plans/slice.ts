import { createSlice } from "@reduxjs/toolkit";
import type { PlansStateI } from "./types";
import { plansApi } from "./api";

const initialState: PlansStateI = {
    object: null,
    room: null,
};

export const plansSlice = createSlice({
    name: "plansSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            plansApi.endpoints.getAllPlans.matchFulfilled,
            (state, action) => {
                state.object = action.payload.object;
                state.room = action.payload.room;
            }
        );
    },
});
