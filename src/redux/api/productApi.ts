import { pause } from "../../utils/pause";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interfaces/products";
import { getToken } from "../../config/getToken";
const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
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
      await pause(1000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    getProductById: builder.query<IProduct, number | string>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    addProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    removeProduct: builder.mutation<IProduct, number | string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/products/${product._id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useAddProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = productApi;
export const productReducer = productApi.reducer;
export default productApi;
