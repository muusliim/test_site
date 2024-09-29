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
		<section className="bg-gray-04 lg:h-[650px] items-center flex justify-end " id="howwework">
			<div className="max-w-[1330px] mr-0 mb-5 max-lg:mt-9 max-lg:mb-[70px]">
				<div className="grid grid-cols-2 items-center justify-items-end gap-[75px]">
					<div className=" lg:max-w-[497px] py-10 relative pt-[42px] justify-self-start pl-[30px]">
						<h3 className="onest-bold-h2 mb-8 max-lg:onest-bold-h2-t max-lg:w-64">
							Подробные отчёты для вас и правообладателей
						</h3>
						<div className="flex flex-col">
							{text.map((item, index) => (
								<div className="flex flex-row mb-3 gap-4" key={index}>
									<Image
										src={arrow}
										alt="arrow"
										width={32}
										height={32}
										className="w-8 h-8 max-lg:w-[24px] max-lg:h-[24px]"
									/>
									<p className="onest-body-1 max-lg:onest-body-1-t" key={index}>
										{item}
									</p>
								</div>
							))}
						</div>
						<button className="black-button mt-20 max-lg:mt-8">Заказать звонок</button>
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
