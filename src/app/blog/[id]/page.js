"use client";
import "../../../app/styles/globals.css";
import { Article } from "@/app/components/BlogContent/Article/Article";
import { Footer } from "@/app/components/Footer/Footer";
import { Hero } from "@/app/components/Hero/Hero";
import { Navbar } from "@/app/components/Navbar/Navbar";
import { AnimatedPage } from "@/app/components/AnimatedPage/AnimatedPage";

export default function Details() {
	return (
		<AnimatedPage>
			<main>
				<Navbar />
				<Hero>blog details</Hero>
				<Article />
				<Footer />
			</main>
		</AnimatedPage>
	);
}
