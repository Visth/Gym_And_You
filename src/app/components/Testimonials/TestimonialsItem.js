import Image from "next/image";
import styles from "./TestimonialsItem.module.scss";

export const TestimonialsItem = ({ testimonial }) => {
	return (
		<div className={styles.testimonialsItem}>
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
		</div>
	);
};
