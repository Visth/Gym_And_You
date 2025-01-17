"use client";
import "../../app/styles/globals.css";
// import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
// import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { ShopContent } from "../components/ShopContent/ShopContent";

export default function Shop() {
	return (
		<AnimatedPage>
			<main>
				<Navbar />
				<Hero>shop</Hero>
				<ShopContent />
				<Footer />
			</main>
		</AnimatedPage>
	);
}
