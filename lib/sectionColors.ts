export const sectionColors = {
    default: {
        tintLight: "bg-neutral-50",
        tintDark: "dark:bg-neutral-900",
        tintOverlayLight: "bg-neutral-100/70",
        tintOverlayDark: "dark:bg-neutral-700/40",
        glow: "",
        darkGlow: "",
        barFrom: "neutral-300",
        barTo: "neutral-600",
        navTint: "text-neutral-950",
    },
    home: {
        tintLight: "bg-brand-50",
        tintDark: "dark:bg-dark-surface-muted",
        tintOverlayLight: "bg-brand-100/70",
        tintOverlayDark: "dark:bg-dark-brand-300/50",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
    about: {
        tintLight: "bg-brand-50",
        tintDark: "dark:bg-dark-surface-muted",
        tintOverlayLight: "bg-brand-100/70",
        tintOverlayDark: "dark:bg-dark-brand-300/50",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
    intro: {
        tintLight: "bg-brand-100",
        tintDark: "dark:bg-dark-brand-300",
        tintOverlayLight: "bg-brand-200/65",
        tintOverlayDark: "dark:bg-dark-brand-400/50",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
    work: {
        tintLight: "bg-brand-200",
        tintDark: "dark:bg-dark-brand-400",
        tintOverlayLight: "bg-brand-300/60",
        tintOverlayDark: "dark:bg-dark-brand-500/40",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
    blog: {
        tintLight: "bg-brand-300",
        tintDark: "dark:bg-dark-brand-500",
        tintOverlayLight: "bg-brand-400/55",
        tintOverlayDark: "dark:bg-dark-brand-600/40",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
    contact: {
        tintLight: "bg-brand-400",
        tintDark: "dark:bg-dark-brand-600",
        tintOverlayLight: "bg-brand-500/50",
        tintOverlayDark: "dark:bg-dark-brand-700/35",
        glow: "shadow-[0_0_18px_rgba(58,167,255,0.45)]",
        darkGlow: "dark:shadow-[0_0_20px_rgba(255,160,50,0.35)]",
        barFrom: "brand-300",
        barTo: "brand-600",
        navTint: "text-brand-900",
    },
} satisfies Record<string, SectionColorSet>;

type SectionColorSet = {
    tintLight: string;
    tintDark: string;
    tintOverlayLight: string;
    tintOverlayDark: string;
    glow: string;
    darkGlow: string;
    barFrom: string;
    barTo: string;
    navTint: string,
}
