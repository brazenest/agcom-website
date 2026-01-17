import { CTAButtonModel } from "@/types/ui"

export const CTAButton = ({
	variant = 'primary',
	text,
	link,
}: CTAButtonProps) => {
	const variantClasses =
    variant === 'primary'
    	? 'bg-blue-500 hover:bg-blue-600 text-white'
    	: 'bg-gray-200 hover:bg-gray-300 text-gray-800'

	return (
		<a
			href={link}
			className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${variantClasses}`}
		>
			{text}
		</a>
	)
}

type CTAButtonProps = CTAButtonModel & {}
