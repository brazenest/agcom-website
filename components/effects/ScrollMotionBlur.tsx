"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export function ScrollMotionBlur() {
    const [isScrolling, setScrolling] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout | undefined;

        const handleScroll = () => {
            setScrolling(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setScrolling(false), 120);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={clsx(
                "fixed inset-0 pointer-events-none z-[5] transition-all duration-150",
                isScrolling
                    ? "backdrop-blur-[2px] brightness-110"
                    : "backdrop-blur-[0px] brightness-100"
            )}
        />
    );
}
