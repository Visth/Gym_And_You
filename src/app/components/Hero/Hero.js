import "./Hero.module.scss";
import styles from "./Hero.module.scss";

export const Hero = ({ children }) => {
	return (
		<section className={styles.container}>
			<h2>{children}</h2>
		</section>
	);
};
