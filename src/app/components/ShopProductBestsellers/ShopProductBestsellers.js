"use client";
import styles from "./ShopProductBestsellers.module.scss";
import shopData from "../ShopContent/ShopData";
import Image from "next/image";
import { useContext } from "react";
import { ShopContext } from "@/app/shopContext/ShopContext";

export const ShopProductBestsellers = () => {
	const { addToCart, cartItems } = useContext(ShopContext);

	return shopData.map((product) => {
		const cartItemAmount = cartItems[product.id];
		return (
			<div key={product.id}>
				{product.isBestseller ? (
					<div className={styles.container}>
						<Image
							src={product.img}
							alt='Product'
							className={styles.productImage}
						/>
						<p className={styles.productName}>{product.name}</p>
						<p className={styles.productPrice}>${product.price}</p>
						<button
							onClick={() => {
								addToCart(product.id);
							}}>
							Add To Cart{" "}
							{cartItemAmount > 0 && (
								<span>({cartItemAmount})</span>
							)}
						</button>
					</div>
				) : (
					""
				)}
			</div>
		);
	});
};
