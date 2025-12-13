import { AboutSkillT } from "@/types/about"

export const AboutSkillsCard = ({ role: { title, tagline, labels, icon } }: AboutSkillsCardProps) => (
	<article className="card">
		<div className="mb-3">{icon}</div>
		<h3 className="card-title">{title}</h3>
		<p className="text-text-muted mb-4">{labels.join(', ')}</p>
		{tagline ?? (
			<p className="card-body">
				{tagline}
			</p>
		)}
	</article>
)

type AboutSkillsCardProps = {
    role: AboutSkillT,
}