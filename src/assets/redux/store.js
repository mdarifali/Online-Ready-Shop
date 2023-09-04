import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/counter/cartSlice";

export const store = configureStore({
    reducer: {
        allCart: CartSlice.reducer,
    }
})

