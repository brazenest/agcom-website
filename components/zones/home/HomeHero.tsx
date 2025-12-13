// components/zones/home/HomeHero.tsx
import * as React from "react";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactCTAButton } from "@/components/zones/contact/ContactCTAButton";

export function HomeHero() {
	return (
		<Section
			align="center"
			eyebrow="Engineering × Cinematic Storytelling"
			title="I build interfaces with product-grade engineering and cinematic polish."
			subtitle="Full-stack software engineer, web designer, and video producer — bridging resilient systems with visuals that feel intentional."
		>
			<div className="items-center gap-6 max-w-3xl mx-auto space-y-5">
				<div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm">
					<Pill size="sm">
						Software Engineer &amp; Web Designer
					</Pill>
					<Pill size="sm">
						Video Producer &amp; Photographer
					</Pill>
				</div>

				<div className="flex flex-wrap justify-center gap-3">
					<ButtonLink href="/work" size="xl">
						View work
					</ButtonLink>
					<ContactCTAButton size="xl" />
				</div>

				<p className="text-xs md:text-sm max-w-xl mt-5.5">
					From React and TypeScript to lenses and color grades, I handle the
					span from architecture and UI to how it looks and feels in motion.
				</p>
			</div>
		</Section>
	);
}

export default HomeHero;
