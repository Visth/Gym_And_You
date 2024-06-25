"use client";
import styles from "./PopupConfirmation.module.scss";
import { useContext } from "react";
import { ShopContext } from "@/app/shopContext/ShopContext";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";
import Link from "next/link";

export const PopupConfirmation = ({ setIsCheckoutClicked }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });
	const { clearCart } = useContext(ShopContext);

	const closeModal = () => {
		setIsCheckoutClicked(false);
		clearCart();
	};

	return (
		<div className={styles.container}>
			<motion.div
				className={styles.popupInner}
				variants={AnimationVariants.modalAnimation}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				<h2>Checkout</h2>
				<p>Your checkout has been sent</p>
				<Link href='/'>
					<button onClick={closeModal}>Got it</button>
				</Link>
			</motion.div>
		</div>
	);
};
