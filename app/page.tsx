import ContactFormModal from "./lib/components/contact-form-modal";
import { ColorBar } from "./lib/components/color-bar";
import { ButtonLink } from "./lib/components/buttons";
import { Container } from "./lib/components/container";
import { Card, CardInfobar, TalentCard } from "./lib/components/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="shadow-md1 border1 border-slate-2001 rounded-lg">
        <h1 className="text-5xl text-center font-semibold mt-15 mb-9">Hi, I’m Alden Gillespy.</h1>
<<<<<<< HEAD
        <ColorBar background="linear-gradient(to right, lab(54.1736% 13.3369 -74.6839), lab(52.0183% 66.11 -78.2316), lab(76.3898% 14.5258 98.4589))" classes={["my-7"]} />
=======
        <ColorBar background="linear-gradient(to right, lab(54.1736% 13.3369 -74.6839), lab(52.0183% 66.11 -78.2316), lab(76.3898% 14.5258 98.4589))" classes={["my-6"]} />
>>>>>>> bfb396f86bd4ff028d7110215cffcf3f0ace06c2
        <Container size={4}>
          <div className="md:flex md:space-x-6 space-y-8">
            <div className="md:w-2/5 md:order-2">
              <Image
                src="/me-coffeeshop-cropped_Original.PNG"
                width={957}
                height={690}
                alt="Alden Gillespy"
              />
            </div>
            <div className="md:w-3/5 md:order-1 md:mr-9">
              <p>I’m a <strong>full-stack software engineer</strong> who loves bringing ideas to life through clean, thoughtful code. Over the years, I’ve built everything from interactive web apps to full-scale platforms using technologies like <strong>React, TypeScript, Node.js, Next.js, PHP, and Python</strong>. I enjoy working across the stack — crafting smooth, intuitive interfaces on the front end and building reliable, efficient systems behind the scenes.</p>

              <p><strong>My journey into software</strong> hasn’t been the traditional one, but it’s been packed with learning, persistence, and creative problem-solving. <strong>I’ve learned to adapt quickly</strong>, find clarity in complex problems, and build with both precision and purpose. <strong>I’m driven by curiosity</strong> — whether that means exploring a new framework, improving performance, or designing systems that make life a little easier for the people using them.</p>

              <p>When I’m not coding, <strong>I’m always learning something new</strong>, experimenting with side projects, or refining old ones just to see how much better I can make them. For me, software engineering is equal parts art and logic — and that’s what keeps me excited to keep building.</p>
            </div>
          </div>

        </Container>
      </div>
      <div>
        <h2 className="text-center font-bold text-3xl mt-6 md:mt-20 mb-14">
          My Talents
        </h2>
        {/* Software Engineer Card */}
        <TalentCard
          layout="left"
          heading="Software Engineer"
          img={{
            src: "/how-to-become-software-engineer.jpg",
            alt: "Software Engineer",
            width: "1280",
            height: "853",
          }}
        >
          <p>
            As a dedicated software engineer, I specialize in crafting robust and scalable applications that drive business success. With expertise in a variety of programming languages and frameworks, I excel in both front-end and back-end development. My approach combines technical proficiency with a deep understanding of user needs, ensuring that every project I undertake delivers exceptional performance and user experience. Whether working on complex enterprise solutions or innovative startups, I am committed to delivering high-quality code and collaborating effectively with cross-functional teams to achieve project goals.
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
            width: "1280",
            height: "853",
          }}
        >
          <p>
            As a professional video producer, I bring stories to life through compelling visuals and engaging narratives. With a keen eye for detail and a passion for creativity, I manage all aspects of video production from concept development to final editing. My expertise spans various genres including corporate videos, commercials, documentaries, and event coverage. I leverage the latest technology and industry best practices to ensure high-quality output that resonates with audiences. Whether working independently or collaborating with a team, I am dedicated to delivering impactful videos that meet client objectives and exceed expectations.
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
            width: "1280",
            height: "853",
          }}
        >
          <p>As a professional photographer, I specialize in capturing stunning images that tell a story and evoke emotion. With a keen eye for detail and a passion for creativity, I offer a wide range of photography services, including portrait, landscape, event, and commercial photography. My approach combines technical expertise with artistic vision to deliver high-quality images that exceed client expectations. Whether it&apos;s a personal portrait session or a large-scale commercial project, I am dedicated to providing exceptional service and results.</p>
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
          }}
        >
          <p>I&apos;m always excited to connect with fellow professionals, potential collaborators, and anyone interested in my work. Whether you have a question about my experience, want to discuss potential opportunities, or just want to say hello, feel free to reach out. Please fill out the contact form below, and I will get back to you as soon as possible. Looking forward to hearing from you!</p>
          <CardInfobar>
            <ContactFormModal id="hp-contact-form-button" />
          </CardInfobar>
        </Card>
      </div >
    </>
  );
}
