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
    className,
    ...props
}: ButtonProps) {
    const Component = asChild ? Slot : "button";

    return (
        <Component
            className={clsx(
                "px-5 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow",

                variant === "primary" &&
                "bg-brand-500 text-white hover:bg-brand-600 dark:bg-dark-brand-500 dark:hover:bg-dark-brand-600",

                variant === "secondary" &&
                "border border-border text-text hover:bg-surface-muted dark:border-dark-border dark:text-dark-text dark:hover:bg-dark-surface-muted",

                variant === "ghost" &&
                "text-text hover:text-brand-500 dark:text-dark-text dark:hover:text-dark-brand-500",

                className
            )}
            {...props}
        />
    );
}

export type ButtonVariantT = 'primary' | 'secondary'
