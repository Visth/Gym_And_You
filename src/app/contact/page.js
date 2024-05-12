import { ContactBoxes } from "../components/ContactBoxes/ContactBoxes";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.css";

export default function Contact() {
	return (
		<section>
			<Navbar />
			<Hero>contact</Hero>
			<ContactBoxes />
			<ContactForm />
			<Footer />
		</section>
	);
}
