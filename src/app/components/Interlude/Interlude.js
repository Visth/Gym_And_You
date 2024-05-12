import styles from "./Interlude.module.scss";
import { Button } from "../Button/Button";

export const Interlude = ({ paragraph, heading, isSecond }) => {
	return (
		<div className={isSecond ? styles.secondContainer : styles.container}>
			<div className={styles.interludeText}>
				<p>{paragraph}</p>
				<h2>{heading}</h2>
				<Button>join us</Button>
			</div>
		</div>
	);
};
