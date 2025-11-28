import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ContactCTAButton } from "../contact/ContactCTAButton";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

{/* CTA band */ }
export const AboutCTASection = () => (
	<Section
		align="center"
		width="wide"
		spacing="comfortable"
		className="section-space-tight-bottom layout-section-bleed relative bg-surface-alt"
		eyebrow="Next steps"
		title="Have a role or project where this combination is useful?"
		subtitle="I’m open to full-time roles and select freelance work where the mix of engineering and cinematic storytelling truly matters."
	>
		<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<p className="text-sm md:text-base text-text-muted max-w-xl">
				Whether you need someone deep in the code, helping shape the
				interface, or working on visuals that explain it, I’m usually most
				helpful when I can sit across a couple of those layers at once.
			</p>
			<div className="flex flex-wrap gap-3 justify-center">
				{/* 🔻 Opens the same contact modal as your header */}
				<ContactCTAButton size="lg" />
				
				{/* “View work” can stay a normal navigation button/link */}
				<ButtonLink variant="secondary" size="lg" href="/work">
					View work
				</ButtonLink>
			</div>
		</div>

		{/* Ambient CTA wash (optional, matches your other bands) */}
		<div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
			<div className="absolute -top-16 right-0 h-40 w-40 rounded-full blur-3xl bg-accent/20" />
			<div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full blur-3xl bg-accent-subtle/35" />
		</div>
	</Section>
)