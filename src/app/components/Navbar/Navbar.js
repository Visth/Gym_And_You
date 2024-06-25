"use client";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rubik_Scribble } from "next/font/google";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "@/app/shopContext/ShopContext";
import { useContext, useState, useEffect, useRef } from "react";


const rubikScribble = Rubik_Scribble({
	style: ["normal"],
	subsets: ["latin"],
	weight: "400",
});

export const Navbar = () => {
	const pathname = usePathname();
	const navbarRef = useRef(null);
	const { totalCartItems } = useContext(ShopContext);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			window.innerWidth > 992 ? setIsOpen(true) : setIsOpen(false);
		};

		const handleClickOutside = (e) => {
			window.innerWidth < 992 &&
			navbarRef.current &&
			!navbarRef.current.contains(e.target)
				? setIsOpen(false)
				: "";
		};

		window.addEventListener("resize", handleResize);
		document.addEventListener("mousedown", handleClickOutside);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.container} ref={navbarRef}>
			{isOpen === true ? (
				<>
					<Link
						className={
							styles.brandName + " " + rubikScribble.className
						}
						href='/'>
						Gym&You
					</Link>
					<ul className={styles.listContainer}>
						<li>
							<Link
								className={
									pathname === "/"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/'
								onClick={handleClick}>
								home
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/about"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/about'>
								about
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/shop"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/shop'>
								shop
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/faq"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/faq'>
								faq
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/blog"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/blog'>
								blog
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/contact"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/contact'>
								contact
							</Link>
						</li>
						<li>
							<Link
								className={
									pathname === "/cart"
										? styles.listContainer__item +
										  " " +
										  styles.active
										: styles.listContainer__item
								}
								href='/cart'>
								<FaShoppingCart className={styles.cart} />
								<span className={styles.quantity}>
									{totalCartItems()}
								</span>
							</Link>
						</li>
					</ul>
					<div className={styles.hamburger} onClick={handleClick}>
						{isOpen === true ? (
							<AiOutlineClose />
						) : (
							<GiHamburgerMenu />
						)}
					</div>
				</>
			) : (
				<div className={styles.hamburger} onClick={handleClick}>
					{isOpen === true ? <AiOutlineClose /> : <GiHamburgerMenu />}
				</div>
			)}
		</div>
	);
};
