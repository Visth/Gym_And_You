"use client";
import "../../app/styles/globals.css";
import { Accordion } from "../components/Accordion/Accordion";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
import { FirstWorkout } from "../components/FirstWorkout/FirstWorkout";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";

export default function Faq() {
	return (
		<AnimatedPage>
			<main>
				<Navbar />
				<Hero>faq</Hero>
				<Accordion />
				<FirstWorkout />
				<Footer />
			</main>
		</AnimatedPage>
	);
}
