import styles from "./Offers.module.scss";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { offersData } from "./offersData";
import { Button } from "../Button/Button";
import Link from "next/link";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const Offers = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>Our Pricing Plans For You</h2>
			<div className={styles.cardsContainer}>
				{offersData.map((offer) => (
					<div className={styles.card} key={offer.id}>
						<h3>{offer.title}</h3>
						<p>
							<span className={styles.price}>${offer.price}</span>{" "}
							/monthly
						</p>
						<hr />
						<div>
							<ul>
								<li>
									<span>
										{offer.gym ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Gym Access
								</li>
								<li>
									<span>
										{offer.yoga ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Yoga Section Access
								</li>
								<li>
									<span>
										{offer.boxing ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Boxing Training
								</li>
								<li>
									<span>
										{offer.trainer ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Personal Trainer Meetings
								</li>
								<li>
									<span>
										{offer.swimming ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Swimming Pool
								</li>
							</ul>
						</div>
						<Link href='/contact'>
							<Button>join now</Button>
						</Link>
					</div>
				))}
			</div>
		</motion.div>
	);
};
