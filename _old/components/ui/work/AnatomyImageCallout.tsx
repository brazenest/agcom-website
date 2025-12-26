// components/ui/work/AnatomyImageCallout.tsx
import { Label } from "../section/Label"
import { AnatomyImageCalloutSymbol } from "./AnatomyImageCalloutSymbol"

export const AnatomyImageCallout = ({ number, label, body }: AnatomyImageCalloutProps) => (
	<div className="work-anatomy-image-callout space-y-2">
		<Label text={label} symbol={<AnatomyImageCalloutSymbol number={number} />} />
		<p className='work-anatomy-image-callout-body space-y-2 my-0 text-sm text-text-muted'>{body}</p>
	</div>
)

export type AnatomyImageCalloutProps = {
  number: number
  label: string
  body: string
}

export default AnatomyImageCallout
