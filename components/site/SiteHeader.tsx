import { SiteNavbar } from "@/components/site/SiteNavbar";
import type { LinkT } from "@/types/link";

export const SiteHeader = ({ links }: SiteHeaderProps) => (
    <header id="site-header" role="banner">
        <SiteNavbar links={links} />
    </header>
)

type SiteHeaderProps = {
    links: LinkT[],
}
