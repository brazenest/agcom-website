// components/ui/work/AnatomyImageCalloutList.tsx
import { AnatomyImageCallout, AnatomyImageCalloutProps } from "./AnatomyImageCallout"

export const AnatomyImageCalloutList = ({ callouts }: AnatomyImageCalloutListProps) => (
	<div className='work-anatomy-image-callout-list space-y-8'>
		{callouts.map(c => (
			<AnatomyImageCallout
				key={c.number}
				number={c.number}
				label={c.label}
				body={c.body}
			/>
		))}
	</div>
)

type AnatomyImageCalloutListProps = {
	callouts: AnatomyImageCalloutProps[]
}

export default AnatomyImageCalloutList
