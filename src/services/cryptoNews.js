import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  auth_token: "0d152d6d266a65544e39d6bb2d62e9298c5b5a74",
};
// https://cryptopanic.com/api/v1/posts/?auth_token=5a57ab6642ec67eebbf5e2fe5bae496503a5386f
const baseURL = "https://test-api-sepia-omega.vercel.app/";

const createRequest = (url) => ({ url });

export const cryptoNews = createApi({
  reducerPath: "cryptoNews",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: () => createRequest("/CryptoNews/"),
    }),
  }),
});

export const { useGetCryptosNewsQuery } = cryptoNews;
