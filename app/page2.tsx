// app/page.tsx
'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text font-engineering transition-colors duration-300">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 md:px-12 bg-surface shadow-md">
        <h1 className="text-5xl md:text-6xl font-cinematic font-semibold mb-4 tracking-tight">
          Alden Gillespy
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
          Bridging product-grade engineering with cinematic craft —
          building interfaces that feel intentional and visuals that move people.
        </p>

        <div className="flex gap-4 mt-8">
          <button
            className="px-6 py-3 rounded-lg text-white font-medium transition-colors duration-200"
            style={{
              backgroundColor: 'var(--color-accent)',
            }}
          >
            View Work
          </button>
          <button
            className="px-6 py-3 rounded-lg border border-border text-text hover:bg-[var(--color-accent-muted)] transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </section>

      {/* Core Roles Section */}
      <section className="py-20 px-6 md:px-12 bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)]">
        <h2 className="text-2xl font-cinematic font-medium mb-6 text-[var(--color-text)]">
          Core Roles
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              Software Engineer
            </h3>
            <p>React, TypeScript, Node.js, Design Systems</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              Video Producer / Photographer
            </h3>
            <p>Cinematography, Color, Editing, Storyboarding</p>
          </div>
        </div>
      </section>
    </main>
  );
}
