export function Card({ className = "", ...props }) {
    return (
        <div
            className={`relative bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-xl p-6 shadow-sm ${className}`}
            {...props}
        />
    );
}
