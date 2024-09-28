import Link from "next/link";

export default function Hero() {
	return (
		<section className="bg-gray-03 h-[800px] flex justify-center bg-hero mt-3">
			<div className="container mt-[118px] px-[40px]">
				<h1 className="onest-bold-h1 pb-14">
					Монетизируйте клиентскую базу, не снижая NPS
				</h1>
				<h2 className="onest-regular-h2 font-normal max-w-[626px]  backdrop-blur-[1px] ">
					Найдите идеальный баланс выручки и удовлетворённости пользователей с
					платформой рекламной монетизации
				</h2>
				<button className="mt-20 w-[210px] h-12 flex justify-center items-center p-5 bg-customOrange rounded-lg text-white hover:bg-[#E0570E] transition-all duration-300 active:bg-gray-02 active:text-gray-01">
					<Link href="#">Заказать звонок</Link>
				</button>
			</div>
		</section>
	);
}
