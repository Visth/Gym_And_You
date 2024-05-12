import styles from "./CallBack.module.scss";
import { Button } from "../Button/Button";
import { FaPhoneVolume } from "react-icons/fa6";

export const CallBack = () => {
	return (
		<section className={styles.container}>
			<h2>We Are Professional And Expert In Fitness</h2>
			<FaPhoneVolume className={styles.phoneIcon} />
			<p className={styles.freeCallRequest_first}>
				Request a FREE call back
			</p>
			<p className={styles.freeCallRequest_second}>
				Our team is here to assist you with any questions you may have
			</p>
			<Button>send request</Button>
		</section>
	);
};
