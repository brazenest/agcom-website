export function Section({ children, className = "", ...props }) {
    return (
        <section
            className={`py-24 md:py-32 px-6 md:px-10 max-w-7xl mx-auto ${className}`}
            {...props}
        >
            {children}
        </section>
    );
}
