import Image from "next/image";
import clickwave from "../public/images/clickwave.svg";
import novasphere from "../public/images/novasphere.svg";
import zyphronix from "../public/images/zyphronix.svg";

export default function PartnersSection() {
	const partners = [
		{ url: clickwave, width: 177, height: 54 },
		{ url: zyphronix, width: 102, height: 71 },
		{ url: novasphere, width: 192, height: 60.5 },
	];
	return (
		<section className="bg-gray-03 flex justify-center h-[300px] ">
			<div className="container m-auto pl-[30px]">
				<div className="flex flex-row items-center justify-evenly">
					<h3 className="onest-bold-h3">Наши партнеры по монетизации</h3>
					<div className="grid grid-cols-3 items-center justify-center justify-items-center">
						{partners.map((item, index) => (
							<Image
								key={index}
								src={item.url}
								alt="partners"
								width={item.width}
								height={item.height}
                                className="w-auto h-auto"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
