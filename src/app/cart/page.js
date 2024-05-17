import "../styles/globals.css";
import { Footer } from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Cart } from "../components/Cart/Cart";
import { ShopContextProvider } from "../shopContext/ShopContext";

export default function CartPage() {
	return (
		<main>
			<ShopContextProvider>
			<Navbar />
			<Hero>cart</Hero>
			<Cart />
			<Footer />
			</ShopContextProvider>
		</main>
	);
}
