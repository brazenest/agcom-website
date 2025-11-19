import { useContactModal } from "@/hooks/useContactModal";
import { Button, ButtonVariantT } from "./Button";
import React from "react";

export const ContactButton = ({ children, variant, className = '' }: ContactButtonProps) => {
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
    variant: ButtonVariantT;
    className?: string;
    children:  React.ReactNode;
}
