export function Heading({
    level = 2,
    children,
    className = "",
}: {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
    className?: string;
}) {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag
            className={`font-cinematic font-semibold text-text dark:text-dark-text ${level === 1 ? "text-4xl md:text-6xl" :
                    level === 2 ? "text-3xl md:text-4xl" :
                        "text-xl md:text-2xl"
                } ${className}`}
        >
            {children}
        </Tag>
    );
}
