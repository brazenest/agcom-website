"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Contact() {
  const links = [
    { icon: Mail, label: "ag@aldengillespy.com", href: "mailto:ag@aldengillespy.com" },
    { icon: Github, label: "GitHub", href: "https://github.com/alden-gillespy" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/alden-gillespy" },
    { icon: Youtube, label: "SHADOWCAT Pictures", href: "https://youtube.com/c/SHADOWCATpictures" },
    { icon: Instagram, label: "@agthecreative", href: "https://www.instagram.com/agthecreative" },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-start justify-center py-32 px-6 md:px-20 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-3xl md:text-5xl font-bold mb-8 relative z-10"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="max-w-2xl text-lg md:text-xl text-[var(--color-subtext)] mb-8"
      >
        I’m always open to new projects, collaborations, and creative partnerships. Whether
        it’s building performant web systems or crafting cinematic visuals, let’s create
        something remarkable.
      </motion.p>

      <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
        {links.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent-blue)] transition"
          >
            <Icon className="w-5 h-5" />
            <span className="text-lg">{label}</span>
          </motion.a>
        ))}
      </div>

    </section>
  );
}
