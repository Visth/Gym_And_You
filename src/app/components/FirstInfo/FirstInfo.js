import styles from "./FirstInfo.module.scss";
import Image from "next/image";
import firstInfoImage from "../../assets/gym_05.jpg";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const FirstInfo = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<Image
				src={firstInfoImage}
				alt='fitness image'
				className={styles.firstInfoImage}
			/>
			<div className={styles.firstInfoText}>
				<h2>
					Embrace Your full potential... <span>WITH OUR HELP!</span>
				</h2>
				<p>
					With a notion that fitness activities are not just mere 3
					times a week routine, but rather a day-to-day lifestyle, we
					have opened a first of our fitness centers in the city… When
					we were asking ourselves, whether we would be able to offer
					something different to what other fitness studios do offer,
					we found the answer. It was - a skilled team of trainers!
				</p>
			</div>
		</motion.div>
	);
};
