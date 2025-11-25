import { createApi } from "@reduxjs/toolkit/query/react";
import fetchMainBaseQuery from "../../core/store/utils/fetchMainBaseQuery";
import {
    type DeletePlanPayload,
    type UpdatePlanPayload,
    type CreatePlanPayload,
    type GetAllPlansPayload,
    type GetAllPlansResponse,
} from "./types";

export const plansApi = createApi({
    reducerPath: "plansApi",
    baseQuery: fetchMainBaseQuery("/plan"),
    tagTypes: ["Plans"],
    endpoints: (builder) => ({
        getAllPlans: builder.query<GetAllPlansResponse, GetAllPlansPayload>({
            query: (params) => ({
                url: "/",
                params,
            }),
            providesTags: ["Plans"],
        }),
        createPlan: builder.mutation<void, CreatePlanPayload>({
            query: (body) => ({
                url: "/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Plans"],
        }),
        updatePlan: builder.mutation<void, UpdatePlanPayload>({
            query: ({ body, params }) => ({
                url: "/",
                method: "PUT",
                body,
                params,
            }),
            invalidatesTags: ["Plans"],
        }),
        deletePlan: builder.mutation<void, DeletePlanPayload>({
            query: (params) => ({
                url: "/",
                method: "DELETE",
                params,
            }),
            invalidatesTags: ["Plans"],
        }),
    }),
});

export const {
    useLazyGetAllPlansQuery,
    useCreatePlanMutation,
    useUpdatePlanMutation,
    useDeletePlanMutation,
} = plansApi;
