import Image from "next/image";
import ContactFormModal from "./lib/components/contact-form-modal";
import { ColorBar } from "./lib/components/color-bar";
import { ButtonLink } from "./lib/components/buttons";
import { Container } from "./lib/components/container";
import { CardInfobar, TalentCard } from "./lib/components/card";

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold my-5 text-center">Welcome to <wbr />my digital home on the web.</h1>
      <ColorBar background="linear-gradient(to right, lab(54.1736% 13.3369 -74.6839), lab(52.0183% 66.11 -78.2316), lab(76.3898% 14.5258 98.4589))" classes={["mt-2", "mb-4"]} />
      <Container size={4}>
        <p><strong>Hello! I&apos;m Alden Gillespy, a solid software engineer, a world-notable video producer, and a keen photographer</strong> with years of experience in back-end API development, full-stack web development stacks (e.g. React, Node, PHP), and a bevvy of related tools; and intense experience in videography, video editing, and photography, of a variety of subjects and scenes in magnificent settings.</p>
      </Container>
      <div>
        <h2 className="text-center font-bold text-3xl">My Talents</h2>
        {/* Software Engineer Card */}
        <TalentCard
          layout="left"
          heading="Software Engineer"
          img={{
            src: "/how-to-become-software-engineer.jpg",
            alt: "Software Engineer",
            width: "1280",
            height: "853",
            className: "rounded-lg",
          }}
        >
          <p>
            Aas a dedicated software engineer, I specialize in crafting robust and scalable applications that drive business success. With expertise in a variety of programming languages and frameworks, I excel in both front-end and back-end development. My approach combines technical proficiency with a deep understanding of user needs, ensuring that every project I undertake delivers exceptional performance and user experience. Whether working on complex enterprise solutions or innovative startups, I am committed to delivering high-quality code and collaborating effectively with cross-functional teams to achieve project goals.
          </p>
          <CardInfobar>
            <ButtonLink href="/resume" theme="blue">
              View Resume
            </ButtonLink>
          </CardInfobar>
        </TalentCard>

        {/* Video Producer Card */}
        <div>
          <h2 className="text-center font-bold text-2xl my-6">Video Producer</h2>
          <div>
            <Image
              src="/68a3702a58846b61c98d0185_captura-de-pantalla-2025-08-18-a-las-80721-p-m_a48ba7bb9b164e67ada7eff80f9ed2c5_2000.jpeg"
              alt="Video Producer"
              width="1280"
              height="853"
              className="rounded-lg my-6"
            />
          </div>
          <p>
            As a professional video producer, I bring stories to life through compelling visuals and engaging narratives. With a keen eye for detail and a passion for creativity, I manage all aspects of video production from concept development to final editing. My expertise spans various genres including corporate videos, commercials, documentaries, and event coverage. I leverage the latest technology and industry best practices to ensure high-quality output that resonates with audiences. Whether working independently or collaborating with a team, I am dedicated to delivering impactful videos that meet client objectives and exceed expectations.
          </p>
          <div className="flex justify-center text-center">
            <ButtonLink href="/roles/video-producer" theme="blue">
              View Portfolio
            </ButtonLink>
          </div>
        </div>


        {/* Photographer Card */}
        <div>
          <h2 className="text-center font-bold text-2xl my-6">Photographer</h2>
          <div>
            <Image
              src="/camera-7726802_1280.jpg"
              alt="Photographer"
              width={1280}
              height={853}
              className="rounded-lg my-6"
            />
          </div>
          <p>As a professional photographer, I specialize in capturing stunning images that tell a story and evoke emotion. With a keen eye for detail and a passion for creativity, I offer a wide range of photography services, including portrait, landscape, event, and commercial photography. My approach combines technical expertise with artistic vision to deliver high-quality images that exceed client expectations. Whether it&apos;s a personal portrait session or a large-scale commercial project, I am dedicated to providing exceptional service and results.</p>
          <div className="flex justify-center text-center">
            <ButtonLink href="/roles/photographer" theme="blue">
              View Portfolio
            </ButtonLink>
          </div>
        </div>

        {/* Contact Card */}
        <div className="rounded p-4 bg-slate-800 dark:bg-slate-200 text-white dark:text-black">
          <h2 className="text-center font-bold text-2xl my-6">Contact Me</h2>
          <div>
            <Image
              src="/WideNet_Software_Engineer_Skills.webp"
              alt="Contact Me"
              width={1200}
              height={628}
              className="rounded-lg my-6"
            />
          </div>
          <p>I&apos;m always excited to connect with fellow professionals, potential collaborators, and anyone interested in my work. Whether you have a question about my experience, want to discuss potential opportunities, or just want to say hello, feel free to reach out. Please fill out the contact form below, and I will get back to you as soon as possible. Looking forward to hearing from you!</p>
          <div className="flex justify-center text-center">
            <ContactFormModal id="hp-contact-form-button" />
          </div>
        </div>
      </div >
    </>
  );
}
