import React from "react";

export default function Header() {
	const nav = ["Преимущества", "Как работаем"];
	return (
		<header className="bg-gray-03 w-full h-[72px]">
			<div className="container flex justify-between mt-8 mx-auto fixed top-0 left-0 right-0 z-10 pl-[29px]">
				<div className="bg-white w-[161px] h-10 flex justify-center items-center rounded-lg my-4  logo">
					LOGO
				</div>
				<div>
					<nav className="flex flex-row mt-[14px]">
						<ul className="flex">
							{nav.map((item, index) => (
								<li
									key={index}
									className="cursor-pointer px-8 py-[10px] onest-button bg-gray-03 font-semibold"
								>
									<a href="/">{item}</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
