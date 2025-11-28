'use client'

import { SiteNavbar } from "@/components/site/SiteNavbar";
import { useState, useEffect } from "react";
import clsx from "clsx";

export const SiteHeader = () => {
	const [scrolled, setScrolled] = useState(false);
		
	/* ---------- Shrink + Fade Background on Scroll ---------- */
	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<header
			id="site-header"
			role="banner"
			className={clsx(
				"fixed top-0 left-0 w-full z-50 transition-all duration-500",
				scrolled
					? "bg-bg-alt shadow-md"
					: "bg-transparent"
			)}
		>
			<SiteNavbar />
		</header>
	)
}
