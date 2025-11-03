"use client";

import dynamic from "next/dynamic";

const ColorAuditToggle = dynamic(() => import("@/components/dev/ColorAuditToggle"), {
  ssr: false,
});

export default function DevAuditWrapper() {
  // Only render in development
  if (process.env.NODE_ENV !== "development") return null;
  return <ColorAuditToggle />;
}
