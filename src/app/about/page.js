import "../../app/styles/globals.css";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { FirstWorkout } from "../components/FirstWorkout/FirstWorkout";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Interlude } from "../components/Interlude/Interlude";
import { Navbar } from "../components/Navbar/Navbar";
import { Team } from "../components/Team/Team";
import { Testimonials } from "../components/Testimonials/Testimonials";

export default function About() {
	return (
		<main>
			<Navbar />
			<Hero>about</Hero>
			<AboutUs />
			<Testimonials />
			<Team />
			<Interlude
				paragraph='WHATEVER YOUR MOOD IS…'
				heading='… We’ve got a Fitness Class for it!'
				isSecond={true}
			/>
			<FirstWorkout />
			<Footer />
		</main>
	);
}
