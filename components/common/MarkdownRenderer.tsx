"use client";

import React from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";

const markdownComponents: Components = {
	// Headings
	h1: ({ children }) => (
		<h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-10 mb-6 first:mt-0">
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-10 mb-4">
			{children}
		</h2>
	),
	h3: ({ children }) => (
		<h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">
			{children}
		</h3>
	),
	h4: ({ children }) => (
		<h4 className="text-lg md:text-xl font-semibold mt-6 mb-2">
			{children}
		</h4>
	),
	h5: ({ children }) => (
		<h5 className="text-base md:text-lg font-semibold mt-4 mb-2">
			{children}
		</h5>
	),
	h6: ({ children }) => (
		<h6 className="text-sm font-semibold uppercase tracking-wide mt-4 mb-2 text-neutral-500 dark:text-neutral-400">
			{children}
		</h6>
	),

	// Paragraphs
	p: ({ children }) => (
		<p className="leading-relaxed mb-4">
			{children}
		</p>
	),

	// Links
	a: ({ href, children }) => {
		const url = href || "#";
		const isInternal = url.startsWith("/") || url.startsWith("#");

		if (isInternal) {
			return (
				<Link
					href={url}
					className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:opacity-80 transition"
				>
					{children}
				</Link>
			);
		}

		return (
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:opacity-80 transition"
			>
				{children}
			</a>
		);
	},

	// Lists
	ul: ({ children }) => (
		<ul className="list-disc list-outside ml-5 mb-4 space-y-1">
			{children}
		</ul>
	),
	ol: ({ children }) => (
		<ol className="list-decimal list-outside ml-5 mb-4 space-y-1">
			{children}
		</ol>
	),
	li: ({ children }) => (
		<li className="leading-relaxed">
			{children}
		</li>
	),

	// Blockquotes
	blockquote: ({ children }) => (
		<blockquote className="border-l-4 border-neutral-300 dark:border-neutral-600 pl-4 italic text-neutral-700 dark:text-neutral-300 my-6">
			{children}
		</blockquote>
	),

	// Horizontal rule
	hr: () => (
		<hr className="my-8 border-neutral-200 dark:border-neutral-700" />
	),

	// Strong / Emphasis
	strong: ({ children }) => (
		<strong className="font-semibold">
			{children}
		</strong>
	),
	em: ({ children }) => (
		<em className="italic">
			{children}
		</em>
	),

	// Inline + block code
	code: (props: any) => {
		const isInline = props.inline === true;

		if (isInline) {
			return (
				<code className="px-1.5 py-0.5 rounded-sm bg-accent-subtle text-sm font-mono">
					{props.children}
				</code>
			);
		}

		// Code block
		return (
			<pre className="p-4 rounded-md bg-bg-alt border border-border overflow-auto my-6">
				<code className={props.className}>{props.children}</code>
			</pre>
		);
	},

	// Images (Markdown ![]())
	img: (props: any) => {
		const src =
            typeof props.src === "string"
            	? props.src
            	: "";

		if (!src) {
			return null;
		}

		return (
			<span className="block my-8">
				<Image
					src={src}
					alt={props.alt ?? ""}
					width={900}
					height={500}
					className="rounded-lg shadow-sm w-full h-auto"
				/>
			</span>
		);
	},

	// Tables
	table: ({ children }) => (
		<div className="w-full overflow-x-auto my-6">
			<table className="min-w-full border-collapse text-sm">
				{children}
			</table>
		</div>
	),
	thead: ({ children }) => (
		<thead className="bg-neutral-50 dark:bg-neutral-900/40">
			{children}
		</thead>
	),
	tbody: ({ children }) => <tbody>{children}</tbody>,
	tr: ({ children }) => (
		<tr className="border-b border-neutral-200 dark:border-neutral-800 last:border-0">
			{children}
		</tr>
	),
	th: ({ children }) => (
		<th className="text-left px-3 py-2 font-semibold">
			{children}
		</th>
	),
	td: ({ children }) => (
		<td className="px-3 py-2 align-top">
			{children}
		</td>
	),
};

export function MarkdownRenderer({ content }: { content: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={markdownComponents}
		>
			{content}
		</ReactMarkdown>
	);
}
