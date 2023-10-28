import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { pause } from "../../utils/pause";

const feedbackApi = createApi({
  reducerPath: 'feedback',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:5000/api',
    fetchFn: async (...arg) => {
      await pause(3000);
      return await fetch(...arg);
    },
  }),
  endpoints: (builder)=>({
    getAllFeedback: builder.query({
      query: () => `/get-all-feedbacks`
    }),
    getFeedback: builder.query({
      query: (id) => `/get-feedback/${id}`
    }),
    createFeedback: builder.mutation({
      query: (feedback) => ({
        url: "/create-feedback",
        method: "POST",
        body: feedback
      })
    }),
  })
})
export const {useGetFeedbackQuery,useCreateFeedbackMutation,useGetAllFeedbackQuery} = feedbackApi;
export const feedbackReducer = feedbackApi.reducer;
export default feedbackApi