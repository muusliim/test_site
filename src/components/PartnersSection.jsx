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
	// const clickwaveTable = 'max-lg:w-[121px] h-[37px]'
	// const zyphronixTable = 'max-lg:w-[70px] h-[48px]'
	// const novasphereTable = 'max-lg:w-[120px] h-[31px]'

	return (
		<section className="bg-gray-03 flex justify-center lg:h-[300px] max-lg:mt-11 max-lg:mb-[73px]">
			<div className="container m-auto pl-[30px] pr-[70px]">
				<div className="flex flex-row items-center justify-between">
					<h3 className="onest-bold-h3 max-lg:onest-bold-h3-t text-balance">
						Наши партнеры по монетизации
					</h3>
					<div className="w-[632px] grid grid-cols-3 items-center justify-center justify-items-center">
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
