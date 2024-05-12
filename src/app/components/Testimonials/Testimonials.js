import styles from "./Testimonials.module.scss";
import { testimonialsData } from "./testimonialsData";
import { TestimonialsItem } from "./TestimonialsItem";

export const Testimonials = () => {
	return (
		<section className={styles.container}>
			<h2>What Our Client Say’s About Us</h2>
			<div className={styles.testimonialsContainer}>
				{testimonialsData.map((testimonial) => (
					<TestimonialsItem
						testimonial={testimonial}
						key={testimonial.id}
					/>
				))}
			</div>
		</section>
	);
};
