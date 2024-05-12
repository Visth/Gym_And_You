import styles from "./Team.module.scss";
import Image from "next/image";
import { teamData } from "./teamData";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export const Team = () => {
	return (
		<div className={styles.container}>
			<h2>Our Trainers Team</h2>
			<div className={styles.cardContainer}>
				{teamData.map((trainer) => (
					<div className={styles.card} key={trainer.id}>
						<Image
							src={trainer.img}
							alt={trainer.alt}
							className={styles.card__image}
						/>
						<div className={styles.card__text}>
							<h3>{trainer.name}</h3>
							<div>
								<FaFacebookF className={styles.icon} />
								<FaInstagram className={styles.icon} />
								<FaTwitter className={styles.icon} />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
