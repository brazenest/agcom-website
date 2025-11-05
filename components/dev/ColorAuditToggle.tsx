"use client";

import { useState, useEffect } from "react";
import ColorCalibrationAudit from "./ColorCalibrationAudit";
import { motion, AnimatePresence } from "framer-motion";

export default function ColorAuditToggle() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      // Clean up all overlays when toggled off
      document.querySelectorAll(".contrast-highlight").forEach((el) => el.remove());
    }
  }, [active]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActive(!active)}
        className={`fixed bottom-6 right-6 z-[99999] px-5 py-3 rounded-full font-medium shadow-lg border transition-all backdrop-blur-sm
          ${
            active
              ? "bg-red-600/90 hover:bg-red-500 text-white border-red-400"
              : "bg-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue-light)] text-white border-[var(--color-accent-blue-light)]"
          }`}
      >
        {active ? "🛑 Stop Audit" : "🧪 Audit Contrast"}
      </motion.button>

      {/* Overlayed Audit Panel (on toggle) */}
      <AnimatePresence>{active && <ColorCalibrationAudit />}</AnimatePresence>
    </>
  );
}
