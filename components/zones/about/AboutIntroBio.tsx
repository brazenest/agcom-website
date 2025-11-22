import { Pill } from "@/components/ui/Pill";

/* Short bio */
export const AboutIntroBio = () => (
	<div className="space-y-4 text-sm md:text-base text-text-muted">
		
		<p>My background is deliberately hybrid. I studied <strong>Computer Science at the University of Florida</strong> and earned a <strong>Film & Video Production degree from Full Sail University</strong>. Those two identities collided early and never separated. I’ve worked as a <strong>full-stack engineer on consumer-scale onboarding flows used by millions</strong>, and I’ve also spent years shooting, editing, and producing videos designed to communicate ideas visually, memorably, and at a professional level.</p>

		<p>Outside of work, you’ll probably find me experimenting with new camera setups, writing about product and design, or solving problems no one asked me to solve — because that’s what engineers do.</p>

		<div className="flex flex-wrap gap-2">
			<Pill variant="soft" size="sm">
        Software Engineer &amp; Web Designer
			</Pill>
			<Pill variant="subtle" size="sm">
        Video Producer &amp; Photographer
			</Pill>
		</div>
	</div>
)