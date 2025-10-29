"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeTransitionOverlay() {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  // Trigger overlay briefly when theme changes
  useEffect(() => {
    if (!theme) return;
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 750);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="theme-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="
            fixed inset-0 z-[9999]
            pointer-events-none
            backdrop-blur-[4px]
            mix-blend-soft-light
            bg-gradient-to-br
            from-[#d5853e]/10 via-transparent to-[#3b82f6]/10
            dark:from-[#3b82f6]/10 dark:via-transparent dark:to-[#d5853e]/10
            [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]
          "
          style={{
            filter:
              "brightness(1.02) contrast(0.98) saturate(0.95) blur(1px)",
          }}
        />
      )}
    </AnimatePresence>
  );
}
