import { cn } from "@/lib/utils"

export const Panel = ({ className, children }: PanelProps) => (
	<div className={cn("named panel", "space-y-2 bg-bg-subtle p-2.75 t-2 border-t border-border/60", className)}>
		{children}
	</div>
)

type PanelProps = {
  className?: string
  children: React.ReactNode
}
