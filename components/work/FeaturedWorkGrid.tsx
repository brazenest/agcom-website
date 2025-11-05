"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";

interface Project {
  title: string;
  description: string;
  category?: "engineering" | "cinematic" | "hybrid";
  href?: string;
}

interface FeaturedWorkGridProps {
  projects: Project[];
}

export default function FeaturedWorkGrid({ projects }: FeaturedWorkGridProps) {
  const [filter, setFilter] = useState<"all" | "engineering" | "cinematic">("all");

  // Keep refs for keyboard navigation
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  // Keyboard arrow navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = ["all", "engineering", "cinematic"].indexOf(filter);
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const newIndex =
        e.key === "ArrowRight"
          ? (currentIndex + 1) % 3
          : (currentIndex - 1 + 3) % 3;
      const newFilter = ["all", "engineering", "cinematic"][newIndex] as
        | "all"
        | "engineering"
        | "cinematic";
      setFilter(newFilter);
      tabRefs.current[newIndex]?.focus();
    }
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter || p.category === "hybrid");

  // Category counts
  const counts = useMemo(() => {
    const total = projects.length;
    const engineering = projects.filter(
      (p) => p.category === "engineering" || p.category === "hybrid"
    ).length;
    const cinematic = projects.filter(
      (p) => p.category === "cinematic" || p.category === "hybrid"
    ).length;
    return { total, engineering, cinematic };
  }, [projects]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Filter Tabs */}
      <div
        className="flex justify-center gap-6 flex-wrap relative"
        role="tablist"
        aria-label="Featured work categories"
        onKeyDown={handleKeyDown}
      >
        {(["all", "engineering", "cinematic"] as const).map((cat, i) => {
          const isActive = filter === cat;
          const label =
            cat === "all"
              ? "All"
              : cat === "engineering"
              ? "Engineering"
              : "Cinematic";

          const count =
            cat === "all"
              ? counts.total
              : cat === "engineering"
              ? counts.engineering
              : counts.cinematic;

          const accentColor =
            cat === "engineering"
              ? "from-[var(--color-accent-blue)] to-[var(--color-accent-blue-light)]"
              : cat === "cinematic"
              ? "from-[var(--color-accent-amber)] to-[var(--color-accent-amber-light)]"
              : "from-[var(--color-accent-blue)] to-[var(--color-accent-amber)]";

          return (
            <button
              key={cat}
              ref={(el) => (tabRefs.current[i] = el!)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`featured-${cat}-panel`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setFilter(cat)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setFilter(cat);
                }
              }}
              className={`
                relative flex items-center gap-2 px-5 py-2 font-medium font-inter rounded-md
                transition-all duration-300 focus:outline-none
                ${
                  isActive
                    ? "text-white bg-[var(--color-btn-primary-bg)] shadow-md"
                    : "text-[var(--color-text)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-alt)] focus:ring-2 focus:ring-[var(--color-accent-blue)] dark:focus:ring-[var(--color-accent-amber)]"
                }
              `}
            >
              {label}

              {/* Animated count */}
              <AnimatedCount
                key={`${cat}-${isActive}`}
                target={count}
                isActive={isActive}
                accentColor={accentColor}
              />

              {/* Animated underline accent */}
              {isActive && (
                <motion.div
                  layoutId="active-tab-underline"
                  className={`absolute left-0 bottom-0 w-full h-[3px] rounded-full bg-gradient-to-r ${accentColor}`}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Animated Grid */}
      <motion.div
        id={`featured-${filter}-panel`}
        role="tabpanel"
        aria-labelledby={`${filter}-tab`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              exit="exit"
              layout
              transition={{ layout: { duration: 0.4 } }}
            >
              <FeaturedWorkCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/*──────────────────────────────
Animated Counter Subcomponent
──────────────────────────────*/
function AnimatedCount({
  target,
  isActive,
  accentColor,
}: {
  target: number;
  isActive: boolean;
  accentColor: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return controls.stop;
  }, [target, count]);

  return (
    <motion.span
      className={`text-sm font-semibold ${
        isActive ? "text-white" : "text-[var(--color-subtext)]"
      }`}
      style={{
        background:
          isActive && accentColor
            ? `linear-gradient(to right, var(--color-accent-blue), var(--color-accent-amber))`
            : "none",
        WebkitBackgroundClip: isActive ? "text" : "unset",
        WebkitTextFillColor: isActive ? "transparent" : "unset",
      }}
    >
      (<motion.span>{rounded}</motion.span>)
    </motion.span>
  );
}
