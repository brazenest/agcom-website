"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { sectionColors } from "@/lib/sectionColors";

type SectionKey = keyof typeof sectionColors;

const SectionContext = createContext<SectionKey>("hero");

export function useActiveSection() {
    return useContext(SectionContext);
}

export function SectionProvider({ children }: { children: ReactNode }) {
    const [active, setActive] = useState<SectionKey>("hero");

    useEffect(() => {
        const ids = Object.keys(sectionColors) as SectionKey[];
        const observers: IntersectionObserver[] = [];

        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) setActive(id);
                },
                { threshold: 0.35 }
            );

            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <SectionContext.Provider value={active}>
            {children}
        </SectionContext.Provider>
    );
}
