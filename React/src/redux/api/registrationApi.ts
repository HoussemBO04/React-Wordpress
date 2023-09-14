import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registrationApi: any = createApi({
    reducerPath: "registration",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API,
    }),
    endpoints: (builder) => ({
        postRegistration: builder.mutation<any, any>({
            query: ({username, email, password}: any) => ({
                url: `/registration/create-user/?username=${username}&email=${email}&password=${password}`,
            }),
        }),
    })
})

export const { usePostRegistrationMutation } = registrationApi;
