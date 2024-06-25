"use client";
import "../../app/styles/globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { BlogContent } from "../components/BlogContent/BlogContent";
import { Footer } from "../components/Footer/Footer";
import { AnimatedPage } from "../components/AnimatedPage/AnimatedPage";

export default function Blog() {
	return (
		<AnimatedPage>
		<main>
			<Navbar />
			<Hero>blog</Hero>
			<BlogContent />
			<Footer />
		</main>
		</AnimatedPage>
	);
}
