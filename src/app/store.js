import counterReducer from '@/features/counter';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
