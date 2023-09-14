import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pagesApi: any = createApi({
    reducerPath: "pages",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        getPages: builder.query({
            query: () => ({
                url: `/pages`,
            }),
        }),
        getPage: builder.query({
            query: (id: number) => ({
                url: `/pages/${id}`,
            }),
        }),
    })
})

export const { useGetPagesQuery, useGetPageQuery } = pagesApi;
