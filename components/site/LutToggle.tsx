"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const MODES = ["clean", "kodak", "fuji"] as const;
type LutMode = (typeof MODES)[number];

export function LutToggle() {
    const [mode, setMode] = useState<LutMode>("clean");

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.dataset.lut = mode;
        }
    }, [mode]);

    const cycleMode = () => {
        const index = MODES.indexOf(mode);
        const next = MODES[(index + 1) % MODES.length];
        setMode(next);
    };

    const label = {
        clean: "Clean",
        kodak: "Kodak",
        fuji: "Fuji",
    }[mode];

    return (
        <button
            onClick={cycleMode}
            className={clsx(
                "hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-engineering",
                "border border-border dark:border-dark-border",
                "bg-surface/60 dark:bg-dark-surface/60",
                "backdrop-blur-sm",
                "text-text-secondary dark:text-dark-text-secondary",
                "hover:text-brand-500 dark:hover:text-dark-brand-500",
                "transition-colors"
            )}
            title="Cycle color grade (Clean / Kodak / Fuji)"
        >
            <span className="w-2 h-2 rounded-full bg-brand-500 dark:bg-dark-brand-500" />
            <span>Grade: {label}</span>
        </button>
    );
}
