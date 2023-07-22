import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'jerpApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://devapi.jerpbd.com',
        prepareHeaders: async (headers) => {
            const token = localStorage.getItem('token') || null;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: [],
});
