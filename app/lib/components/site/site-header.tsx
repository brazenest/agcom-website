import ThemeToggle from "../ThemeToggle";
import HeaderNav from "./HeaderNav";

export default function SiteHeader() {
    return (
        <header id="site-header" role="banner">
                <HeaderNav />
                <ThemeToggle />
        </header>
    )
}
