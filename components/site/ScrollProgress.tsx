"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { sectionColors } from "@/lib/sectionColors";
import clsx from "clsx";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [active, setActive] = useState<keyof typeof sectionColors>("hero");

    useEffect(() => {
        const ids = Object.keys(sectionColors) as (keyof typeof sectionColors)[];
        const observers: IntersectionObserver[] = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) setActive(id);
                },
                { root: null, threshold: 0.3 }
            );

            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const c = sectionColors[active] ?? sectionColors.default;

    return (
        <motion.div
            className={clsx(
                "fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left transition-all duration-700",
                "rounded-sm",
                c.glow || '',
                "dark:" + c.darkGlow
            )}
            style={{
                scaleX: scrollYProgress,
                background: `
          linear-gradient(
            to right,
            var(--tw-color-${c.barFrom}),
            var(--tw-color-${c.barTo})
          )
        `,
            }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
        />
    );
}
