import styles from "./ShopContentBestsellers.module.scss";
import { ShopProductBestsellers } from "../ShopProductBestsellers/ShopProductBestsellers";

export const ShopContentBestsellers = () => {
	return (
		<div className={styles.container}>
			<h2>Our Bestsellers</h2>
			<div className={styles.shopProductContainer}>
				<ShopProductBestsellers />
			</div>
			<button className={styles.btn}>Go To Shop</button>
		</div>
	);
};
