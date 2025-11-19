"use client";

import { Heading } from "@/components/ui/Heading";
import { PageSection } from "@/components/ui/PageSection";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  category?: "engineering" | "cinematic" | "hybrid";
}

interface AboutTimelineProps {
  timeline: TimelineItem[];
}

export default function AboutTimeline({ timeline }: AboutTimelineProps) {
  return (

    <PageSection id="timeline" className="max-w-3xl mx-auto px-6 py-20">

      <Heading level={2}>
        Progress Timeline
      </Heading>

      {/* Continuous gradient thread */}
      <motion.div
        className="absolute left-[1.375rem] top-0 bottom-0 w-[3px] rounded-full gradient-thread"
      />

      <div className="flex flex-col gap-16 relative">
        {timeline.map((item, index) => {
          const gradientClass =
            item.category === "engineering"
              ? "from-[var(--color-accent-blue)] to-[var(--color-accent-blue-light)]"
              : item.category === "cinematic"
                ? "from-[var(--color-accent-amber)] to-[var(--color-accent-amber-light)]"
                : "from-[var(--color-accent-blue)] to-[var(--color-accent-amber)]";

          return (
            <motion.div
              key={index}
              className="relative flex flex-col pl-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Node */}
              <motion.div
                className={`absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-r ${gradientClass} border-2 border-[var(--color-border)] shadow-lg`}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 0 24px rgba(255,255,255,0.25)",
                }}
              >
                {/* Synced pulse glow */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{
                    duration: 8, // 🔹 same cycle as gradient thread
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="font-space-grotesk text-lg font-semibold text-[var(--color-text)]">
                    {item.title}
                  </span>
                  <span className="text-sm text-[var(--color-subtext)]">
                    {item.year}
                  </span>
                </div>
                <p className="font-inter text-[var(--color-subtext)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </PageSection>



  );
}
