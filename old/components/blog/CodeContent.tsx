"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeContentProps {
  code: string;
  language?: string;
  theme?: "dark" | "light";
}

export default function CodeContent({
  code,
  language = "javascript",
  theme = "dark",
}: CodeContentProps) {
  const style = theme === "dark" ? oneDark : oneLight;

  return (
    <motion.div
      className="my-8 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-alt)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          padding: "1.5rem",
          fontSize: "0.95rem",
          background: "transparent",
          lineHeight: "1.6",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </motion.div>
  );
}
