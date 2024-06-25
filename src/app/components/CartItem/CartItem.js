import styles from "./CartItem.module.scss";
import Image from "next/image";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../shopContext/ShopContext";

export const CartItem = (props) => {
	const { id, img, name, price } = props.data;
	const { addToCart, removeFromCart, cartItems, singleProductAmount } =
		useContext(ShopContext);

	return (
		<div className={styles.container}>
			<Image src={img} alt='product' className={styles.image} />
			<p>{name}</p>
			<p>${price}</p>
			<div className={styles.addAndRemove}>
				<button
					onClick={() => {
						removeFromCart(id);
					}}
					className={styles.btn}>
					<FaMinusCircle className={styles.icon} />
				</button>
				<p className={styles.quantity}>{cartItems[id]}</p>
				<button
					onClick={() => {
						addToCart(id);
					}}
					className={styles.btn}>
					<FaPlusCircle className={styles.icon} />
				</button>
			</div>
			<p className={styles.totalPrice}>
				${singleProductAmount(id).toFixed(2)}
			</p>
		</div>
	);
};
