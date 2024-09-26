import React from "react";

export default function Header() {
	const nav = ["Преимущества", "Как работаем"];
	return (
		<header className="bg-gray-03">
			<div className="container flex justify-between pt-8 mx-auto">
				<div className="bg-white w-[161px] h-10 flex justify-center items-center rounded-lg my-4 logo">
					LOGO
				</div>
				<div>
					<nav className="flex flex-row mt-[14px]">
						<ul className="flex">
							{nav.map((item, index) => (
								<li key={index} className="cursor-pointer px-8 py-[10px] onest-button font-semibold">
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
