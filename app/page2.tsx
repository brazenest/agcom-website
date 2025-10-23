import ContactFormModal from "./lib/components/contact-form-modal";
import { ColorBar } from "./lib/components/color-bar";
import { ButtonLink } from "./lib/components/buttons";
import { Container } from "./lib/components/container";
import { Card, CardInfobar, TalentCard } from "./lib/components/card";
import Image from "next/image";
import HeroSection from "./lib/components/home-page/hero-section";

export default function HomePage() {
  return (
    <>
    <HeroSection />
      <div className="rounded-lg">
        <h1 className="text-5xl font-semibold mb-8">Hi, I’m Alden Gillespy.</h1>
        <ColorBar background="linear-gradient(to right, lab(54.1736% 13.3369 -74.6839), lab(52.0183% 66.11 -78.2316), lab(76.3898% 14.5258 98.4589))" classes={["my-5"]} />
        <Container size={4}>
          <div className="md:flex md:space-x-6 space-y-8">
            <div className="md:w-2/5 md:order-2">
              <Image
                src="/me-coffeeshop-cropped_Original.PNG"
                width={957}
                height={690}
                alt="Alden Gillespy"
                className="rounded-lg"
              />
            </div>
            <div className="md:w-3/5 md:order-1 md:mr-9">
              <p>I’m a <strong>full-stack software engineer</strong> who loves bringing ideas to life through clean, thoughtful code. Over the years, I’ve built everything from interactive web apps to full-scale platforms using technologies like <strong>React, TypeScript, Node.js, Next.js, PHP, and Python</strong>. I enjoy working across the stack — crafting smooth, intuitive interfaces on the front end and building reliable, efficient systems behind the scenes.</p>

              <p className="hidden lg:block"><strong>My journey into software</strong> hasn’t been the traditional one, but it’s been packed with learning, persistence, and creative problem-solving. <strong>I’ve learned to adapt quickly</strong>, find clarity in complex problems, and build with both precision and purpose. <strong>I’m driven by curiosity</strong> — whether that means exploring a new framework, improving performance, or designing systems that make life a little easier for the people using them.</p>

              <p className="hidden lg:block">When I’m not coding, <strong>I’m always learning something new</strong>, experimenting with side projects, or refining old ones just to see how much better I can make them. For me, software engineering is equal parts art and logic — and that’s what keeps me excited to keep building.</p>
            </div>
          </div>

        </Container>
      </div>
      <div>
        <h2 className="text-center font-bold text-3xl mt-6 md:mt-12 mb-12">
          My Talents
        </h2>
        <div className="space-y-14">
          {/* Software Engineer Card */}
        <TalentCard
          layout="left"
          heading="Software Engineer"
          img={{
            src: "/how-to-become-software-engineer.jpg",
            alt: "Software Engineer",
            width: 1280,
            height: 853,
            className: "rounded-lg",
          }}
        >
          <p>
            As a dedicated software engineer, I focus on building scalable applications that drive business success. With expertise in various programming languages and frameworks, I excel in both front-end and back-end development. I prioritize user needs, ensuring high performance and a great user experience in every project. Whether for enterprise solutions or startups, I’m committed to delivering quality code and collaborating effectively with teams.
          </p>
          <CardInfobar>
            <ButtonLink href="/resume" theme="blue">
              View Resume
            </ButtonLink>
          </CardInfobar>
        </TalentCard>

        {/* Video Producer Card */}
        <TalentCard
          layout="right"
          heading="Video Producer"
          img={{
            src: "/68a3702a58846b61c98d0185_captura-de-pantalla-2025-08-18-a-las-80721-p-m_a48ba7bb9b164e67ada7eff80f9ed2c5_2000.jpeg",
            alt: "Video Producer",
            width: 1280,
            height: 853,
            className: "rounded-lg",
          }}
        >
          <p>
            As a professional video producer, I bring stories to life through engaging visuals and narratives. From concept to final edit, I manage all aspects of production across genres like corporate videos, commercials, documentaries, and events. With a focus on quality and creativity, I use the latest technology to deliver impactful content that meets client goals and exceeds expectations—whether working solo or with a team.
          </p>
          <CardInfobar>
            <ButtonLink href="/roles/video-producer" theme="blue">
              View Portfolio
            </ButtonLink>
          </CardInfobar>
        </TalentCard>

        {/* Photographer Card */}
        <TalentCard
          layout="left"
          heading="Photographer"
          img={{
            src: "/camera-7726802_1280.jpg",
            alt: "Video Producer",
            width: 1280,
            height: 853,
            className: "rounded-lg",
          }}
        >
          <p>As a professional photographer, I capture striking images that tell stories and evoke emotion. I offer portrait, landscape, event, and commercial photography, combining technical skill with creative vision. Whether working on personal shoots or commercial projects, I’m dedicated to delivering high-quality results that exceed expectations.</p>
          <CardInfobar>
            <ButtonLink href="/roles/photographer" theme="blue">
              View Portfolio
            </ButtonLink>
          </CardInfobar>
        </TalentCard>

        {/* Contact Card */}
        <Card
          layout="right"
          classes={["bg-slate-800", "dark:bg-slate-200", "text-white", "dark:text-black"]}
          heading="Contact Me"
          img={{
            src: "/WideNet_Software_Engineer_Skills.webp",
            alt: "Contact Me",
            width: 1280,
            height: 628,
            className: "rounded-lg",
          }}
        >
          <p>I’m always happy to connect with professionals, collaborators, or anyone interested in my work. Whether you have a question, a project in mind, or just want to say hello, feel free to reach out using the contact form below. I’ll get back to you as soon as possible!</p>
          <CardInfobar>
            <ContactFormModal id="hp-contact-form-button" />
          </CardInfobar>
        </Card>
        </div>
        
      </div >
    </>
  );
}
