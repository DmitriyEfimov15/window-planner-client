import { createApi } from "@reduxjs/toolkit/query/react";
import fetchMainBaseQuery from "../../core/store/utils/fetchMainBaseQuery";
import type {
    CreateRoomPayload,
    DeleteRoomPayload,
    GetAllRoomsPayload,
    GetAllRoomsResponse,
    UpdateRoomPayload,
} from "./types";

export const roomsApi = createApi({
    reducerPath: "roomsApi",
    baseQuery: fetchMainBaseQuery("/rooms"),
    tagTypes: ["Rooms"],
    endpoints: (builder) => ({
        getAllRooms: builder.query<GetAllRoomsResponse, GetAllRoomsPayload>({
            query: (params) => ({
                url: "/",
                params,
            }),
            providesTags: ["Rooms"],
        }),
        createRoom: builder.mutation<void, CreateRoomPayload>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Rooms"],
        }),
        updateRoom: builder.mutation<void, UpdateRoomPayload>({
            query: ({ body, params }) => ({
                url: "/",
                method: "PUT",
                body,
                params,
            }),
            invalidatesTags: ["Rooms"],
        }),
        deleteRoom: builder.mutation<void, DeleteRoomPayload>({
            query: (params) => ({
                url: "/",
                method: "DELETE",
                params,
            }),
            invalidatesTags: ["Rooms"],
        }),
    }),
});

export const {
    useLazyGetAllRoomsQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
} = roomsApi;
