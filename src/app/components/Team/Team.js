import styles from "./Team.module.scss";
import Image from "next/image";
import { teamData } from "./teamData";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const Team = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>Our Trainers Team</h2>
			<motion.div
				className={styles.cardContainer}
				variants={AnimationVariants.slideIn}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				{teamData.map((trainer) => (
					<div className={styles.card} key={trainer.id}>
						<Image
							src={trainer.img}
							alt={trainer.alt}
							className={styles.card__image}
						/>
						<div className={styles.card__text}>
							<h3>{trainer.name}</h3>
							<div>
								<FaFacebookF className={styles.icon} />
								<FaInstagram className={styles.icon} />
								<FaTwitter className={styles.icon} />
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</motion.section>
	);
};
