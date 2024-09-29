"use client";

import { useState } from "react";

export default function ButtonToggleSection() {
	const activeClass =
		"bg-customBlack py-2 rounded-lg transition-all duration-300";
	const buttonText = ["Операторам", "ОТТ сервисам"];

	const [active, setActive] = useState("Операторам");

	const handleClick = (state) => {
		// 👇️ toggle
		setActive((state) =>
			state === "Операторам" ? "ОТТ сервисам" : "Операторам"
		);
	};
	return (
		<div className=" h-[212px] container flex justify-center mx-auto lg:mb-[65px] px-[30px]">
			<div className="grid grid-cols-2 mb-16 ">
				<div className="onest-bold-h2 lg:max-w-[460px] max-lg:onest-bold-h2-t max-lg:w-[259px]">
					Дополнительные источники выручки для разных компаний
				</div>
				<div className="flex flex-col">
					<div>
						<div className="flex flex-col">
							<div className="flex justify-around bg-gray-04 items-center onest-regular-h2 font-bold text-gray-01 rounded-lg ">
								{buttonText.map((item, index) => (
									<button
										key={`${index}` + item}
										className={`lg:max-w-[276px] lg:px-[37px] w-full lg:py-[10px] rounded-lg transition-all duration-300 max-lg:onest-bold-h3-t max-lg:w-[166px] max-lg:py-2 ${
											active === item
												? `${activeClass} text-white`
												: "hover:text-black"
										} `}
										onClick={handleClick}
									>
										{item}
									</button>
								))}
							</div>
							<div>
								{active === "Операторам" ? (
									<div className=" mt-8 onest-body-1 max-w-[560px] max-lg:onest-body-1-t">
										Найдите идеальный баланс выручки и удовлетворённости
										пользователей с платформой рекламной монетизации.
									</div>
								) : (
									<div className=" mt-8 onest-body-1 max-w-[560px] max-lg:onest-body-1-t">
										Дополнительные возможности обогащения данных об аудитории и
										монетизации
									</div>
								)}
							</div>
						</div>{" "}
					</div>
				</div>
			</div>
		</div>
	);
}
