"use client";
import styles from "./Counter.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const Counter = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.5,
	});
	

	return (
		<div ref={ref} className={styles.container}>
			{inView && (
				<div className={styles.counterBox}>
					<CountUp
						end={1800}
						duration={2}
						className={styles.counterBox__number}
					/>
					<p className={styles.counterBox__text}>Total Members</p>
				</div>
			)}

			{inView && (
				<div className={styles.counterBox}>
					<CountUp
						end={120}
						duration={3}
						className={styles.counterBox__number}
					/>
					<p className={styles.counterBox__text}>Equipment</p>
				</div>
			)}

			{inView && (
				<div className={styles.counterBox}>
					<CountUp
						end={90}
						duration={3}
						className={styles.counterBox__number}
					/>
					<p className={styles.counterBox__text}>Total Trainers</p>
				</div>
			)}

			{inView && (
				<div className={styles.counterBox}>
					<CountUp
						end={40}
						duration={3}
						className={styles.counterBox__number}
					/>
					<p className={styles.counterBox__text}>Win Awards</p>
				</div>
			)}
		</div>
	);
};
