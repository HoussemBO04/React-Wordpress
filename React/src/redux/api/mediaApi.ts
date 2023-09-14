import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mediaApi: any = createApi({
    reducerPath: "media",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        getMedias: builder.query({
            query: () => ({
                url: `/media`,
            }),
        }),
        getMedia: builder.query({
            query: (id: number) => ({
                url: `/media/${id}`,
            }),
        }),
    })
})

export const { useGetMediasQuery, useGetMediaQuery } = mediaApi;