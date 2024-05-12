import { FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import styles from "./BlogItem.module.scss";
import Image from "next/image";

export const BlogItem = ({ blog }) => {
	return (
		<div className={styles.container}>
			<Image src={blog.img} alt={blog.alt} className={styles.image} />
			<div className={styles.info}>
				<div className={styles.info__inside}>
					<FaUser className={styles.icon} />
					<p>By {blog.writer}</p>
				</div>
				<div className={styles.info__inside}>
					<MdDateRange className={styles.icon} />
					<p>{blog.date}</p>
				</div>
			</div>
			<hr />
			<h3>{blog.title}</h3>
			<p className={styles.text}>{blog.text}</p>
			<a href={`blog/${blog.link}`} className={styles.link}>
				Read More
			</a>
		</div>
	);
};
