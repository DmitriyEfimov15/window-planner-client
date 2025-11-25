import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../core/store/store";


export const basePlansSelector = (state: RootState) => state.plans

export const objectSelector = createSelector(basePlansSelector, (state) => state.object)
export const roomSelector = createSelector(basePlansSelector, (state) => state.room)