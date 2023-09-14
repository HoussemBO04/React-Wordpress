import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi: any = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => ({
                url: `/posts`,
            }),
        }),
        getPost: builder.query({
            query: (id: number) => ({
                url: `/posts/${id}`,
            }),
        }),
    })
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi;
