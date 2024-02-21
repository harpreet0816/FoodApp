import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
    //this reducer is our apps big reducer and it consists of small reducer from different slices , each slice have its own reducer
    reducer: {
        cart: cartReducer
    }
});

export default appStore;