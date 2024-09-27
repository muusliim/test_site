import Image from "next/image";
import arrow from "@/public/images/arrow.svg";
import figure from "@/public/images/figure.png";

export default function BalanceSection() {
	return (
		<section className="bg-gray-04 flex justify-center h-[800px]  ">
			<div className="h-[447px] pt-28 container mx-auto mt-[70px] px-[40px]">
				<h2 className="onest-bold-h2 text-center">
					Баланс между выручкой и удовлетворённостью пользователей
				</h2>
				<div className="grid grid-cols-4 mt-20 relative">
					<div className="col-span-1">
						<div className="flex flex-col gap-4 p-8 ">
							<h3 className="onest-bold-h3 mt-12 relative">
								<Image
									src={arrow}
									alt="arrow"
									width={32}
									height={32}
									className="absolute inset-0 -top-12"
								/>
								Частотность под контролем
							</h3>
							<p className="onest-body-2">
								Чтобы не ронять NPS и не увеличивать отток пользователей
							</p>
						</div>
					</div>
					<div className="col-span-2 flex justify-center items-center">
						<div className="border-[1px] border-customOrange w-[221px] relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-customOrange before:rounded-full before:-top-[6px] before:left-[-10px]"></div>
						<Image src={figure} alt="figure" width={120} height={120} />
						<div className="border-[1px] border-customOrange w-[221px] relative before:absolute before:w-3 before:h-3 before:bg-customOrange before:rounded-full before:-top-[6px] before:-right-[10px]"></div>
					</div>
					<div className="col-span-1">
						<div className="flex flex-col gap-4 p-8">
							<h3 className="onest-bold-h3 mt-12 relative">
								<Image
									src={arrow}
									alt="arrow"
									width={32}
									height={32}
									className="absolute inset-0 -top-12"
								/>
								Максимальная выручка
							</h3>
							<p className="onest-body-2">
								За счёт заполнения всех рекламных мест по высокой цене
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
