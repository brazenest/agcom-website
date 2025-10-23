"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

type DownloadButtonProps = {
    targetRef: React.RefObject<HTMLDivElement | null>,
    fileName: string,
    accent: string,
    text: string,
}

export default function DownloadButton({
  targetRef,
  fileName,
  accent,
  text,
}: DownloadButtonProps) {
  const handlePrint = useReactToPrint({
    contentRef: targetRef,
    documentTitle: fileName,
  });

  return (
    <button
      onClick={handlePrint}
      className={`mt-4 inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium ${accent} hover:bg-gray-50`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 3h9m-9 0v4.5A1.5 1.5 0 006 9h12a1.5 1.5 0 001.5-1.5V3m-9 6v9m0 0l-3-3m3 3l3-3"
        />
      </svg>
      {text}
    </button>
  );
}