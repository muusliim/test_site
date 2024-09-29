"use client";
import { useEffect, useState } from "react";

export default function Header() {
	const nav = [
		{ label: "Преимущества", link: "#balance" },
		{ label: "Как работаем", link: "#howwework" },
	];

	const [activeLink, setActiveLink] = useState("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = nav.map((item) => document.querySelector(item.link));
			let currentSection = "";

			sections.forEach((section) => {
				if (section) {
					const sectionTop = section.getBoundingClientRect().top;
					const sectionHeight = section.clientHeight;

					if (
						sectionTop <= window.innerHeight / 3 &&
						sectionTop + sectionHeight > 0
					) {
						currentSection = section.id;
					}
				}
			});

			setActiveLink(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header
			className="bg-gray-03 max-lg:absolute inset-0 w-full h-[72px] mx-auto"
			id="home"
			aria-label="header"
		>
			<div className="lg:container items-center min-lg:items-center flex justify-between mt-4 mx-auto pl-[29px] max-lg:fixed-lg">
				<a href="#home">
					<div className="bg-white w-[161px] h-10 flex justify-center items-center rounded-lg my-4 logo">
						LOGO
					</div>
				</a>
				<div className="hidden lg:flex">
					<nav className="flex flex-row">
						<ul className="flex max-lg:flex-col ">
							{nav.map((item, index) => (
								<li key={index}>
									<a
										href={item.link}
										className={`cursor-pointer px-8 py-[10px] onest-button font-semibold hover:text-customOrange ${
											activeLink === item.link.slice(1)
												? "text-customOrange underline"
												: ""
										}`}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				{/* кНОПКА ДЛЯ БОКОВОГО МЕНЮ */}
				<button onClick={toggleMenu} className="navMenuButton">
					{[1, 2, 3].map((item) => {
						return (
							<div
								key={item}
								className="w-6 h-[2px] rounded-md bg-customOrange "
							></div>
						);
					})}
				</button>
			</div>

			{/* МЕНЮ ДЛЯ ПЛАНШЕТОВ И ТЕЛЕФОНОВ */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300"
					onClick={toggleMenu}
				>
					<div className="absolute top-0 right-0 bg-white w-[283px] h-full shadow-lg flex items-center">
						<button
							onClick={toggleMenu}
							className="navMenuButton absolute top-4 right-4 m-0"
						>
							{[1, 2].map((item, i, arr) => {
								return (
									<div
										key={item}
										className={`w-6 h-[2px] rounded-md bg-customOrange ${
											arr[i] === 2 ? "rotate-45 translate-x-0 -translate-y-1" : "-rotate-45 translate-y-1"
										} `}
									></div>
								);
							})}
						</button>
						<nav className="flex flex-col mt-[14px]">
							<ul className="flex flex-col justify-center items-center gap-2">
								{nav.map((item, index) => (
									<li key={index}>
										<a
											href={item.link}
											className={`block px-4 py-2 font-semibold hover:text-customOrange ${
												activeLink === item.link.slice(1)
													? "text-customOrange underline"
													: ""
											}`}
											onClick={toggleMenu}
										>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
}
