import styles from "./PopupShare.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const PopuppShare = ({ setIsPopupActive }) => {
	return (
		<div className={styles.container}>
			<div className={styles.popupInner}>
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
			</div>
		</div>
	);
};
