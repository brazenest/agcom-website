// components/zones/work/WorkIndexGrid.tsx

export function WorkIndexGrid({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
			{children}
		</div>
	);
}
