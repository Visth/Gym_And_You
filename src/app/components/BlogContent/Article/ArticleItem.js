import styles from "./ArticleItem.module.scss";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useState } from "react";
import Image from "next/image";
import { PopuppShare } from "../../PopupShare/PopupShare";

export const ArticleItem = ({ img, alt, title, date, text, quote, text2 }) => {
	const [isPopupActive, setIsPopupActive] = useState(false);

	return (
		<div className={styles.container}>
			<Image src={img} alt={alt} className={styles.image} />
			<div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.date}>Added: {date}</p>
				<p className={styles.text}>{text}</p>
				<p className={styles.quote}>{quote}</p>
				<p className={styles.text}>{text2}</p>
				<div className={styles.btnContainer}>
					<button className={styles.btnLike}>
						<FaHeart className={styles.iconLike} /> Like
					</button>
					<button
						className={styles.btnShare}
						onClick={() => {
							setIsPopupActive(true);
						}}>
						<IoShareSocial className={styles.iconShare} /> Share
					</button>
					<a href='/blog'>
						<button className={styles.btnBack}>
							<RiArrowGoBackFill className={styles.iconBack} />{" "}
							Back
						</button>
					</a>
				</div>
			</div>
			{isPopupActive && (
				<PopuppShare setIsPopupActive={setIsPopupActive} />
			)}
		</div>
	);
};
