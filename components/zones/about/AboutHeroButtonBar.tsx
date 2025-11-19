import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactButton } from "@/components/ui/ContactButton";
import { Group } from "@/components/ui/Group";

export const AboutHeroButtonBar = () => (
  <Group id="about-hero-buttonbar">
    <ButtonLink
      href="/#work"
    >
      View Work
    </ButtonLink>
    <ContactButton>
      Get in Touch
    </ContactButton>
  </Group>
)
