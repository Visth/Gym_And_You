import styles from "./Interlude.module.scss";
import { Button } from "../Button/Button";
import Link from "next/link";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const Interlude = ({ paragraph, heading, isSecond }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={isSecond ? styles.secondContainer : styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<div className={styles.interludeText}>
				<p>{paragraph}</p>
				<h2>{heading}</h2>
				<Link href='/contact'>
					<Button>join us</Button>
				</Link>
			</div>
		</motion.div>
	);
};
