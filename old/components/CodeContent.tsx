"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeContent({
  code,
  language = "javascript",
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden border border-[var(--color-divider)] shadow-[var(--shadow-soft)]">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          background: "var(--color-surface)",
          fontSize: "0.875rem",
          padding: "1rem",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
