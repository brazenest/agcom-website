import { ButtonLink } from "@/components/ui/ButtonLink";

export const AboutHeroButtonBar = () => (
                <div id="about-hero-button-bar" className="flex flex-wrap gap-3">
                  <ButtonLink
                    href="/#work"
                  >
                    View Work
                  </ButtonLink>
    
                  <ButtonLink
                    href="mailto:ag@aldengillespy.com"
                    variant="primary"
                  >
                    Get in Touch
                  </ButtonLink>
                </div>
)
