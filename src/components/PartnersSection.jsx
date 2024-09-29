import Image from "next/image";
import clickwave from "../public/images/clickwave.svg";
import novasphere from "../public/images/novasphere.svg";
import zyphronix from "../public/images/zyphronix.svg";

export default function PartnersSection() {
	const partners = [
		{ url: clickwave, name: "clickwave", width: 177, height: 54 },
		{ url: zyphronix, name: "zyphronix", width: 102, height: 71 },
		{ url: novasphere, name: "novasphere", width: 192, height: 60.5 },
	];

	return (
		<section className="bg-gray-03 flex justify-center lg:h-[300px] max-lg:mt-11 max-lg:mb-[73px]">
			<div className="container m-auto md:pl-[30px] md:pr-[70px] max-sm:px-4">
				<div className="flex flex-row items-center justify-between max-sm:flex-col">
					<h3 className="onest-bold-h3 max-lg:onest-bold-h3-t text-balance max-sm:self-start max-sm:w-[166px]">
						Наши партнеры по монетизации
					</h3>
					<div className="md:w-[632px] grid grid-cols-3 items-center justify-center justify-items-center max-sm:grid-cols-2 max-sm:h-[140px] max-sm:flex max-sm:flex-row max-sm:flex-wrap ">
						{partners.map((item, index) => (
							<Image
								key={index}
								src={item.url}
								alt="partners"
								width={item.width}
								height={item.height}
								className={`${item.name}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
