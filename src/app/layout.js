import { ShopContextProvider } from "./shopContext/ShopContext";

export const metadata = {
	title: "Gym&You",
	description: "Strona internetowa Gym&You",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ShopContextProvider>{children}</ShopContextProvider>
			</body>
		</html>
	);
}
