import { cn } from "@/lib/cn"
import Markdown from "react-markdown"

export const BlogBody = ({ className, children }: BlogBodyProps) => {
	return (
		<span className={cn('blog-body prose block mx-auto', className)}>
			<Markdown>{children.replace(/\\n/g, '\n')}</Markdown>
		</span>
	)
}

type BlogBodyProps = {
	className?: string
  children: string
}