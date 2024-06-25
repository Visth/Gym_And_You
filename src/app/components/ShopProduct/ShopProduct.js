import styles from "./ShopProduct.module.scss";
import Image from "next/image";
import { ShopContext } from "@/app/shopContext/ShopContext";
import { useContext } from "react";

export const ShopProduct = ({ id, img, name, price }) => {
	const { addToCart, cartItems } = useContext(ShopContext);
	const cartItemAmount = cartItems[id];

	return (
		<div className={styles.container} key={id}>
			<Image src={img} alt='Product' className={styles.productImage} />
			<p className={styles.productName}>{name}</p>
			<p className={styles.productPrice}>${price}</p>
			<button
				onClick={() => {
					addToCart(id);
				}}>
				Add To Cart{" "}
				{cartItemAmount > 0 && <span>({cartItemAmount})</span>}
			</button>
		</div>
	);
};
