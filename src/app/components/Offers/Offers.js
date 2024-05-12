import styles from "./Offers.module.scss";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { offersData } from "./offersData";
import { Button } from "../Button/Button";

export const Offers = () => {
	return (
		<div className={styles.container}>
			<h2>Our Pricing Plans For You</h2>
			<div className={styles.cardsContainer}>
				{offersData.map((offer) => (
					<div className={styles.card} key={offer.id}>
						<h3>{offer.title}</h3>
						<p>
							<span className={styles.price}>${offer.price}</span>{" "}
							/monthly
						</p>
						<hr />
						<div>
							<ul>
								<li>
									<span>
										{offer.gym ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Gym Access
								</li>
								<li>
									<span>
										{offer.yoga ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Yoga Section Access
								</li>
								<li>
									<span>
										{offer.boxing ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Boxing Training
								</li>
								<li>
									<span>
										{offer.trainer ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Personal Trainer Meetings
								</li>
								<li>
									<span>
										{offer.swimming ? (
											<AiOutlineCheck
												className={styles.open}
											/>
										) : (
											<AiOutlineClose
												className={styles.close}
											/>
										)}
									</span>{" "}
									Swimming Pool
								</li>
							</ul>
						</div>
						<Button>join now</Button>
					</div>
				))}
			</div>
		</div>
	);
};
