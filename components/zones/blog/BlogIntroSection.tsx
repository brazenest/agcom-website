"use client";

import { Section } from "@/components/ui/Section";
import * as React from "react";

export function BlogIntroSection() {
	return (
		<Section
			align="left"
			width="default"
			eyebrow="Notes & Process"
			title="Working notes on engineering, design, and cinematic craft."
			subtitle="In-progress thoughts on shipping resilient systems, designing motion, and bridging code with camera."
		>
			<p className="layout-prose text-sm md:text-base text-text-muted">
				Some of these pieces are closer to field notes than polished essays. The
				throughline is the same as my work: building interfaces and visuals that
				feel intentional.
			</p>
		</Section>
	);
}

export default BlogIntroSection;
