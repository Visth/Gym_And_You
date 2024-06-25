import styles from "./Testimonials.module.scss";
import { testimonialsData } from "./testimonialsData";
import { TestimonialsItem } from "./TestimonialsItem";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const Testimonials = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>What Our Client Say’s About Us</h2>
			<div className={styles.testimonialsContainer}>
				{testimonialsData.map((testimonial) => (
					<TestimonialsItem
						testimonial={testimonial}
						key={testimonial.id}
					/>
				))}
			</div>
		</motion.section>
	);
};
