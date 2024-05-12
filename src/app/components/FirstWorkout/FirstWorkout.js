import styles from "./FirstWorkout.module.scss";

export const FirstWorkout = () => {
	return (
		<section className={styles.container}>
			<h2>First Workout For Free</h2>
			<p>
				You can easily try our services for free, and decide which
				workout is better for you.
			</p>
			<button className={styles.btn}>send us a message</button>
		</section>
	);
};
