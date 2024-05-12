import styles from "./ContactBoxes.module.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

export const ContactBoxes = () => {
	return (
		<section className={styles.container}>
			<a
				href='https://www.google.pl/maps/place/12+Park+Ave,+Petaluma,+CA+94952'
				target='_blank'
				rel='noreferrer'>
				<div className={styles.card}>
					<FaMapMarkedAlt className={styles.icon} />
					<h3>Address</h3>
					<p className={styles.card__text}>12 Park Ave California</p>
				</div>
			</a>
			<a href='tel:+9876543210' rel='noreferrer'>
				<div className={styles.card}>
					<FaPhoneVolume className={styles.icon} />
					<h3>Call Us</h3>
					<p className={styles.card__text}>(123) 987 654 321</p>
				</div>
			</a>
			<a href='mailto:GymAndYouEXAMPLE@email.com' rel='noreferrer'>
				<div className={styles.card}>
					<IoIosMailUnread className={styles.icon} />
					<h3>Our Email</h3>
					<p className={styles.card__text}>GymAndYou@gmail.com</p>
				</div>
			</a>
		</section>
	);
};
