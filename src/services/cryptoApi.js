import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "8dd6b8a368msh45df3133d8e3adap1e839fjsn0ee4d962c5e9",
  "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
};

const baseURL = "https://coinlore-cryptocurrency.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/api/global/"),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/api/ticker/${coinId}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptosDetailsQuery } = cryptoApi;
