import styles from "./TestimonialsItem.module.scss";
import Image from "next/image";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const TestimonialsItem = ({ testimonial }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });
	const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 992px)").matches

	return (
		<motion.div
			className={styles.testimonialsItem}
			variants={isMobile === true ? "" : AnimationVariants.testimonialAnimation}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<div className={styles.testimonialsItem__profile}>
				<Image
					src={testimonial.img}
					alt={testimonial.alt}
					className={styles.testimonialsItem__image}
				/>
				<div className={styles.testimonialsItem__info}>
					<p className={styles.testimonialsItem__name}>
						{testimonial.name}
					</p>
					<p className={styles.testimonialsItem__client}>
						Our Client
					</p>
				</div>
			</div>
			<p className={styles.testimonialsItem__review}>
				{testimonial.review}
			</p>
		</motion.div>
	);
};
