import Link from 'next/link';
import clsx from 'clsx';

interface LinkTextProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function LinkText({ href, children, className }: LinkTextProps) {
	return (
		<Link
			href={href}
			className={clsx(
				'text-brand-600 hover:text-brand-700 dark:text-dark-brand-400 dark:hover:text-dark-brand-300 underline-offset-4 hover:underline transition-colors duration-200',
				className
			)}
		>
			{children}
		</Link>
	);
}
