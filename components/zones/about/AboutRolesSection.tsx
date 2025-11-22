import { Section } from "@/components/ui/Section"

/* Roles / skills summary */ 
export const AboutRolesSection = () => (
	<Section
		align="left"
		width="default"
		eyebrow="How I work"
		title="A single throughline across engineering and cinematic work."
		subtitle="Different toolchains, same standard of intention and craft."
	>
		
		<div className="grid gap-8 md:grid-cols-3 text-sm md:text-base text-text-muted">
			<div className="space-y-3">
				<h3 className="font-heading text-sm md:text-base text-text">
        Engineering
				</h3>
				<p>React, Next.js, TypeScript, Node, and pragmatic system design.</p>
				<ul className="space-y-1.5 text-xs md:text-sm">
					<li>• Design systems &amp; UI architecture</li>
					<li>• API integration and data flows</li>
					<li>• Performance and reliability</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="font-heading text-sm md:text-base text-text">
        Cinematic
				</h3>
				<p>
        Narrative-focused shoots, color, and edit work that supports products
        and people.
				</p>
				<ul className="space-y-1.5 text-xs md:text-sm">
					<li>• Direction and shot planning</li>
					<li>• Camera, lighting, and on-set decisions</li>
					<li>• Edit, pacing, and color</li>
				</ul>
			</div>

			<div className="space-y-3">
				<h3 className="font-heading text-sm md:text-base text-text">
        Glue work
				</h3>
				<p>
        The connective tissue that usually falls between roles: docs,
        motion specs, naming, and keeping the thing coherent.
				</p>
				<ul className="space-y-1.5 text-xs md:text-sm">
					<li>• Design tokens and motion language</li>
					<li>• Documentation and walkthroughs</li>
					<li>• Cross-functional communication</li>
				</ul>
			</div>
		</div>
	</Section>
)