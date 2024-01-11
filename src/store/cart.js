import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQty: 0,
		changed: false,
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQty = action.payload.totalQty;
			state.items = action.payload.items;
		},
		addItem(state, action) {
			state.changed = true;
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.qty += 1;
				existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
			} else {
				state.items.push({
					id: action.payload.id,
					title: action.payload.title,
					price: action.payload.price,
					totalPrice: action.payload.price,
					qty: 1,
				});
			}

			state.totalQty++;
		},

		minusItem(state, action) {
			state.changed = true;
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex !== -1) {
				const existingItem = state.items[existingItemIndex];

				if (existingItem.qty === 1) {
					state.items.splice(existingItemIndex, 1);
				} else {
					existingItem.qty -= 1;
					existingItem.totalPrice =
						existingItem.totalPrice - existingItem.price;
				}
			}

			state.totalQty--;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
