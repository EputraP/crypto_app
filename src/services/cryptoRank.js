import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "8dd6b8a368msh45df3133d8e3adap1e839fjsn0ee4d962c5e9",
  "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
};

const baseURL = "https://coinlore-cryptocurrency.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoRank = createApi({
  reducerPath: "cryptoRank",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    params: { start: "5", limit: "10" },
  }),
  endpoints: (builder) => ({
    getCryptosRank: builder.query({
      query() {
        return {
          url: `/api/tickers/`,
          headers: cryptoApiHeaders,
        };
      },
    }),
  }),
});

export const { useGetCryptosRankQuery } = cryptoRank;
