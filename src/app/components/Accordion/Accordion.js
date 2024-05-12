"use client";

import styles from "./Accordion.module.scss";
import Image from "next/image";
import faq_image from "../../assets/faq_image.jpg";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { accordionData } from "./accordionData";

export const Accordion = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<section className={styles.container}>
			<Image
				src={faq_image}
				alt='training man photo'
				className={styles.image}
			/>
			<div className={styles.accordion}>
				<h2>General Questions</h2>
				{accordionData.map((q, index) => (
					<div
						key={index}
						className={styles.accordion__item}
						onClick={() => toggleAccordion(index)}>
						<div className={styles.accordion__box}>
							<h3 className={styles.accordion__question}>
								{q.question}
							</h3>
							{activeIndex === index ? (
								<AiOutlineMinus />
							) : (
								<AiOutlinePlus />
							)}
						</div>
						{activeIndex === index && (
							<div className={styles.accordion__answer}>
								{q.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};
