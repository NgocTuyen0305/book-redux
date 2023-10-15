import { pause } from "../../utils/pause";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../interfaces/products";
import queryString from "query-string";
import { getToken, parseJwt } from "../../config/getToken";
const productApi = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (!token) {
        console.log("token không tồn tại");
      } else {
        const decotedToken = parseJwt(token);
        // console.log('decotedToken',decotedToken)
        const currentTimestamp = Date.now() / 1000;
        if (decotedToken.exp && decotedToken.exp < currentTimestamp) {
          // Token đã hết hạn, xử lý lỗi hoặc đăng nhập lại
          throw new Error("Token đã hết hạn vui lòng đăng nhập lại");
        } else {
          // Token hợp lệ và chưa hết hạn, bạn có thể sử dụng nó
          headers.set("authorization", `Bearer ${token}`);
          return headers;
        }
      }
    },
    fetchFn: async (...arg) => {
      await pause(3000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      IProduct[],
      {
        _page?: number | string;
        _limit?: number | string;
        _category?: number | string;
        _sort?: string;
        _order?: string;
        _search?: string;
      }
    >({
      query: (args) => {
        const { _page, _limit, _sort, _order, _search, _category } = args;
        const queryParams = {
          _page,
          _limit,
          _sort,
          _order,
          _search,
          _category,
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
