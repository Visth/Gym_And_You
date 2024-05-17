import "../app/styles/globals.css";
import "../app/styles/theme.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { FirstInfo } from "./components/FirstInfo/FirstInfo";
import { Interlude } from "./components/Interlude/Interlude";
import { ShopContentBestsellers } from "./components/ShopContent/ShopContentBestsellers";
import { Counter } from "./components/Counter/Counter";
import { Team } from "./components/Team/Team";
import { Offers } from "./components/Offers/Offers";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { CallBack } from "./components/CallBack/CallBack";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
	return (
		<main>
			<Navbar />
			<LandingPage />
			<FirstInfo />
			<Interlude
				paragraph='WHATEVER YOUR MOOD IS…'
				heading='… We’ve got a Fitness Class for it!'
				isSecond={false}
			/>
			<ShopContentBestsellers />
			<Counter />
			<Team />
			<Interlude
				paragraph='Welcome To Gym&You…'
				heading='… We help to get best fitness goal'
				isSecond={true}
			/>
			<Offers />
			<Testimonials />
			<CallBack />
			<Footer />
		</main>
	);
}
