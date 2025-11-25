import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../../components/Auth/slice";
import { authApi } from "../../components/Auth/api";
import { notificationSlice } from "./reducers/notificationReducer";
import { objectsApi } from "../../components/Objects/api";
import { roomsApi } from "../../components/Rooms/api";
import { roomSlice } from "../../components/Rooms/slice";
import { plansApi } from "../../components/Plans/api";
import { plansSlice } from "../../components/Plans/slice";


export const reducer = combineReducers({
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    notification: notificationSlice.reducer,
    [objectsApi.reducerPath]: objectsApi.reducer,
    rooms: roomSlice.reducer,
    [roomsApi.reducerPath]: roomsApi.reducer,
    [plansApi.reducerPath]: plansApi.reducer,
    plans: plansSlice.reducer,
});
