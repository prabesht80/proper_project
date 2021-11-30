import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'c2741c98bdmsh84cd9cbf50189b7p1f86c3jsna15abd164de8',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

//utility function which simply add url and header
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'), //passing utility function to get the coins data
    }),
  }),
});

//endpoint object name and exprting has to be same  use--getcrypto--query

export const { useGetCryptosQuery } = cryptoApi;
