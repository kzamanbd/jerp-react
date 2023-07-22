import { apiSlice } from '@/features/api/apiSlice';
import authSlice from '@/features/auth/authSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
