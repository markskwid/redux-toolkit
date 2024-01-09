import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal";
import cartSlice from "./cart";
import productSlice from "./product";
const store = configureStore({
	reducer: {
		cart: cartSlice,
		modal: modalSlice,
		product: productSlice,
	},
});

export default store;
