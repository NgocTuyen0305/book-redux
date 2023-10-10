import { pause } from "../../utils/pause";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interfaces/products";
import queryString from "query-string";
const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    fetchFn: async (...arg) => {
      await pause(1000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      IProduct[],
      {
        _page?: number | string;
        _limit?: number | string;
        _sort?: string;
        _order?: string;
        _search?: string;
      }
    >({
      query: (args) => {
        const { _page, _limit, _sort, _order, _search } = args;
        const queryParams = {
          _page,
          _limit,
          _sort,
          _order,
          _search,
        };
        //Tìm key:value nào không có giá trị thì tự động xóa
        Object.keys(queryParams).forEach((key) => {
          if (queryParams[key] === undefined || queryParams[key] === null) {
            delete queryParams[key];
          }
        });
        //Chuyển object thành chuỗi
        const queryUrl = queryString.stringify(queryParams);
        return `/products?${queryUrl ? `${queryUrl}` : ""}`;
      },
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
