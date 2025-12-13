import type { Metadata } from "next"
import { Page } from "@/components/ui/Page"
import { AboutCTASection } from "@/components/zones/about/AboutCTASection"
import { AboutIntroSection } from "@/components/zones/about/AboutIntroSection"
import { AboutHowIWorkSection } from "@/components/zones/about/AboutHowIWorkSection"
import { AboutBackground } from "@/components/zones/about/AboutBackground"

export const metadata: Metadata = {
	title: "About Alden Gillespy – Software Engineer, Web Designer & Video Producer",
}

export default function AboutPage() {
	return (
		<Page id="about-page">
			<AboutIntroSection weight={0} />
			<AboutHowIWorkSection weight={2} />
			<AboutBackground weight={1}/>
			<AboutCTASection weight={5} />
		</Page>
	)
}
