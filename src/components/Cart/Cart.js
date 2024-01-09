import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartItem = useSelector((state) => state.cart);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItem && cartItem.length > 0 ? (
					cartItem.map((item) => (
						<CartItem
							key={item.id}
							item={{
								id: item.id,
								title: item.title,
								quantity: item.qty,
								total: item.price * item.qty,
								price: item.price,
							}}
						/>
					))
				) : (
					<p>No item here</p>
				)}
			</ul>
		</Card>
	);
};

export default Cart;
