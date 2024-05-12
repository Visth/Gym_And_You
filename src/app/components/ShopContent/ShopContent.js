import styles from "./ShopContent.module.scss";
import { ShopProduct } from "../ShopProduct/ShopProduct";
import { Button } from "../Button/Button";

export const ShopContent = () => {
	return (
		<div className={styles.container}>
			<h2>Our Bestsellers</h2>
			<div className={styles.shopProductContainer}>
				<ShopProduct />
			</div>
			<button className={styles.btn}>Go To Shop</button>
		</div>
	);
};
