import styles from "./BlogContent.module.scss";
import { blogData } from "./blogData";
import { BlogItem } from "./BlogItem";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimationVariants from "../AnimationVariants/AnimationVariants";

export const BlogContent = () => {
	const ref = useRef();
	const isInView = useInView(ref, { once: true });

	return (
		<motion.section
			className={styles.container}
			variants={AnimationVariants.slideIn}
			initial='initial'
			animate={isInView ? "animate" : "initial"}
			ref={ref}>
			<h2>Check Our Latest News & Blog</h2>
			<div className={styles.blogItemContainer}>
				{blogData.map((blog) => (
					<BlogItem blog={blog} key={blog.id} />
				))}
			</div>
		</motion.section>
	);
};
