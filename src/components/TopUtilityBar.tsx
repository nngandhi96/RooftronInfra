"use client";

import { COMPANY_INFO } from "@/data/company";

interface TopUtilityBarProps {
  onOpenBrochure: () => void;
}

export function TopUtilityBar({ onOpenBrochure }: TopUtilityBarProps) {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-200">
            <span className="w-1.5 h-1.5 bg-safety-500 inline-block" />
            CIN:{" "}
            <span className="font-mono text-white">{COMPANY_INFO.cin}</span>
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="inline-flex items-center gap-1 text-slate-300">
            <svg
              className="w-3.5 h-3.5 text-safety-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="square"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {COMPANY_INFO.shortAddress}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            <svg
              className="w-3.5 h-3.5 text-safety-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {COMPANY_INFO.email}
          </a>
          <span className="text-slate-600">|</span>
          <button
            type="button"
            onClick={onOpenBrochure}
            className="text-white hover:text-safety-400 font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 text-safety-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Product Catalogue (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}
