import styles from "./ShopContentBestsellers.module.scss";
import { ShopProductBestsellers } from "../ShopProductBestsellers/ShopProductBestsellers";
import Link from "next/link";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const ShopContentBestsellers = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>Our Bestsellers</h2>
			<div className={styles.shopProductContainer}>
				<ShopProductBestsellers />
			</div>
			<Link href='/shop'>
				<button className={styles.btn}>Go To Shop</button>
			</Link>
		</motion.div>
	);
};
