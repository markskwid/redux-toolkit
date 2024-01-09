import { createSlice } from "@reduxjs/toolkit";

const productInitialState = [
	{
		id: 1,
		title: "Item 1",
		price: 6,
		description: "This is a first product - amazing!",
	},

	{
		id: 2,
		title: "Item 2",
		price: 9,
		description: "This is a second product - amazing!",
	},
];

const productSlice = createSlice({
	name: "cart",
	initialState: productInitialState,
});

//export const cartActions = productSlice.actions;
export default productSlice.reducer;
