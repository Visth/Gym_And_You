import styles from "./Navbar.module.scss";
import { Rubik_Scribble } from "next/font/google";
import { FaShoppingCart } from "react-icons/fa";

const rubikScribble = Rubik_Scribble({
	style: ["normal"],
	subsets: ["latin"],
	weight: "400",
});

export const Navbar = () => {
	return (
		<div className={styles.container}>
			<a
				className={styles.brandName + " " + rubikScribble.className}
				href='/'>
				Gym&You
			</a>
			<ul className={styles.listContainer}>
				<li>
					<a className={styles.listContainer__item} href='/'>
						home
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/about'>
						about
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/shop'>
						shop
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/faq'>
						faq
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/blog'>
						blog
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/contact'>
						contact
					</a>
				</li>
				<li>
					<a className={styles.listContainer__item} href='/cart'>
						<FaShoppingCart className={styles.cart} />
					</a>
				</li>
			</ul>
		</div>
	);
};
