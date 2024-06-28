import { ShopContextProvider } from "./shopContext/ShopContext";

export const metadata = {
	title: "Gym&You",
	description: "Strona internetowa Gym&You",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
<<<<<<< HEAD
				<ShopContextProvider>{children}</ShopContextProvider>
=======
				<ShopContextProvider>
					{children}
				</ShopContextProvider>
>>>>>>> 2f515bf85b81449bd57faca6668fd9e0b6150bbf
			</body>
		</html>
	);
}
