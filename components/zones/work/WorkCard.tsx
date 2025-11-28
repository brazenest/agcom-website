import Image from "next/image";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  category: "engineering" | "cinematic" | "hybrid";
  image: string;
}

export const WorkCard = ({
	title,
	eyebrow,
	subtitle,
	category,
	image
}: WorkCardProps) => {
	const accent =
    category === "engineering"
    	? "bg-accent/20"
    	: category === "cinematic"
    		? "bg-[hsl(var(--h-cinematic)_85%_60%)]/20"
    		: "bg-accent-subtle/40";

	return (
		<div className="group rounded-xl overflow-hidden border border-border/50 bg-card-bg hover:border-accent/60 transition-all duration-150 shadow-sm hover:shadow-lg">
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
				/>
			</div>

			<div className="p-5 space-y-2">
				<p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted">
					{eyebrow}
				</p>

				<h3 className="font-heading text-lg text-text group-hover:text-accent transition-colors">
					{title}
				</h3>

				<p className="text-sm text-text-muted">{subtitle}</p>

				<div className={cn("h-1 w-12 rounded-full mt-3", accent)} />
			</div>
		</div>
	);
};
