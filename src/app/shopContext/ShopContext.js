"use client";
import { createContext, useState, useEffect } from "react";
import shopData from "../components/ShopContent/ShopData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < shopData.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

const getStoredCart = () => {
	const storedCart = localStorage.getItem("cart");
	return storedCart ? JSON.parse(storedCart) : getDefaultCart();
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getStoredCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = shopData.find(
					(product) => product.id === Number(item)
				);
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}

		return totalAmount;
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		getTotalCartAmount,
	};

	console.log(cartItems);
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};
