import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
	name: "modal",
	initialState: {
		isOpen: false,
		notification: null,
	},
	reducers: {
		toggle(state) {
			state.isOpen = !state.isOpen;
		},

		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
