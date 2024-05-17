"use client";
import styles from "./ShopContent.module.scss";
import { ShopProduct } from "../ShopProduct/ShopProduct";
import { useState } from "react";
import shopData from "./ShopData";
import { ShopContextProvider } from "@/app/shopContext/ShopContext";

export const ShopContent = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const categories = ["All", "Protein", "Creatine", "Pre-Workout"];

	const filteredProducts =
		selectedCategory === "All"
			? shopData
			: shopData.filter(
					(product) => product.category === selectedCategory
			  );

	return (
		<ShopContextProvider>
			<section className={styles.container}>
				<h2>Our Products</h2>
				<div className={styles.categoryButtons}>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={
								selectedCategory === category
									? styles.active
									: ""
							}>
							{category}
						</button>
					))}
				</div>
				<div className={styles.productsContainer}>
					{filteredProducts.map((product) => (
						<ShopProduct key={product.id} {...product} />
					))}
				</div>
			</section>
		</ShopContextProvider>
	);
};
