import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (name) => `products`,
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
