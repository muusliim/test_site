import Image from "next/image";
import arrow from "@/public/images/arrow.svg";
import figure from "@/public/images/figure.png";

export default function BalanceSection() {
	return (
		<section className="bg-gray-04 flex justify-center" id="balance">
			<div className="lg:h-[650px] lg:pt-28 max-lg:my-16 container mx-auto mt-8 lg:px-[40px] max-sm:px-4 max-sm:mb-0 max-sm:mt-11">
				<h2 className="onest-bold-h2 mx-auto text-center max-lg:onest-bold-h2-t max-lg:max-w-[512px] max-sm:onest-bold-h2-m max-sm:text-start ">
					Баланс между выручкой и удовлетворённостью пользователей
				</h2>
				<div className="grid grid-cols-4 max-sm:grid-cols-1 max-sm:grid-rows-[1fr_1.6fr_1fr] mt-20 relative max-lg:mt-14 max-lg:px-[23px]">
					<div className="col-span-1">
						<div className="flex flex-col gap-4 lg:p-8 ">
							<h3 className="onest-bold-h3 mt-12 relative max-lg:onest-bold-h3-t max-sm:onest-bold-h3-m">
								<Image
									src={arrow}
									alt="arrow"
									width={32}
									height={32}
									className="absolute inset-0 -top-12 w-8 h-8 max-lg:w-[24px] max-lg:h-[24px]"
								/>
								Частотность под контролем
							</h3>
							<p className="onest-body-2 max-lg:onest-body-2-t max-sm:onest-body-2-m">
								Чтобы не ронять NPS и не увеличивать отток пользователей
							</p>
						</div>
					</div>
					<div className="col-span-2 flex justify-center items-center max-sm:rotate-90">
						<div className="border-[1px] border-customOrange w-[221px] max-lg:w-[90px] max-sm:w-[53px] relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-customOrange before:rounded-full before:-top-[6px] before:left-[-10px] "></div>
						<Image
							src={figure}
							alt="figure"
							width={120}
							height={120}
							className="w-[120px] h-[120px] max-lg:w-[80px] max-lg:h-[80px] max-sm:-rotate-90"
						/>
						<div className="border-[1px] border-customOrange w-[221px] max-lg:w-[90px] max-sm:w-[53px] relative before:absolute before:w-3 before:h-3 before:bg-customOrange before:rounded-full before:-top-[6px] before:-right-[10px] "></div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-4 lg:p-8">
							<h3 className="onest-bold-h3 mt-12 relative lg:hyphens-auto max-lg:onest-bold-h3-t max-sm:onest-bold-h3-m">
								<Image
									src={arrow}
									alt="arrow"
									width={32}
									height={32}
									className="absolute inset-0 -top-12 w-8 h-8 max-lg:w-[24px] max-lg:h-[24px] "
								/>
								Максимальная выручка
							</h3>
							<p className="onest-body-2 max-lg:onest-body-2-t max-sm:onest-body-2-m">
								За счёт заполнения всех рекламных мест по высокой цене
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
