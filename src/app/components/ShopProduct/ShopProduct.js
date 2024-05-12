import styles from "./ShopProduct.module.scss";
import shopData from "../ShopContent/ShopData";
import Image from "next/image";

export const ShopProduct = () => {
	return shopData.map((product) => {
			return (
				<>
				{ product.isBestseller ? 
					<div className={styles.container} key={product.id}>
					<Image
						src={product.img}
						alt='Product'
						className={styles.productImage}
						/>
					<p className={styles.productName}>{product.name}</p>
					<p className={styles.productPrice}>${product.price}</p>
					<button>Add To Cart</button>
				</div> : ""
				}
				</>
			);
	});
};
