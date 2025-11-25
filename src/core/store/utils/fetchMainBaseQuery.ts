import {
    type BaseQueryFn,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { isNotification } from "../../typeguards/isNotification";
import { isRefreshResponse } from "../../typeguards/isRefreshResponse";

const baseQuery = fetchBaseQuery({
    credentials: "include",
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('accessToken')

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
});
const fetchMainBaseQuery =
  (
    basePath: string,
  ): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =>
  async (args, api, extraOptions) => {
    const updatedArgs: string | FetchArgs =
      typeof args === "string"
        ? `${import.meta.env.VITE_API_URL}${basePath}${args.startsWith("/") ? args : `/${args}`}`
        : {
            ...args,
            url: `${import.meta.env.VITE_API_URL}${basePath}${args.url.startsWith("/") ? args.url : `/${args.url}`}`,
          };

    let result = await baseQuery(updatedArgs, api, extraOptions);

    if (result.error && result.error.status === 401) {
      const refreshResponse = await baseQuery(
        `${import.meta.env.VITE_API_URL}/auth/refresh`,
        api,
        extraOptions,
      );
      if (isRefreshResponse(refreshResponse.data)) 
        localStorage.setItem("accessToken", refreshResponse.data.accessToken);
      if (!refreshResponse.error) {
        result = await baseQuery(updatedArgs, api, extraOptions);
      }
    }

    const data = result.error?.data ?? result.data;
    if (isNotification(data)) {
      api.dispatch({
        type: "notification/setNotification",
        payload: data,
      });
    }

    return result;
  };

export default fetchMainBaseQuery;