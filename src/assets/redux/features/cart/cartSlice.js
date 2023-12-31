import { createSlice } from "@reduxjs/toolkit";
import {apiData} from "../../../components/apiData";



const initialState = { 
    cart: [],
    products: apiData,
    totalQuantity: 0,
    totalPrice: 0,
 };

export const CartSlice  = createSlice({
    
    name: 'cart',
    initialState,
    reducers: {

        handleAddToCart : (state, action) => {
            let find = state.cart.findIndex((item) => item._id === action.payload._id);
            if (find  >= 0) {
                state.cart[find].quantity += 1;
            }
            else{
                state.cart.push(action.payload);
            }
        },

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },

          removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item._id !== action.payload);
            console.log(state.cart);
          },

          increaseItemQuantity: (state, action) => {

            state.cart = state.cart.map((item) => {
              if (item._id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },

          decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item._id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });
          },

    }
});

export const { handleAddToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = CartSlice.actions;

export default CartSlice.reducer;