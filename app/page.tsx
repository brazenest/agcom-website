import Image from "next/image";
import ContactForm from "./components/contact-form";
import { Card } from "./components/card";

export default function Home() {
  const sweCardMedia = (
    <Image
      src="/how-to-become-software-engineer.jpg"
      alt="Alden Gillespy"
      width={360}
      height={240}
      className="rounded-lg"
    />
  );

  const sweCardButton = (
    <a
      href="/Alden_Gillespy_Resume.pdf"
      download
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download Resume
    </a>
  );

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
  const contactCardButton = (
    <a
      href="#contact-form"
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Get in Touch
    </a>
  );

  const sweCardText = `With a strong foundation in computer science and a passion for building efficient, scalable applications, I have honed my skills in various programming languages and frameworks. My expertise includes designing RESTful APIs, developing user-friendly web interfaces, and optimizing database performance. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my craft.`;

  return (
    <div className="font-sans">
      <main className="flex flex-col mx-auto max-w-4xl p-10">
        <h1 className="text-5xl text-semibold mb-12">Welcome to my digital home.</h1>
        <p className="text-lg"><strong>I&apos;m Alden Gillespy, a software engineer and world-notable video producer</strong> with years of experience in back-end API development, full-stack web development stacks (e.g. React, Node, PHP), and a bevvy of related tools; and intense experience in videography, video editing, and photography, of a variety of subjects and scenes in magnificent settings. Reach out for details.</p>
        <Card layout="left" heading="Software Engineer" button={sweCardButton} media={sweCardMedia} text={sweCardText} />
        <Card layout="right" heading="Get in Touch" button={contactCardButton} media={contactCardMedia} text={contactCardText} />
        <h2 className="text-2xl font-semibold mt-5 mb-2">Contact me</h2>
        <p>Connect with me by sending me a message, and I will respond soon. Thanks!</p>
        <ContactForm id="contact-form" />
      </main>
    </div>
  );
}
