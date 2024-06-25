"use client";
import "../styles/globals.css";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from "../components/Cart/Cart";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";

export default function CartPage() {
	return (
		<AnimatedPage>
			<main>
				<Navbar />
				<Hero>cart</Hero>
				<Cart />
				<Footer />
			</main>
		</AnimatedPage>
	);
}
