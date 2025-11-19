export const AboutHighlights = ({ projects }: AboutHighlightsProps) => {
    return (
              <PageSection id="highlights">
        
                <Heading level={2}>
                  Selected Projects
                </Heading>
        
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/#work/software-engineer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
                    <div className="font-semibold text-primary dark:text-dark-primary mb-2">Product Interfaces</div>
                    <div className="text-sm text-secondary dark:text-dark-secondary">Systems work, motion, and polished UIs for launch-ready products.</div>
                  </Link>
        
                  <Link href="/#work/video-producer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
                    <div className="font-semibold text-primary dark:text-dark-primary mb-2">Films & Videos</div>
                    <div className="text-sm text-secondary dark:text-dark-secondary">Short films, commercials, and narrative-driven pieces I&apos;ve directed and edited.</div>
                  </Link>
        
                  <Link href="/#work/photographer" className="block p-6 rounded-xl border border-border dark:border-dark-border bg-[var(--color-surface)]">
                    <div className="font-semibold text-primary dark:text-dark-primary mb-2">Photography</div>
                    <div className="text-sm text-secondary dark:text-dark-secondary">Portraits, location work, and stills for web and editorial use.</div>
                  </Link>
                </div>
        
              </PageSection>
    )
}