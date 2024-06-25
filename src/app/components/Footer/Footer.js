import styles from "./Footer.module.scss";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaLocationArrow,
} from "react-icons/fa";
import { Rubik_Scribble } from "next/font/google";

const rubikScribble = Rubik_Scribble({
	style: ["normal"],
	subsets: ["latin"],
	weight: "400",
});

export const Footer = () => {
	return (
		<section className={styles.container}>
			<div className={styles.footerContent}>
				<div className={styles.footerContent__Box}>
					<p
						className={
							styles.brandName + " " + rubikScribble.className
						}>
						Gym&You
					</p>
					<p className={styles.description}>
						Join our gym to strengthen your body, improve fitness,
						and achieve your fitness goals. Get started today!
					</p>
				</div>
				<div className={styles.footerContent__Box}>
					<h3>Useful Links</h3>
					<ul>
						<li>
							<a href='/about' className={styles.link}>
								About
							</a>
						</li>
						<li>
							<a href='/faq' className={styles.link}>
								Faq
							</a>
						</li>
						<li>
							<a href='/blog' className={styles.link}>
								Blog
							</a>
						</li>
						<li>
							<a href='/contact' className={styles.link}>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className={styles.footerContent__Box}>
					<h3>Opening Hours</h3>
					<p>Monday - Friday</p>
					<p>08:00 AM - 11:00 PM</p>
					<p>Saturday - Sunday</p>
					<p>09:00 AM - 10:00 PM</p>
				</div>
				<div className={styles.footerContent__Box}>
					<h3>Contact</h3>
					<div className={styles.contactBox}>
						<FaLocationArrow className={styles.contactBox__icon} />
						<a>12 Park Ave California</a>
					</div>
					<div className={styles.contactBox}>
						<AiFillMail className={styles.contactBox__icon} />
						<a>GymAndYou@gmail.com</a>
					</div>
					<div className={styles.contactBox}>
						<AiFillPhone className={styles.contactBox__icon} />
						<a>(123) 987 654 321</a>
					</div>
				</div>
			</div>
			<hr />
			<div className={styles.footerDate}>
				<p className={styles.date}>
					&copy; Copyright {new Date().getFullYear()} Gym&You All
					Rights Reserved.
				</p>
			</div>
		</section>
	);
};
