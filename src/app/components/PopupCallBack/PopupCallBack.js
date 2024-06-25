import styles from "./PopupCallBack.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const PopupCallBack = ({ setIsModalOpen }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		const handleClickOutside = (e) => {
			ref.current && !ref.current.contains(e.target)
				? setIsModalOpen(false)
				: "";
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={styles.container}>
			<motion.div
				className={styles.popupInner}
				variants={AnimationVariants.modalAnimation}
				initial='initial'
				animate={isInView ? "animate" : "initial"}
				ref={ref}>
				<h2>REQUEST A CALLBACK</h2>
				<button
					className={styles.btnClose}
					onClick={() => {
						setIsModalOpen(false);
					}}>
					<IoMdCloseCircleOutline />
				</button>
				<p>We will call you in 35 seconds, just enter your number</p>
				<input type='text' minLength={9} />
				<p>(Phone number must contain atleast 9 digits)</p>
				<button
					className={styles.btnSend}
					onClick={() => setIsModalOpen(false)}>
					send
				</button>
			</motion.div>
		</div>
	);
};
