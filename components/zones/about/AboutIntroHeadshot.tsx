import Image from 'next/image'

/* Headshot */
export const AboutIntroHeadshot = () => (
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
)