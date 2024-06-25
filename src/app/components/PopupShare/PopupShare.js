import styles from "./PopupShare.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const PopuppShare = ({ setIsPopupActive }) => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		const handleClickOutside = (e) => {
			ref.current &&
			!ref.current.contains(e.target)
				? setIsPopupActive(false)
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
				<h3>share this article</h3>
				<button
					className={styles.close}
					onClick={() => {
						setIsPopupActive(false);
					}}>
					<IoMdCloseCircleOutline />
				</button>
				<ul>
					<li className={styles.facebook}>
						<FaFacebook /> Facebook
					</li>
					<li className={styles.instagram}>
						<FaInstagramSquare /> Instagram
					</li>
					<li className={styles.linkedIn}>
						<FaLinkedin /> LinkedIn
					</li>
					<li className={styles.twitter}>
						<FaTwitterSquare /> Twitter
					</li>
				</ul>
			</motion.div>
		</div>
	);
};
