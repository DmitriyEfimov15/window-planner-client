import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RoomStateI } from "./types";
import { roomsApi } from "./api";
import type { ObjectI } from "../Objects/types";

const initialState: RoomStateI = {
    object: null,
};

export const roomSlice = createSlice({
    name: "roomSlice",
    initialState,
    reducers: {
        setObject: (state, action: PayloadAction<ObjectI | null>) => {
            state.object = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(roomsApi.endpoints.getAllRooms.matchFulfilled, (state, action) => {
            state.object = action.payload.object
        })
    }
});

export const {setObject} = roomSlice.actions