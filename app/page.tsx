import Image from "next/image";
import ContactForm from "./components/contact-form";

export default function Home() {
  return (
    <div className="font-sans">
      <main className="flex flex-col mx-auto max-w-4xl p-10">
        <h1 className="text-4xl">Welcome to my digital home.</h1>
        <p>Hi! I&apos;m Alden Gillespy, a software engineer with years of experience in back-end API development and in full-stack web development stacks (e.g. React, Node, PHP) and a bevvy of related tools.</p>
        <h2 className="text-2xl font-semibold mt-5 mb-2">Contact me</h2>
        <p>Connect with me by sending me a message, and I will respond soon. Thanks!</p>
        <ContactForm id="contact-form" />
      </main>
    </div>
  );
}
