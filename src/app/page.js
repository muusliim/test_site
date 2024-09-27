import BalanceSection from "@/components/BalanceSection";
import ButtonToggleSection from "@/components/ButtonToggleSection";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Hero />
			<ButtonToggleSection />
			<BalanceSection/>
		</main>
	);
}
