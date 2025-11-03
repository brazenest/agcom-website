"use client";
import { motion } from "framer-motion";

export default function Error() {
  return (
    <motion.div
      className="text-center py-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="h2 mb-4">Post Not Found</h1>
      <p className="p-base text-[var(--color-subtext)]">
        The article you’re looking for doesn’t exist or couldn’t be loaded.
      </p>
    </motion.div>
  );
}
