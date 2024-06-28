"use client";
import "../../app/styles/globals.css";
<<<<<<< HEAD
=======
// import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
// import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
>>>>>>> 2f515bf85b81449bd57faca6668fd9e0b6150bbf
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { ShopContent } from "../components/ShopContent/ShopContent";

export default function Shop() {
	return (
		<AnimatedPage>
			<main>
<<<<<<< HEAD
				<Navbar />
				<Hero>shop</Hero>
				<ShopContent />
				<Footer />
=======
				<ShopContextProvider>
					<Navbar />
					<Hero>shop</Hero>
					<ShopContent />
					<Footer />
				</ShopContextProvider>
>>>>>>> 2f515bf85b81449bd57faca6668fd9e0b6150bbf
			</main>
		</AnimatedPage>
	);
}
