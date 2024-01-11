import { modalActions } from "./modal";
import { cartActions } from "./cart";

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(
				"https://react-toolkit-cad54-default-rtdb.firebaseio.com/cart.json"
			);

			if (!response.ok) {
				throw new Error("Failed to get cart data");
			}

			const data = await response.json();

			return data;
		};

		try {
			const cartData = await fetchData();
			dispatch(
				cartActions.replaceCart({
					items: cartData.items || [],
					totalQty: cartData.totalQty,
				})
			);
		} catch (error) {
			dispatch(
				modalActions.showNotification({
					status: "error",
					title: "Error getting data",
					message: "There is an error",
				})
			);
		}
	};
};

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			modalActions.showNotification({
				status: "pending",
				title: "Updating cart...",
				message: "Please wait...",
			})
		);

		const sendReq = async () => {
			const response = await fetch(
				"https://react-toolkit-cad54-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify({
						items: cart.items || [],
						totalQty: cart.totalQty,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Failed updating cart");
			}
		};

		try {
			await sendReq();
			dispatch(
				modalActions.showNotification({
					status: "success",
					title: "Successfully updated the cart",
					message: "Cart has been updated",
				})
			);
		} catch (error) {
			dispatch(
				modalActions.showNotification({
					status: "error",
					title: "Error updating the cart",
					message: "There is an error",
				})
			);
		}
	};
};
