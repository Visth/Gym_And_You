import styles from "./FirstInfo.module.scss";
import Image from "next/image";
import firstInfoImage from "../../assets/gym_05.jpg";

export const FirstInfo = () => {
	return (
		<div className={styles.container}>
			<Image
				src={firstInfoImage}
				alt='fitness image'
				className={styles.firstInfoImage}
			/>
			<div className={styles.firstInfoText}>
				<h2>
					Fitness is the Answer...{" "}
					<span>WHENEVER THE QUESTION IS YOUR PHYSICAL SHAPE!</span>
				</h2>
				<p>
					With a notion that fitness activities are not just mere 3
					times a week routine, but rather a day-to-day lifestyle, we
					have opened a first of our fitness centers in the city… When
					we were asking ourselves, whether we would be able to offer
					something different to what other fitness studios do offer,
					we found the answer. It was - a skilled team of trainers!
				</p>
			</div>
		</div>
	);
};
