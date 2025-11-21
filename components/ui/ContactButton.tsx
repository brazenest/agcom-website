"use client"

import { useContactModal } from "@/hooks/useContactModal";
import { Button } from "./Button";
import React from "react";
import { ButtonVariantT } from "@/types/ui";

export const ContactButton = ({ children, variant = 'primary', className = '' }: ContactButtonProps) => {
	const { open } = useContactModal();

	return (
		<Button
			className={className}
			onClick={open}
			variant={variant}
		>
			{children}
		</Button>
	)

}

type ContactButtonProps = {
    variant?: ButtonVariantT;
    className?: string;
    children:  React.ReactNode;
}
