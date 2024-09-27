import Image from "next/image";
import arrow from "../public/images/arrow.svg";
import notebook from "../public/images/notebook.png";

export default function HowWeWorkSection() {
	const text = [
		"Выручка, CTR, показы и другие показатели в реальном времени.",
		"Инструменты контроля качества трафика.",
		"Ежемесячные автоматические отчёты для каждого правообладателя.",
	];
	return (
		<section className="bg-gray-04 pb-24 h-[650px] pt-[75px] flex justify-end">
			<div className="max-w-[1330px] mr-0">
				<div className="grid grid-cols-2 items-center justify-items-end gap-[75px]">
					<div className=" max-w-[497px] y-10 relative pt-[42px] justify-self-start pl-[30px]">
						<h3 className="onest-bold-h2 mb-8 ">
							Подробные отчёты для вас и правообладателей
						</h3>
						<div className="flex flex-col">
							{text.map((item, index) => (
								<div className="flex flex-row mb-5 gap-4" key={index}>
									<Image
										src={arrow}
										alt="arrow"
										width={32}
										height={32}
										className="w-8 h-8"
									/>
									<p className="onest-body-1 " key={index}>
										{item}
									</p>
								</div>
							))}
						</div>
						<button className="black-button mt-20">Заказать звонок</button>
					</div>
					<div className="relative">
						<Image
							src={notebook}
							alt="notebook"
							width={500}
							height={500}
							className="w-auto h-auto "
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
