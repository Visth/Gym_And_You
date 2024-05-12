import styles from "./LandingPage.module.scss";
import { Button } from "../Button/Button";

export const LandingPage = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroText}>
				<h1>NEVER GIVE UP</h1>
				<p>
					Every bodybuilder requires a lot of dedication and effort to
					shape his/her body into something to be proud of. We can
					give you everything you need for!
				</p>
				<Button>join us</Button>
			</div>
		</div>
	);
};
