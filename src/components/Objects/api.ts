import { createApi } from "@reduxjs/toolkit/query/react";
import fetchMainBaseQuery from "../../core/store/utils/fetchMainBaseQuery";
import type {
    CreateObjectPayload,
    DeleteObjectPayload,
    GetAllObjectsPayload,
    GetAllObjectsResponse,
    UpdateObjectPayload,
} from "./types";

export const objectsApi = createApi({
    reducerPath: "objectsApi",
    baseQuery: fetchMainBaseQuery("/objects"),
    tagTypes: ["Objects"],
    endpoints: (builder) => ({
        getAllObjects: builder.query<
            GetAllObjectsResponse,
            GetAllObjectsPayload
        >({
            query: (params) => ({
                url: "/",
                params,
            }),
            providesTags: ["Objects"],
        }),
        createObject: builder.mutation<void, CreateObjectPayload>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Objects"],
        }),
        updateObject: builder.mutation<void, UpdateObjectPayload>({
            query: ({ params, body }) => ({
                url: "/",
                method: "PUT",
                body,
                params,
            }),
            invalidatesTags: ["Objects"],
        }),
        deleteObject: builder.mutation<void, DeleteObjectPayload>({
            query: (params) => ({
                url: "/",
                method: "DELETE",
                params,
            }),
            invalidatesTags: ["Objects"],
        }),
    }),
});

export const {
    useLazyGetAllObjectsQuery,
    useCreateObjectMutation,
    useUpdateObjectMutation,
    useDeleteObjectMutation,
} = objectsApi;
