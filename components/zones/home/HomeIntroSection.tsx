// Example IntroSection with headshot
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function HomeIntroSection() {
	return (
		<Section
			align="left"
			// 👇 keep this contained
			width="default"
			// 👇 no layout-section-bleed here
			className=""
			eyebrow="Hi, I'm Alden"
			title="Glad to meet you."
			subtitle="I bridge product-grade engineering with cinematic storytelling — code, design, camera, and color."
		>
			<div className="grid gap-8 md:grid-cols-[auto,minmax(0,1fr)] items-center">
				{/* Headshot */}
				<div className="relative flex justify-center md:justify-start">
					<div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border border-border/70 bg-surface">
						<Image
							src="/assets/images/profile/alden.jpg"
							alt="Alden Gillespy — headshot"
							fill
							className="object-cover"
							sizes="(min-width: 768px) 160px, 128px"
						/>
					</div>
				</div>

				{/* Copy */}
				<div className="space-y-4 text-sm md:text-base text-text-muted">
					<p>
            I&apos;m a full-stack software engineer and web designer, and a video
            producer / photographer focused on cinematic, intentional visuals.
					</p>
					<p>
            On the engineering side, I care about reliability, clarity, and
            systems. On the cinematic side, it&apos;s framing, pacing, and color.
					</p>
				</div>
			</div>
		</Section>
	);
}

export default HomeIntroSection;
