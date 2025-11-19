import { Heading } from "@/components/ui/Heading"
import { AboutSkillsCard } from "./AboutSkillsCard"
import { PageSection } from "@/components/ui/PageSection"
import { AboutSkillT } from "@/types/about"

export const AboutSkills = ({ skills }: AboutSkillsProps) => {
    return (
        <PageSection id="skills">

            <Heading level={2}>
                What I do
            </Heading>

            <div className="card-grid">
                {skills.map(role => (
                    <AboutSkillsCard
                        key={role.title}
                        role={role}
                    />
                ))}
            </div>

        </PageSection>
    )
}

type AboutSkillsProps = {
    skills: AboutSkillT[],
}
