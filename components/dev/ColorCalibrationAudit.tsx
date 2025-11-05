"use client";

import { useEffect, useState } from "react";

function luminance(hex: string) {
  const rgb = hex
    .replace("#", "")
    .match(/.{2}/g)!
    .map((x) => parseInt(x, 16) / 255)
    .map((v) =>
      v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function contrastRatio(hex1: string, hex2: string) {
  const L1 = luminance(hex1);
  const L2 = luminance(hex2);
  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  return Math.round(ratio * 10) / 10;
}

function rgbToHex(rgb: string): string {
  const result = rgb.match(/\d+/g);
  if (!result) return "#000000";
  const [r, g, b] = result.map(Number);
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export default function ColorCalibrationAudit() {
  const [audit, setAudit] = useState<
    { element: string; selector: string; text: string; bg: string; ratio: number }[]
  >([]);

  useEffect(() => {
    // ✅ Prevent running on server
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const runAudit = () => {
      document.querySelectorAll(".contrast-highlight").forEach((el) => el.remove());

      const elements = Array.from(
        document.querySelectorAll(
          "p, span, h1, h2, h3, h4, h5, h6, a, button, li, label, strong, em, div"
        )
      );

      const results: {
        element: string;
        selector: string;
        text: string;
        bg: string;
        ratio: number;
      }[] = [];

      elements.forEach((el) => {
        const style = window.getComputedStyle(el);
        const color = rgbToHex(style.color);
        let bg = "#ffffff";

        // Find first non-transparent background
        let parent: HTMLElement | null = el as HTMLElement;
        while (parent && bg === "#ffffff") {
          const parentStyle = window.getComputedStyle(parent);
          const parentBg = parentStyle.backgroundColor;
          if (
            parentBg &&
            parentBg !== "rgba(0, 0, 0, 0)" &&
            parentBg !== "transparent"
          ) {
            bg = rgbToHex(parentBg);
          }
          parent = parent.parentElement;
        }

        const ratio = contrastRatio(color, bg);
        const tag = el.tagName.toLowerCase();
        const selector = el.className
          ? `.${el.className.toString().replace(/\s+/g, ".")}`
          : tag;

        results.push({ element: tag, selector, text: color, bg, ratio });

        if (ratio < 4.5) {
          console.warn(
            `%c⚠️ Low Contrast Detected`,
            "color: orange; font-weight: bold;",
            `\nElement: ${tag}`,
            `\nSelector: ${selector}`,
            `\nText: ${color}`,
            `\nBackground: ${bg}`,
            `\nContrast Ratio: ${ratio}:1 (below AA)`
          );

          const rect = el.getBoundingClientRect();
          const highlight = document.createElement("div");
          highlight.className = "contrast-highlight";
          Object.assign(highlight.style, {
            position: "fixed",
            top: `${rect.top + window.scrollY}px`,
            left: `${rect.left + window.scrollX}px`,
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            border: "2px solid rgba(255, 80, 80, 0.8)",
            borderRadius: "4px",
            pointerEvents: "none",
            zIndex: "99999",
          });

          const tooltip = document.createElement("div");
          tooltip.textContent = `⚠️ ${ratio}:1`;
          Object.assign(tooltip.style, {
            position: "absolute",
            top: "-1.5em",
            left: "0",
            background: "rgba(255, 80, 80, 0.9)",
            color: "#fff",
            fontSize: "12px",
            padding: "2px 6px",
            borderRadius: "3px",
            fontFamily: "system-ui, sans-serif",
          });

          highlight.appendChild(tooltip);
          document.body.appendChild(highlight);
        }
      });

      setAudit(results);
    };

    // Delay audit until client-side mount
    const timer = setTimeout(runAudit, 200);
    window.addEventListener("resize", runAudit);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", runAudit);
      document.querySelectorAll(".contrast-highlight").forEach((el) => el.remove());
    };
  }, []);

  return (
    <section className="py-16 px-8 bg-[var(--color-bg)] text-[var(--color-text)] font-inter">
      <h2 className="font-space-grotesk text-3xl font-bold mb-10 text-center">
        🧪 Live Page Contrast Audit — Visual Overlay Mode
      </h2>
      <p className="text-center mb-10 text-[var(--color-subtext)]">
        This tool scans all visible text and visually highlights low-contrast
        elements directly in the live DOM with red outlines and tooltips.
      </p>
      {audit.length === 0 && (
        <p className="text-center text-[var(--color-subtext)] italic">
          Waiting for client-side load…
        </p>
      )}
    </section>
  );
}
