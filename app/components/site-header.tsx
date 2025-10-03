import Link from "./link";

export default function SiteHeader() {
    return (
        <header id="site-header" role="banner">
            <div id="site-header-nav-primary-wrap" className="mx-auto max-w-4xl">
                <nav id="site-header-nav-primary" role="navigation" className="flex p-10 space-x-10 list-none">
                    <Link href="/">aldengillespy</Link>
                    <Link href="/roles">Roles</Link>
                    <Link href="/articles">Blog</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>

        </header>
    )
}