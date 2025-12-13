// components/home/CoreRolesSection.tsx
import * as React from "react"
import { Section } from "@/components/ui/Section"
import { SectionPropsBase } from "@/types/section"
import { CoreRolesCard } from "@/components/home/CoreRolesCard"
import { CoreRole } from "@/types/work"

export function HomeCoreRolesSection({
	weight,
}: HomeCoreRolesSectionProps) {

	const coreRoles: CoreRole[] = [
		{
			discipline: "engineering",
			badgeText: "Software Engineer & Web Designer",
			headingText: "Product-grade engineering",
			bodyText: "Building production-ready web experiences with React, Next.js, TypeScript, and thoughtful system design.",
			bullets: [
				"Design systems and component libraries",
				"Robust data flows and API integration",
				"Accessibility, performance, and reliability",
			],
		},
		{
			discipline: "cinematic",
			badgeText: "Video Producer & Photographer",
			headingText: "Cinematic storytelling",
			bodyText: "Planning, shooting, and editing visual narratives that support products, brands, and people.",
			bullets: [
				"Direction, storyboarding, and shot planning",
				"Camera operation, lighting, and framing",
				"Edit, color, and delivery for web & film",
			]
		}
	]
	return (
		<Section
			weight={weight}
			eyebrow="Core roles"
			title="Two primary lenses. One cohesive point of view."
			subtitle="Whether I’m building systems or shaping visuals, the standard stays the same — clarity, intention, and polish."
		>
			<div className="grid gap-5 md:grid-cols-2">
				{coreRoles.map(({ discipline, badgeText, headingText, bodyText, bullets }, i) => (
					<CoreRolesCard
						key={i}
						discipline={discipline}
						badgeText={badgeText}
						headingText={headingText}
						bodyText={bodyText}
						bullets={bullets}
					/>)
				)}
			</div>
		</Section>
	)
}

type HomeCoreRolesSectionProps = SectionPropsBase & {

}
