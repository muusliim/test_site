import BalanceSection from "@/components/BalanceSection";
import ButtonToggleSection from "@/components/ButtonToggleSection";
import Hero from "@/components/Hero";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
	return (
		<main>
			<Hero />
			<ButtonToggleSection />
			<BalanceSection />
			<PartnersSection />
			<HowWeWorkSection />
		</main>
	);
}
