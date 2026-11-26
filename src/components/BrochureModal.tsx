"use client";

import { useEffect } from "react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochureModalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-navy-950/75 flex items-center justify-center p-4"
    >
      <div className="bg-white border border-steel-300 max-w-lg w-full rounded-[2px] overflow-hidden shadow-2xl">
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
          <h3
            id="brochureModalTitle"
            className="font-display font-bold text-xl uppercase"
          >
            Rooftron Infra Product Catalogue
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Brochure Modal"
            className="text-slate-300 hover:text-white cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="square"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4 text-sm text-steel-700">
          <p>
            Download the complete technical datasheet covering all 19 structural
            steel, PEB, roofing profile, thermal/sound/vibration insulation, and
            highway infrastructure product lines of{" "}
            <strong>Rooftron Infra Solution Pvt. Ltd.</strong>
          </p>
          <div className="bg-steel-100 border border-steel-200 p-3.5 text-xs space-y-1 font-mono">
            <div>Document: Rooftron_Infra_Technical_Catalogue_2026.pdf</div>
            <div>
              Includes: Dimensional Charts, IS Codes &amp; Coil Color Swatches
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase text-steel-700 cursor-pointer"
            >
              Cancel
            </button>
            <a
              href="#boq-inquiry"
              onClick={onClose}
              className="bg-roofblue-600 hover:bg-navy-900 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-[2px]"
            >
              Request Full PDF via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
