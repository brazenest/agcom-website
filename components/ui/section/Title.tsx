export const Title = ({ text }: TitleProps) => (
	<h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text">
		{text}
	</h1>
)

type TitleProps = {
  text: string
}
