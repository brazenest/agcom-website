import { Section } from "@/components/ui/Section";
import { AboutIntroHeadshot } from './AboutIntroHeadshot';
import { AboutIntroBio } from './AboutIntroBio';

/* Intro band */
export const AboutIntroSection = () => (
	<Section
		align="left"
		width="default"
		eyebrow="About"
		title="Hi, I’m Alden — I bridge product-grade engineering with cinematic storytelling."
		subtitle="Full-stack software engineer, web designer, and video producer / photographer."
	>
		<div className="grid gap-8 md:grid-cols-[auto,minmax(0,1fr)] items-start">
			
			<AboutIntroHeadshot />
			<AboutIntroBio />
			
		</div>
	</Section>
)