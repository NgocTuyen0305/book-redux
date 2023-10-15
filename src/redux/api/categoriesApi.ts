import { pause } from "../../utils/pause";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategories } from "../../interfaces/categories";
import { getToken } from "../../config/getToken";
const categoriesApi = createApi({
  reducerPath: "categories",
  tagTypes: ["Categories"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
    fetchFn: async (...arg) => {
      await pause(3000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    getCategories: builder.query<ICategories[], void>({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
    getCategoryById: builder.query<ICategories, number | string>({
      query: (id) => `/categories/${id}`,
      providesTags: ["Categories"],
    }),
    addCategory: builder.mutation<ICategories, ICategories>({
      query: (category) => ({
        url: "/categories",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Categories"],
    }),
    removeCategory: builder.mutation<ICategories, number | string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
    updateCategory: builder.mutation<ICategories, ICategories>({
      query: (category) => ({
        url: `/categories/${category._id}`,
        method: "PUT",
        body: category,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});
export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useUpdateCategoryMutation,
  useRemoveCategoryMutation,
} = categoriesApi;
export const categoriesReducer = categoriesApi.reducer;
export default categoriesApi;
