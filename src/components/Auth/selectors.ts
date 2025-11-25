import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../core/store/store";

export const authSelector = (state: RootState) => state.auth;

export const isAuthenticatedSelector = createSelector(
  authSelector,
  (state) => !!state.profile
);