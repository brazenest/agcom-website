import { CTAButtonModel } from "@/types/ui"
import { EmphasisSection } from "./EmphasisSection"

export const CTASection = ({
	heading,
	text,
	buttons,
}: CTASectionProps) => {
	return (
		<EmphasisSection
			heading={heading}
			text={text}
			buttons={buttons}
		/>
	)
}

type CTASectionProps = {
  heading: string
  text: string
  buttons: CTAButtonModel[]
}
