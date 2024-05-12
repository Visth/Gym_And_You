import styles from "./BlogContent.module.scss";
import { blogData } from "./blogData";
import { BlogItem } from "./BlogItem";

export const BlogContent = () => {
	return (
		<section className={styles.container}>
			<h2>Check Our Latest News & Blog</h2>
			<div className={styles.blogItemContainer}>
				{blogData.map((blog) => (
					<BlogItem blog={blog} key={blog.id}/>
				))}
			</div>
		</section>
	);
};
