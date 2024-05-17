import "../../app/styles/globals.css";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { ShopContent } from "../components/ShopContent/ShopContent";
import { ShopContextProvider } from "../shopContext/shopContext";

export default function Shop() {
	return (
		<main>
			<ShopContextProvider>
				<Navbar />
				<Hero>shop</Hero>
				<ShopContent />
				<Footer />
			</ShopContextProvider>
		</main>
	);
}
