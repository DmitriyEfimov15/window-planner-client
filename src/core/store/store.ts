import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers.ts";
import { authApi } from "../../components/Auth/api.ts";
import { objectsApi } from "../../components/Objects/api.ts";
import { roomsApi } from "../../components/Rooms/api.ts";
import { plansApi } from "../../components/Plans/api.ts";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(objectsApi.middleware)
            .concat(roomsApi.middleware)
            .concat(plansApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
