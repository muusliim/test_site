import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-gray-03 lg:h-[800px] max-lg:h-[785px] max-sm:h-auto max-sm:mb-15 flex justify-center bg-hero max-sm:mb-20">
			<div className="container mt-[118px] max-sm:mt-16 px-[40px] max-sm:px-5">
				<h1 className="onest-bold-h1 md:pb-14 max-lg:onest-bold-h1-t max-lg:mt-20 max-sm:onest-bold-h1-m">
					Монетизируйте клиентскую базу, не снижая NPS
				</h1>
				<h2 className="onest-regular-h2 font-normal max-w-[626px] backdrop-blur-[1px] max-lg:mt-8 max-lg:onest-body-1-t max-lg:max-w-[395px] max-sm:onest-body-1-m max-sm:backdrop-blur-none ">
					Найдите идеальный баланс выручки и удовлетворённости пользователей с
					платформой рекламной монетизации
				</h2>
				<button className="mt-20 w-[210px] h-12 flex justify-center items-center p-5 bg-customOrange rounded-lg text-white hover:bg-[#E0570E] transition-all duration-300 active:bg-gray-02 active:text-gray-01 max-lg:w-full">
					<Link href="#">Заказать звонок</Link>
				</button>
			</div>
		</section>
	);
}
