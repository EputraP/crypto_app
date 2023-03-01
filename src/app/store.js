import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoRank } from "../services/cryptoRank";
import { cryptoNews } from "../services/cryptoNews";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoRank.reducerPath]: cryptoRank.reducer,
    [cryptoNews.reducerPath]: cryptoNews.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cryptoApi.middleware,
      cryptoRank.middleware,
      cryptoNews.middleware,
    ]),
});
