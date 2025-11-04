import { ReactNode } from "react";

export default function PageSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
}
