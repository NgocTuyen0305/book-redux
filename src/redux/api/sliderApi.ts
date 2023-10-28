import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";

const sliderApi = createApi({
  reducerPath: "slider",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:5000/api",
    fetchFn: async (...arg) => {
      await pause(3000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder) => ({
    createSlider: builder.mutation({
      query: (slider) => ({
        url: "/create-slider",
        method: "POST",
        body: slider,
      }),
    }),

    getAllSlider: builder.query({
      query: () => ({
        url: `/get-slider`,
      }),
    }),
  }),
});
// console.log('auth api: ',authApi)

export const { useCreateSliderMutation, useGetAllSliderQuery } = sliderApi;
export const sliderReducer = sliderApi.reducer;
export default sliderApi;
