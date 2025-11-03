"use client";
import useTheme from "@/hooks/useTheme";

export default function ThemeStatus() {
  const { mode, colors } = useTheme();

  return (
    <div
      style={{
        background: colors["--color-surface"],
        color: colors["--color-text"],
        border: `1px solid ${colors["--color-border"]}`,
        borderRadius: "var(--radius-md)",
        padding: "1rem 1.5rem",
        transition: "all 0.3s ease",
      }}
    >
      <h3 style={{ fontFamily: "var(--font-display)", marginBottom: "0.5rem" }}>
        Current Theme: {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
      </h3>
      <p style={{ color: colors["--color-subtext"], fontFamily: "var(--font-sans)" }}>
        Accent Blue → {colors["--color-accent-blue"]}, Amber →{" "}
        {colors["--color-accent-amber"]}
      </p>
    </div>
  );
}
