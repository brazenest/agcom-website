"use client";

import { useRef } from "react";
import DownloadButton from "@/app/lib/components/DownloadButton";

export default function ResumePage() {
    const resumeRef = useRef<HTMLDivElement>(null);

    return (
        <main className="max-w-3xl mx-auto text-gray-900">
            <nav id="resume-page-links" role="navigation" className="flex justify-center list-none space-x-12 mt-3 mb-10">
                <li>
                    <DownloadButton
                        targetRef={resumeRef}
                        fileName="resume"
                        accent="text-sky-700"
                        text="Download PDF Version"
                    />
                </li>
                <li><DownloadButton
                    targetRef={resumeRef}
                    fileName="coverletter"
                    accent="text-sky-700"
                    text="Download Cover Letter"
                /></li>
            </nav>

            <div id="resume" ref={resumeRef}>
                <Header
                    name="Alden Gillespy"
                    title="Full Stack Software Engineer"
                    subtitle="React • Node.js • TypeScript • Next.js"
                    accent="text-sky-700"
                />

                <Section title="Professional Summary" accent="text-sky-700">
                    <p>
                        Full-stack software engineer with 5 years of experience in modern web development using React, TypeScript, Node.js, and Next.js. After a few years away from professional roles, I’ve stayed active through personal, open-source, and freelance projects and am now ready to contribute to a collaborative team while continuing to grow professionally.
                    </p>
                </Section>

                <Section title="Technical Skills" accent="text-sky-700">
                    <SkillList
                        items={[
                            ["Frontend", "React, Next.js, TypeScript, Redux, Tailwind CSS, HTML5, CSS3"],
                            ["Backend", "Node.js, Express, REST APIs, Python, Docker, Elasticsearch"],
                            // ["Database", "PostgreSQL, MongoDB, Firebase"],
                            ["Cloud / Tools", "AWS (EC2, S3), Git, GitHub, Vercel, CI/CD"],
                            // ["Practices", "Agile, TDD, Clean Architecture, Accessibility, UI/UX"]
                        ]}
                    />
                </Section>

                <Projects accent="text-sky-700" />
                <Experience accent="text-sky-700" />
                <Education accent="text-sky-700" />
            </div>

        </main>
    );
}

const LinkExternal = ({ href, className, text }) => (
    <a href={href} className={className}>
        {text} <LinkUpRightArrow />
    </a>
)

const LinkUpRightArrow = () => (
    <span aria-hidden="true" className="ms-0.5 inline-block align-middle leading-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" className="block h-[0.75em] w-[0.75em] stroke-current stroke-[0.75]"><path d="M14.3349 13.3301V6.60645L5.47065 15.4707C5.21095 15.7304 4.78895 15.7304 4.52925 15.4707C4.26955 15.211 4.26955 14.789 4.52925 14.5293L13.3935 5.66504H6.66011C6.29284 5.66504 5.99507 5.36727 5.99507 5C5.99507 4.63273 6.29284 4.33496 6.66011 4.33496H14.9999L15.1337 4.34863C15.4369 4.41057 15.665 4.67857 15.665 5V13.3301C15.6649 13.6973 15.3672 13.9951 14.9999 13.9951C14.6327 13.9951 14.335 13.6973 14.3349 13.3301Z"></path></svg></span>
)

/* --- Components --- */
function Header({
    name,
    title,
    subtitle,
    accent,
}: {
    name: string;
    title: string;
    subtitle: string;
    accent: string;
}) {
    return (
        <header className="text-center mb-10">
            <h1 className={`text-3xl font-bold ${accent}`}>{name}</h1>
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-600">{subtitle}</p>
            <p className="text-sm text-gray-600 mt-2">
                Salt Lake City, UT · ag@aldengillespy.com · (813) 437-7425 · <LinkExternal href="https://aldengillespy.com" className={`${accent} hover:underline`} text="aldengillespy.com" />{" "}
                ·{" "}
                <LinkExternal href="https://linkedin.com/in/alden-gillespy" className={`${accent} hover:underline`} text="linkedin.com/in/alden-gillespy" /></p>
        </header>
    );
}

function Section({
    title,
    accent,
    children,
}: {
    title: string;
    accent: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mb-8">
            <h2 className={`font-semibold ${accent} border-b border-gray-200 mb-2`}>
                {title}
            </h2>
            <div className="text-sm leading-relaxed text-gray-800">{children}</div>
        </section>
    );
}

function SkillList({
    items,
}: {
    items: [string, string][];
}) {
    return (
        <ul className="list-disc list-inside space-y-1">
            {items.map(([k, v]) => (
                <li key={k}>
                    <strong>{k}:</strong> {v}
                </li>
            ))}
        </ul>
    );
}

function Projects({ accent }: { accent: string }) {
    const projects = [
        {
            name: "Portfolio Web Platform",
            tech: "Next.js, TypeScript, Tailwind CSS",
            bullets: [
                "Built and deployed a responsive personal portfolio app on Vercel.",
                "Optimized for performance and SEO, achieving Lighthouse scores above 95%.",
            ],
        },
        {
            name: "Open Source Dashboard Template",
            tech: "React, Node.js, MongoDB",
            bullets: [
                "Designed a RESTful, reusable React dashboard component featuring authentication and charting",
                "Implemented secure API endpoints and CI/CD automation with GitHub Actions.",
            ],
        },
        {
            name: "Freelance Projects",
            tech: "Next.js, Python, AWS",
            bullets: [
                "Modernized legacy frontends, improving load times by 40%.",
                "Integrated Elasticsearch for search efficiency and user personalization.",
            ]
        }
    ];
    return (
        <Section title="Selected Projects (2023–2025)" accent={accent}>
            {projects.map((p) => (
                <div key={p.name} className="mb-4">
                    <h3 className="font-semibold text-gray-900">
                        {p.name}{" "}
                        <span className="font-normal text-gray-500">– {p.tech}</span>
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {p.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    );
}

function Experience({ accent }: { accent: string }) {
    const roles = [
        {
            role: "Software Engineer (Freelance / Contract)",
            dates: "2015 – 2018",
            bullets: [
                "Delivered full-stack applications across various client projects using React, Redux, and Node.js.",
                "Implemented Dockerized services and CI/CD pipelines.",
            ],
        },
        {
            role: "Web Developer (Independent)",
            dates: "2013 – 2015",
            bullets: [
                "Created responsive, accessible websites and Python-based automation tools for small clients.",
            ],
        },
    ];
    return (
        <Section title="Prior Experience" accent={accent}>
            {roles.map((r) => (
                <div key={r.role} className="mb-4">
                    <h3 className="font-semibold">
                        {r.role}{" "}
                        <span className="font-normal text-gray-500">({r.dates})</span>
                    </h3>
                    <ul className="list-disc list-inside text-sm text-gray-700">
                        {r.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </Section>
    );
}

function Education({ accent }: { accent: string }) {
    return (
        <Section title="Education" accent={accent}>
            <p>
                <strong>B.S. Computer Science (coursework completed)</strong> — University of Florida (Gainesville)
            </p>
        </Section>
    );
}
