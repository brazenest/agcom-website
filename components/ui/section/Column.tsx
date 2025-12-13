// components/ui/section/Column.tsx
import { cn } from "@/lib/utils"
import { Label } from "./Label"

const defaults = {
	className: 'section-column',
}

export const Column = ({ className, label, children }: ColumnProps) => (
	<div className={cn(defaults.className, className)}>
		{label && <Label text={label} />}
		{children}
	</div>
)

type ColumnProps = {
  className?: string
  label?: string
  children: React.ReactNode
}

export default Column
