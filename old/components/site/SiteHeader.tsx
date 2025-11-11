import { Navbar, NavbarLinkT } from "@/components/Navbar";
import HeaderThemeToggle from "../HeaderThemeToggle";

export const SiteHeader = ({ links }: SiteHeaderProps) => (
    <header id="site-header" role="banner">
        <Navbar links={links} />

    </header>
)

type SiteHeaderProps = {
    links: NavbarLinkT[],
}
