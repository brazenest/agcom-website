"use client";

interface AboutCardProps {
  skill: {
    title: string;
    text: string;
    icon?: React.ReactNode;
    category?: "engineering" | "cinematic" | "hybrid";
  };
  index?: number;
}

export default function AboutCard({ skill, index = 0 }: AboutCardProps) {
	return (
		<div id={`about-card-${index}`}
			className={`
        relative flex flex-col items-start justify-start rounded-2xl overflow-hidden
        p-8 shadow-lg transition-all duration-500
        bg-[var(--color-surface)]
        group text-text dark:text-dark-text
      `}
		>
			{/* Icon */}
			{skill.icon && (
				<div className="relative z-10 mb-6 text-4xl drop-shadow-md">
					{skill.icon}
				</div>
			)}

			{/* Text content */}
			<div className="relative z-10">
				<h3 className="text-2xl font-bold drop-shadow-sm mb-3">
					{skill.title}
				</h3>
				<p className="text-sm leading-relaxed">
					{skill.text}
				</p>
			</div>
		</div>
	);
}
