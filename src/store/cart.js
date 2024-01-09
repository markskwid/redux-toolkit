import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addItem(state, action) {
			const existingItem = state.find((item) => item.id === action.payload.id);

			if (existingItem) {
				existingItem.qty += 1;
			} else {
				state.push({ ...action.payload, qty: 1 });
			}
		},

		minusItem(state, action) {
			const existingItemIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				const existingItem = state[existingItemIndex];

				if (existingItem.qty === 1) {
					state.splice(existingItemIndex, 1);
					// return state.filter((item) => item.id !== action.payload.id);
				} else {
					existingItem.qty -= 1;
				}
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
