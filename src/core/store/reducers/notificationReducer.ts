import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
    Notification,
    NotificationState,
} from "../../types/notification.types";

const initialState: NotificationState = {
    notification: null,
};

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state, action: PayloadAction<Notification>) => {
            state.notification = action.payload;
        },
    },
});

export const { setNotification } = notificationSlice.actions;
