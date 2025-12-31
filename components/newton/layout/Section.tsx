export const Section = ({ id, children }: SectionProps) => (
  <section id={id} className="my-8 sm:my-12 md:my-16 lg:my-24 border-y2 border-gray-100 dark:border-gray-900 py-8">
    {children}
  </section>
)

type SectionProps = {
  id: string
  children: React.ReactNode
}
