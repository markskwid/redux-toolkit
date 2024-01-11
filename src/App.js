import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/Notifications/Notification";
import { useEffect } from "react";
import { fetchCartData, sendCartData } from "./store/cart-actions";
let isInitial = true;
function App() {
	const dispatch = useDispatch();
	const isModalOpen = useSelector((state) => state.modal.isOpen);
	const cart = useSelector((state) => state.cart);
	const notification = useSelector((state) => state.modal.notification);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (isInitial) {
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(
				sendCartData({
					items: cart.items || [],
					totalQty: cart.totalQty,
				})
			);
		}
	}, [cart, dispatch]);
	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{isModalOpen && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
