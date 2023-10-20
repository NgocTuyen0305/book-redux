import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";

const shoppingApi = createApi({
  reducerPath: "shopping",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    fetchFn: async (...arg) => {
      await pause(3000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    getShopping: builder.query({
      query: () => "/get-order",
    }),
    getByIdShopping: builder.query({
      query: (id) => `/get-order/${id}`,
    }),
    createShopping: builder.mutation({
      query: (shopping) => ({
        url: "/create-order",
        method: "POST",
        body: shopping,
      }),
    }),
    updateShopping: builder.mutation({
      query: (shopping) => ({
        url: `/update-order/${shopping._id}`,
        method: "PUT",
        body: shopping,
      }),
    }),
  }),
});
// console.log('shoping api: ',shoppingApi)

export const {
  useCreateShoppingMutation,
  useGetShoppingQuery,
  useUpdateShoppingMutation,
  useGetByIdShoppingQuery
} = shoppingApi;
export const shoppingReducer = shoppingApi.reducer;
export default shoppingApi;
