import Image from 'next/image'
import { AboutHeroButtonBar } from "./AboutHeroButtonBar"
import { Heading } from '@/components/ui/Heading'
import { SecondaryText } from '@/components/SecondaryText'
import { PrimaryText } from '@/components/PrimaryText'
import { PageSection } from '@/components/ui/PageSection'
import { AboutCoreRoleT } from '@/types/about'
import { AboutCoreRoles } from './AboutCoreRoles'

export const AboutHero = ({ title, text, coreRoles }: AboutHeroProps) => (
    <PageSection id="hero">

        {/* Intro */}

        <div id="hero-intro" className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

            {/* Left column */}

            <div className="md:col-span-3">

                <Heading level={1}>
                    {title}
                </Heading>

                <SecondaryText tag="div" className="leading-relaxed max-w-xl">
                    {text}
                </SecondaryText>

                <AboutHeroButtonBar />

            </div>

            {/* Right column */}

            <div className="md:col-span-2 space-y-6 flex flex-col items-center text-center">

                {/* Profile image */}

                <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden ring-1 ring-[var(--color-divider)]">
                    <Image
                        src="/assets/images/profile/alden.jpg"
                        alt="Alden Gillespy — headshot"
                        fill
                        sizes="(max-width: 768px) 160px, 192px"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Profile info */}

                <PrimaryText className="mt-2 text-sm">
                    Hi, I&apos;m Alden! Glad to meet you.
                </PrimaryText>

                <AboutCoreRoles roles={coreRoles} />

            </div>

        </div>

    </PageSection>
)

type AboutHeroProps = {
    title: string,
    text: string,
    coreRoles: AboutCoreRoleT[],
}
