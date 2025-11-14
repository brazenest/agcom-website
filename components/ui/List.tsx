export function List({ items }: { items: string[] }) {
    return (
        <ul className="list-disc list-inside text-text-secondary dark:text-dark-text-secondary space-y-2">
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
}
