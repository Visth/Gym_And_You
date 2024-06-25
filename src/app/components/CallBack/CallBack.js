import styles from "./CallBack.module.scss";
import { Button } from "../Button/Button";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";
import { PopupCallBack } from "../PopupCallBack/PopupCallBack";

export const CallBack = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className={styles.container}>
			<h2>We Are Experts In Fitness</h2>
			<FaPhoneVolume className={styles.phoneIcon} />
			<p className={styles.freeCallRequest_first}>
				Request a FREE call back
			</p>
			<p className={styles.freeCallRequest_second}>
				Our team is ready to assist you with any questions
			</p>
			<button
				className={styles.btn}
				onClick={() => {
					setIsModalOpen(true);
				}}>
				send request
			</button>
			{isModalOpen && <PopupCallBack setIsModalOpen={setIsModalOpen} />}
		</section>
	);
};
