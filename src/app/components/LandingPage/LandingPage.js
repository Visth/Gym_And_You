"use client";
import styles from "./LandingPage.module.scss";
import { Button } from "../Button/Button";
import Link from "next/link";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const LandingPage = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<div className={styles.heroContainer}>
			<motion.div
				className={styles.heroText}
				variants={AnimationVariants.fadeIn2}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				<h1>HIT OUR GYM</h1>
				<p>
				“Start where you are. Use what you have. Do what you can.” — Arthur Ashe
				</p>
				<Link href='/contact'>
					<Button>join us</Button>
				</Link>
			</motion.div>
		</div>
	);
};
