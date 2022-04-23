import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeHeaders = {
  "X-RapidAPI-Host": "coinlore-cryptocurrency.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.REACT_APP_APIKEY,
};

const baseUrl = "https://coinlore-cryptocurrency.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoExchangeHeaders });

export const cryptoExchangeApi = createApi({
  reducerPath: "cryptoExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchange: builder.query({
      query: () => createRequest("/api/exchanges/"),
    }),
  }),
});

export const { useGetCryptoExchangeQuery } = cryptoExchangeApi;
