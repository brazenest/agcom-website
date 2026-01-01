export const CTABar = ({ children }: CTABarProps) => {
	return (
		<div className="flex justify-center space-x-4 mt-5.5 p-2">
			{children}
		</div>
	)
}

type CTABarProps = {
  children: React.ReactNode
}
