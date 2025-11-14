import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SocialIcons } from "./SocialIcons";

export function SiteFooter({ links }) {
  return (
    <footer className="relative mt-32 border-t border-border dark:border-dark-border">

      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-brand-300/20 to-transparent blur-3xl dark:from-dark-brand-500/20" />
      </div>

      <Section className="py-16 text-center bg-surface dark:bg-dark-surface">

        <h3 className="font-cinematic text-2xl text-text dark:text-dark-text mb-4">
          Alden Gillespy
        </h3>

        <p className="text-text-secondary dark:text-dark-text-secondary font-engineering mb-8">
          Engineering + Cinematic Storytelling
        </p>

        <div className="flex justify-center gap-6 text-sm font-engineering">
          {links.map(({ href, content }) => (
            <FooterLink key={href} href={href}>
              {content}
            </FooterLink>
          ))}
        </div>

        <SocialIcons className="mt-10" />

        <p className="mt-10 text-xs text-text-secondary dark:text-dark-text-secondary font-engineering">
          © {new Date().getFullYear()} Alden Gillespy. All rights reserved.
        </p>
      </Section>
    </footer>
  );
}

function FooterLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="text-text dark:text-dark-text hover:text-brand-500 dark:hover:text-dark-brand-500 transition-colors"
    >
      {children}
    </Link>
  );
}
