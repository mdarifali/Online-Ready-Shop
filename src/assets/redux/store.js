import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import prodctApi from "./features/api/productApi";


export const store = configureStore ({
    reducer: {
        allCart: cartSlice,
        [prodctApi.reducerPath]: prodctApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(prodctApi.middleware),
});

