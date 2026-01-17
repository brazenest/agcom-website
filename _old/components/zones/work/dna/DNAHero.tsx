// components/work/dna/DNAHero.tsx
import Image from "next/image";
import { Section } from "@/components/ui/Section";

export const DNAHero = () => (
	<Section
		align="left"
		width="wide"
		spacing="default"
		eyebrow="Consumer DNA · Ancestry"
		title="DNA Kit Activation Flow"
		subtitle="A product-grade onboarding experience serving millions of daily users—built for clarity, reliability, and long-term maintainability."
	>
		<div className="w-full mt-8 rounded-xl overflow-hidden border border-border/60 bg-surface">
			<Image
				src="/mnt/data/A_digital_screenshot_of_AncestryDNA's_user_interfa.png"
				alt="DNA Activation Flow UI"
				width={1800}
				height={900}
				className="w-full h-auto object-cover"
			/>
		</div>
	</Section>
);
