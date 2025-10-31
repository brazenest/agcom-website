export default function FeaturedWork() {
  const projects = [
    {
      title: "DNA Activation Platform",
      desc: "A high-performance React platform powering consumer DNA kit activations at scale.",
      tone: "tech",
    },
    {
      title: "Cinematic Showreel",
      desc: "A curated reel blending technology, motion, and storytelling through light and rhythm.",
      tone: "cinema",
    },
  ];

  return (
    <section id="featured-work" className="grid md:grid-cols-2 gap-8 px-6 md:px-20 py-20 bg-[var(--color-surface)]">
      {projects.map((p) => (
        <div
          key={p.title}
          className={`rounded-xl shadow-soft p-6 border border-[var(--color-border)] transition hover:shadow-strong ${
            p.tone === "tech"
              ? "bg-[var(--color-tech-bg)]"
              : "bg-[var(--color-cinema-bg)]"
          }`}
        >
          <h3 className="font-display text-xl font-bold text-[var(--color-text)] mb-2">
            {p.title}
          </h3>
          <p className="text-[var(--color-subtext)] mb-4">{p.desc}</p>
          <div
            className={`w-full h-40 rounded-lg ${
              p.tone === "tech"
                ? "bg-[var(--color-tech-overlay)]"
                : "bg-[var(--color-cinema-overlay)]"
            }`}
          ></div>
        </div>
      ))}
    </section>
  );
}
