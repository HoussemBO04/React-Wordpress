import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi: any = createApi({
    reducerPath: "search",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        getSearch: builder.query({
            query: (search: any) => ({
                url: `/search?search=${search}`,
            }),
        }),
    })
})

export const { useGetSearchQuery} = searchApi;
