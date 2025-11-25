import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const notificationStateSelector = (state: RootState) =>
    state.notification;

export const notificationSelector = createSelector(
    notificationStateSelector,
    (state) => state.notification
);
