import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./ProductSlice"

import cartReducer from "./cartSlice";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer

    }
});

export default store;