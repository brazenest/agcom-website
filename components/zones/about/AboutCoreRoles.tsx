import { AboutCoreRoleT } from "@/types/about";
import { AboutCoreRolesCard } from "./AboutCoreRolesCard";
import { Heading } from "@/components/ui/Heading";

export const AboutCoreRoles = ({ roles }: AboutCoreRolesProps) => (
    <>
        <Heading level={2} className="h4 text-text-muted">Core Roles</Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

            {roles.map(role => (
                <AboutCoreRolesCard key={role.title} role={role} />
            ))}

        </div>
    </>
    
)

type AboutCoreRolesProps = {
    roles: AboutCoreRoleT[],
}