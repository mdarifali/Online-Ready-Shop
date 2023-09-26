import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const prodctApi = createApi ({
    reducerPath: 'prodctApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query ({
            query: () => 'posts',
        }),
    }),
})

export const { useGetProductsQuery } = prodctApi;
export default prodctApi;