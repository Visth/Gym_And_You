"use client";
import styles from "./Cart.module.scss";
import shopData from "../ShopContent/ShopData";
import { CartItem } from "../CartItem/CartItem";
import { ShopContext } from "@/app/shopContext/ShopContext";
import { useContext } from "react";
import Link from "next/link";

export const Cart = () => {
	const { getTotalCartAmount, cartItems } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	return (
		<div className={styles.container}>
			<h2>Your Cart Items</h2>
			<div className={styles.cartItemsContainer}>
				{shopData.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem key={product.id} data={product} />;
					}
				})}
			</div>
			<div className={styles.checkout}>
				<p>Subtotal: ${totalAmount.toFixed(2)}</p>
				<button>
					<Link href='/shop'>Continue Shopping</Link>
				</button>
				<button>Checkout</button>
			</div>
		</div>
	);
};
