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
			width="full"
			className="relative overflow-hidden layout-section-bleed bg-bg"
			eyebrow="Engineering × cinematic storytelling"
			title="I build interfaces with product-grade engineering and cinematic polish."
			subtitle="Full-stack software engineer, web designer, and video producer — bridging resilient systems with visuals that feel intentional."
		>
			{/* PRIMARY HERO CONTENT (simple, centered) */}
			<div className="flex flex-col items-center gap-6 max-w-3xl mx-auto">
				<div className="flex flex-wrap justify-center gap-2 text-xs md:text-sm text-text-muted">
					<Pill variant="soft" size="sm">
						Software Engineer &amp; Web Designer
					</Pill>
					<Pill variant="soft" size="sm">
						Video Producer &amp; Photographer
					</Pill>
				</div>

				<div className="flex flex-wrap justify-center gap-3">
					<ButtonLink href="/work" size="lg">
						View work
					</ButtonLink>
					<ContactCTAButton size="lg" />
				</div>

				<p className="text-xs md:text-sm text-text-muted max-w-xl">
					From React and TypeScript to lenses and color grades, I handle the
					span from architecture and UI to how it looks and feels in motion.
				</p>
			</div>

			{/* Background for the whole hero band */}
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
				<div className="absolute -top-24 left-[-10%] h-64 w-64 rounded-full blur-3xl bg-accent/12" />
				<div className="absolute bottom-[-20%] right-[-5%] h-72 w-72 rounded-full blur-3xl bg-accent-subtle/24" />
			</div>
		</Section>
	);
}

export default HomeHero;
