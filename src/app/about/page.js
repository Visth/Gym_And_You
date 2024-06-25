"use client";
import "../../app/styles/globals.css";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";
import { FirstWorkout } from "../components/FirstWorkout/FirstWorkout";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Interlude } from "../components/Interlude/Interlude";
import { Navbar } from "../components/Navbar/Navbar";
import { Team } from "../components/Team/Team";
import { Testimonials } from "../components/Testimonials/Testimonials";

export default function About() {
	return (
		<AnimatedPage>
			<main>
				<Navbar />
				<Hero>about</Hero>
				<AboutUs />
				<Testimonials />
				<Team />
				<Interlude
					paragraph='Start today...'
					heading='…We’re the people You can count on!'
					isSecond={true}
				/>
				<FirstWorkout />
				<Footer />
			</main>
		</AnimatedPage>
	);
}
