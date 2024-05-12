import "../../app/styles/globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { BlogContent } from "../components/BlogContent/BlogContent";
import { Footer } from "../components/Footer/Footer";

export default function Blog() {
	return (
		<section>
			<Navbar />
			<Hero>blog</Hero>
			<BlogContent />
			<Footer />
		</section>
	);
}
