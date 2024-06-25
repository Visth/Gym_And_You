"use client";
import styles from "./Cart.module.scss";
import shopData from "../ShopContent/ShopData";
import { CartItem } from "../CartItem/CartItem";
import { ShopContext } from "@/app/shopContext/ShopContext";
import { useContext, useState } from "react";
import Link from "next/link";
import { PopupConfirmation } from "../PopupConfirmation/PopupConfirmation";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const Cart = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);
	const { getTotalCartAmount, cartItems } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	return (
		<motion.section
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			{totalAmount > 0 ? (
				<>
					<h2>Your Cart Items</h2>
					<div className={styles.cartItemsContainer}>
						<div className={styles.cartHeadingInfo}>
							<p className={styles.cartHeadingInfo__first}>
								Product Name
							</p>
							<p className={styles.cartHeadingInfo__second}>
								Price
							</p>
							<p className={styles.cartHeadingInfo__third}>
								Quantity
							</p>
							<p className={styles.cartHeadingInfo__fourth}>
								Total Price
							</p>
						</div>
						{shopData.map((product) => {
							if (cartItems[product.id] !== 0) {
								return (
									<CartItem key={product.id} data={product} />
								);
							}
						})}
					</div>
					<div className={styles.checkout}>
						<p>Subtotal: ${totalAmount.toFixed(2)}</p>
						<Link href='/shop'>
							<button>Continue Shopping</button>
						</Link>
						<button
							onClick={() => {
								setIsCheckoutClicked(true);
							}}>
							Checkout
						</button>
					</div>
					{isCheckoutClicked && (
						<PopupConfirmation
							setIsCheckoutClicked={setIsCheckoutClicked}
						/>
					)}
				</>
			) : (
				<div className={styles.emptyCartContainer}>
					<h2>Your Cart Is Empty</h2>
					<Link href='/shop'>
						<button>Go Shopping</button>
					</Link>
				</div>
			)}
		</motion.section>
	);
};
