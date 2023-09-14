import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi: any = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: `/categories`,
            }),
        }),
        getCategorie: builder.query({
            query: (id: number) => ({
                url: `/categories/${id}`,
            }),
        }),
    })
})

export const { useGetCategoriesQuery, useGetCategorieQuery } = categoriesApi;
