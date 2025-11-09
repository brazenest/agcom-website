import { ReactNode } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { StyledString } from "next/dist/build/swc/types";

export const CTAButton = ({ children, href = null }: CTAButtonProps) => (
    <Button variant="primary" href={href}>{children}</Button>
)

type CTAButtonT = {
    href?: string | null,
    children: ReactNode,
}

type CTAButtonProps = CTAButtonT
