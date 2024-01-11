import { modalActions } from "../../store/modal";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
const CartButton = (props) => {
	const dispatch = useDispatch();
	const totalQty = useSelector((state) => state.cart.totalQty);
	const toggleModal = () => dispatch(modalActions.toggle());
	return (
		<button className={classes.button} onClick={toggleModal}>
			<span>My Cart</span>
			<span className={classes.badge}>{totalQty}</span>
		</button>
	);
};

export default CartButton;
