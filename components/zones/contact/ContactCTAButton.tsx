// components/contact/ContactCtaButton.tsx
"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/hooks/useContactModal"; // or wherever it lives

type ContactCTAButtonProps = {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
};

export function ContactCTAButton({
  size = "lg",
  children = "Get in touch",
  className,
}: ContactCTAButtonProps) {
  const contactModal = useContactModal();

  return (
    <Button
      size={size}
      className={className}
      onClick={contactModal.open}
      type="button"
    >
      {children}
    </Button>
  );
}
