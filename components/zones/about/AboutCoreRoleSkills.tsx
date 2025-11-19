import { AboutCoreRoleSkillT } from "@/types/about"

export const AboutCoreRoleSkills = ({ skills }: AboutCoreRoleSkillsProps) => (
    <div className="text-sm text-secondary dark:text-dark-secondary">
        {skills.join(', ')}
    </div>
)

type AboutCoreRoleSkillsProps = {
    skills: AboutCoreRoleSkillT[],
}