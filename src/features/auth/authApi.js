import { apiSlice } from '@/features/api/apiSlice';
import { updateCurrentUser } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        tagTypes: ['User'],
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('loggedIn', true);
                    dispatch(updateCurrentUser(result.data?.user));
                } catch (error) {
                    console.error(error);
                }
            },
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/api/auth/login',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem('token', result.data?.data?.token?.access_token);
                    dispatch(authApi.endpoints.getCurrentUser.initiate());
                } catch (error) {
                    console.error(error);
                }
            },
        }),

        logout: builder.mutation({
            query: () => ({
                url: '/api/logout',
                method: 'GET',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(updateCurrentUser({ menu: [], user: {} }));
                } catch (error) {
                    console.error(error);
                }
            },
        }),

        getCurrentUser: builder.query({
            query: () => '/api/web/v2/menu',
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(updateCurrentUser(result.data));
                } catch (error) {
                    console.error(error);
                }
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation, useGetCurrentUserQuery, useLogoutMutation } =
    authApi;
