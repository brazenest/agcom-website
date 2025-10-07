import Image from "next/image";
import ContactForm, { openContactForm } from "./components/contact-form";
import { Card } from "./components/card";
import ContactFormModal from "./components/contact-form";

export default function Home() {

  // software engineer card
  const sweCardMedia = (
    <Image
      src="/how-to-become-software-engineer.jpg"
      alt="Alden Gillespy"
      width={360}
      height={240}
      className="rounded-lg"
    />
  )
  const sweCardText = `With a strong foundation in computer science and a passion for building efficient, scalable applications, I have honed my skills in various programming languages and frameworks. My expertise includes designing RESTful APIs, developing user-friendly web interfaces, and optimizing database performance. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my craft.`
  const sweCardButton = (
    <a
      href="/Alden_Gillespy_Resume.pdf"
      download
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download Resume
    </a>
  )

  // video producer card
  const videoProducerCardMedia = (
    <Image
      src="/68a3702a58846b61c98d0185_captura-de-pantalla-2025-08-18-a-las-80721-p-m_a48ba7bb9b164e67ada7eff80f9ed2c5_2000.jpeg"
      alt="Video Producer"
      width={2000}
      height={1224}
      className="rounded-lg"
    />
  )
  const videoProducerCardText = `As a seasoned video producer, I bring stories to life through compelling visuals and engaging narratives. With expertise in all aspects of video production, from concept development to post-production editing, I ensure that each project meets the highest standards of quality. I have experience working on a variety of projects, from corporate videos to personal portraits, and am always looking for new and creative ways to capture the essence of my subjects. I am passionate about creating impactful videos that resonate with audiences and drive results.`
  const videoProducerCardButton = (
    <a
      href="/Alden_Gillespy_Video_Production_Portfolio.pdf"
      download
      className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      View Portfolio
    </a>
  )

  // photographer card
  const photographerCardMedia = (
    <Image
      src="/camera-7726802_1280.jpg"
      alt="Photographer"
      width={1280}
      height={853}
      className="rounded-lg"
    />
  )
  const photographerCardText = `As a professional photographer, I specialize in capturing stunning images that tell a story and evoke emotion. With a keen eye for detail and a passion for creativity, I offer a wide range of photography services, including portrait, landscape, event, and commercial photography. My approach combines technical expertise with artistic vision to deliver high-quality images that exceed client expectations. Whether it's a personal portrait session or a large-scale commercial project, I am dedicated to providing exceptional service and results.`
  const photographerCardButton = (
    <a
      href="/Alden_Gillespy_Photography_Portfolio.pdf"
      download
      className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
    >
      View Portfolio
    </a>
  )

  // contact card
  const contactCardMedia = (
    <Image
      src="/WideNet_Software_Engineer_Skills.webp"
      alt="Contact Me"
      width={1200}
      height={628}
      className="rounded-lg"
    />
  );

  const contactCardText = `I'd love to hear from you! Whether you have a question about my experience, want to discuss potential collaboration opportunities, or just want to say hello, feel free to reach out. I'm always open to connecting with fellow professionals, recruiters, and anyone interested in the tech industry. Please click the button below, fill out the contact form, and I will get back to you as soon as possible. Looking forward to hearing from you!`;
  // "I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out using the contact form below, and I will get back to you as soon as possible."
  const contactCardButton = <ContactFormModal id="hp-contact-form-button" />;



  return (
    <div className="font-sans">
      <main className="flex flex-col mx-auto max-w-5xl p-10">
        <h1 className="text-5xl text-purple-500 text-semibold text-center mb-7">Welcome to my digital home.</h1>
        <hr className="my-6 site-theme-colors-hr" />
        <p className="text-lg text-justify text-gray-900 my-3"><strong>Hello! I&apos;m Alden Gillespy, a solid software engineer, a world-notable video producer, and a keen photographer</strong> with years of experience in back-end API development, full-stack web development stacks (e.g. React, Node, PHP), and a bevvy of related tools; and intense experience in videography, video editing, and photography, of a variety of subjects and scenes in magnificent settings.</p>
        {/* <p className="text-lg my-4">I am passionate about transforming ideas into impactful digital experiences and visual stories. Whether collaborating on innovative software projects or capturing unforgettable moments, I strive to deliver excellence in every endeavor.</p> */}
        <p className="text-lg text-justify my-3">Feel free to explore my site to learn more about my skills, experience, and portfolio. If you have any questions or would like to get in touch, please don&apos;t hesitate to contact me.</p>
        <hr className="my-6 site-theme-colors-hr" />
        <h2 className="text-3xl font-semibold mt-5 mb-2">What I Do</h2>
        <Card layout="left" theme="blue" heading="Software Engineer" button={sweCardButton} media={sweCardMedia} text={sweCardText} />
        <Card layout="right" theme="purple" heading="Video Producer" button={videoProducerCardButton} media={videoProducerCardMedia} text={videoProducerCardText} />
        <Card layout="left" theme="yellow" heading="Photographer" button={photographerCardButton} media={photographerCardMedia} text={photographerCardText} />
        <hr className="my-4" />
        <Card layout="right" theme="dark" heading="Get in Touch" button={contactCardButton} media={contactCardMedia} text={contactCardText} />
      </main>
    </div>
  );
}
