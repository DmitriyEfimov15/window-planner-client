import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../core/store/store";

export const roomsBaseSelector = (state: RootState) => state.rooms;

export const objectSelector = createSelector(
    roomsBaseSelector,
    (state) => state.object
);
