import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
}

export function Button({
    asChild = false,
    variant = "secondary",
    className = '',
    ...props
}: ButtonProps) {
    const Component = asChild ? Slot : "button";

    // border border-border text-text hover:bg-surface-muted dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-surface-muted
    const finalClassName = clsx(
        "px-5 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow",

        variant === "primary" &&
        "bg-brand-500 hover:bg-brand-600",

        variant === "secondary" &&
        "border border-border hover:bg-bg-alt",

        variant === "ghost" &&
        "hover:text-brand-500",

        className
    )

    return (
        <Component
            className={finalClassName}
            {...props}
        />
    );
}

export type ButtonVariantT = 'primary' | 'secondary'
