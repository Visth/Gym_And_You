import styles from "./AboutUs.module.scss";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import aboutUsImage from "../../assets/equipment_04.jpg";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const AboutUs = () => {
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
				src={aboutUsImage}
				alt='fitness image'
				className={styles.aboutUsImage}
			/>
			<div className={styles.aboutUsText}>
				<h2>
					Meet us! <span>Join today!</span>
				</h2>
				<p>
					Our determination and dedication enable us to overcome any
					challenges, regardless of the circumstances. Together, we
					create an inspiring future and face every situation with
					courage and confidence.
				</p>
				<ul>
					<li>
						<AiOutlineCheck className={styles.checkmark} />
						Open 7 Days A Week!
					</li>
					<li>
						<AiOutlineCheck className={styles.checkmark} />
						Several Fully Equipped Training Rooms
					</li>
					<li>
						<AiOutlineCheck className={styles.checkmark} />
						Professional Trainers
					</li>
					<li>
						<AiOutlineCheck className={styles.checkmark} />
						Boxing Training
					</li>
					<li>
						<AiOutlineCheck className={styles.checkmark} />
						Swimming Pool
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

// <p>
// 	With a notion that fitness activities are not just mere 3
// 	times a week routine, but rather a day-to-day lifestyle, we
// 	have opened a first of our fitness centers in the city… When
// 	we were asking ourselves, whether we would be able to offer
// 	something different to what other fitness studios do offer,
// 	we found the answer. It was - a skilled team of trainers!
// </p>
