import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'c2741c98bdmsh84cd9cbf50189b7p1f86c3jsna15abd164de8',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

//utility function which simply add url and header
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

//endpoint object name and exprting has to be same  use--getcrypto--query

export const { useGetNewsQuery } = newsApi;
