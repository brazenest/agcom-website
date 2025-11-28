export const Subtitle = ({ text }: SubtitleProps) => (
	<p className="text-base md:text-lg text-text-muted">{text}</p>
)

type SubtitleProps = {
  text: string
}
