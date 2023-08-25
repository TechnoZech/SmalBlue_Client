import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import fetchOffersReducer from './slices/fetchOffersSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        offers: fetchOffersReducer,
    }
});