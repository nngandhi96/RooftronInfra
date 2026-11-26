"use client";

import { useEffect } from "react";
import type { Product } from "@/types/product";

interface ProductSpecModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (productName: string) => void;
}

export function ProductSpecModal({
  product,
  onClose,
  onAddToQuote,
}: ProductSpecModalProps) {
  useEffect(() => {
    if (!product) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalProductTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 bg-navy-950/75 flex items-center justify-center p-4"
    >
      <div className="bg-white border border-steel-300 max-w-2xl w-full rounded-[2px] overflow-hidden shadow-2xl">
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-safety-400 block">
              {product.categoryLabel} &bull; {product.isCode}
            </span>
            <h3
              id="modalProductTitle"
              className="font-display font-extrabold text-2xl uppercase tracking-tight"
            >
              {product.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Specification Modal"
            className="text-slate-300 hover:text-white p-1.5 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
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

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <p className="text-sm text-steel-700 leading-relaxed">
            {product.summary}
          </p>

          {/* Technical Spec Table */}
          <div className="border border-steel-200 rounded-[2px] overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-steel-200">
                {product.specs.map(([label, value]) => (
                  <tr key={label}>
                    <td className="px-4 py-2.5 font-semibold text-navy-900 bg-steel-50 w-2/5">
                      {label}
                    </td>
                    <td className="px-4 py-2.5 text-steel-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-steel-100 border border-steel-200 p-4 rounded-[2px]">
            <div className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
              Key Industrial Applications
            </div>
            <p className="text-xs text-steel-700">{product.applications}</p>
          </div>
        </div>

        <div className="bg-steel-50 px-6 py-4 border-t border-steel-200 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-wider text-steel-700 hover:text-navy-900 px-3 py-2 cursor-pointer"
          >
            Close Window
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onAddToQuote(product.name);
            }}
            className="bg-safety-500 hover:bg-safety-600 text-white font-display font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
          >
            Add to BOQ Quote Request &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
