import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    fetchFn: async (...arg) => {
      await pause(1000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signup) => ({
        url: "/signup",
        method: "POST",
        body: signup,
      }),
    }),
    signin: builder.mutation({
      query: (signin) => ({
        url: "/signin",
        method: "POST",
        body: signin,
      }),
    }),
  }),
});
export const { useSigninMutation, useSignupMutation } = authApi;
export const authReducer = authApi.reducer;
export default authApi;
