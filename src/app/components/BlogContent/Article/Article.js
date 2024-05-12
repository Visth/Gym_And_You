"use client";
import styles from "./Article.module.scss";
import { articleData } from "./articleData";
import { ArticleItem } from "./ArticleItem";
import { useParams } from "next/navigation";

export const Article = () => {
	const { id } = useParams();

	const selectedArticle = articleData.find(
		(article) => article.id === Number(id)
	);

	return (
		<section className={styles.container}>
			<ArticleItem {...selectedArticle} />
		</section>
	);
};
