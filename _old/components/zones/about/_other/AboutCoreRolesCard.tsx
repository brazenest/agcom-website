import { AboutCoreRoleT } from "@/types/about"
import { AboutCoreRoleSkills } from "./AboutCoreRoleSkills"
import { Heading } from "@/components/ui/Heading"

export const AboutCoreRolesCard = ({ role: { title, skills } }: AboutCoreRolesCardProps) => (
	<div className="p-4 rounded-xl border border-border bg-card-bd">
        
		<Heading level={3} className="h5 mb-4 text-accent font-semibold">
			{title}
		</Heading>

		<AboutCoreRoleSkills skills={skills} />

	</div>
)

type AboutCoreRolesCardProps = {
    role: AboutCoreRoleT,
}