import { PrimaryNavbar } from "./primary-navbar";

export default function SiteHeader() {
    const links = [
        {
            href: '/',
            content: '',
        },
        {
            href: '/resume',
            content: 'Resume',
        },
        {
            href: '/articles',
            content: 'Articles',
        },
    ]
    return (
        <header id="site-header" role="banner">
            <div id="site-header-nav-primary-wrap" className="mx-auto max-w-4xl">
                <PrimaryNavbar links={links} />
            </div>

        </header>
    )
}
