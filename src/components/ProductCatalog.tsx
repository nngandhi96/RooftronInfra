"use client";

import Image from "next/image";
import { useState } from "react";
import { CATEGORY_FILTERS, PRODUCTS } from "@/data/products";
import { ProductIcon } from "@/components/icons/ProductIcon";
import type { ProductCategoryId } from "@/types/product";

interface ProductCatalogProps {
  onSelectProduct: (productId: string) => void;
  onQuoteProduct: (productName: string) => void;
}

export function ProductCatalog({
  onSelectProduct,
  onQuoteProduct,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategoryId>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <section id="products" className="py-16 bg-white border-b border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-steel-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-safety-600 block mb-1">
              Industrial Manufacturing &amp; Supply Portfolio
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 uppercase tracking-tight">
              Core Product Lines &amp; Technical Specifications
            </h2>
            <p className="text-sm text-steel-700 mt-1 max-w-2xl">
              Select any product below to inspect dimensional tolerances, steel
              grades, coating standards, or add directly to your BOQ inquiry.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5">
            {CATEGORY_FILTERS.map((filter) => {
              const isActive = selectedCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-[2px] transition-colors cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white"
                      : "bg-steel-100 hover:bg-steel-200 text-steel-900"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Technical Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {filteredProducts.map((product) => {
            const hasImage = Boolean(product.image);
            return (
              <div
                key={product.id}
                className={`relative overflow-hidden border transition-colors rounded-[2px] flex flex-col justify-between group ${
                  hasImage
                    ? "bg-navy-950 border-navy-800 hover:border-safety-500"
                    : "bg-white border-steel-200 hover:border-roofblue-600"
                }`}
              >
                {product.image && (
                  <>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/65 to-navy-950/45"
                    />
                  </>
                )}

                <div className="relative z-10 p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`w-12 h-12 border flex items-center justify-center rounded-[2px] transition-colors ${
                        hasImage
                          ? "bg-navy-950/65 backdrop-blur-xs border-white/25 text-white group-hover:bg-safety-500 group-hover:border-safety-500"
                          : "bg-steel-100 border-steel-200 text-navy-900 group-hover:bg-navy-900 group-hover:text-white"
                      }`}
                    >
                      <ProductIcon productId={product.id} />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold border px-2 py-0.5 rounded-[2px] ${
                        hasImage
                          ? "bg-navy-950/75 text-slate-100 border-white/25"
                          : "bg-steel-100 text-steel-700 border-steel-200"
                      }`}
                    >
                      {product.isCode}
                    </span>
                  </div>
                  <div>
                    <div
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        hasImage ? "text-safety-400" : "text-roofblue-600"
                      }`}
                    >
                      {product.categoryLabel}
                    </div>
                    <h3
                      className={`font-display font-bold text-xl uppercase mt-0.5 transition-colors ${
                        hasImage
                          ? "text-white group-hover:text-safety-400 drop-shadow-sm"
                          : "text-navy-900 group-hover:text-roofblue-600"
                      }`}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      hasImage
                        ? "text-slate-100 drop-shadow-sm"
                        : "text-steel-700"
                    }`}
                  >
                    {product.summary}
                  </p>
                </div>

                <div
                  className={`relative z-10 px-5 py-3 border-t flex items-center justify-between ${
                    hasImage
                      ? "bg-navy-950/80 border-white/15"
                      : "bg-steel-50 border-steel-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product.id)}
                    className={`text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer ${
                      hasImage
                        ? "text-white hover:text-safety-400"
                        : "text-navy-900 hover:text-roofblue-600"
                    }`}
                  >
                    Technical Specs &rarr;
                  </button>
                  <button
                    type="button"
                    onClick={() => onQuoteProduct(product.name)}
                    className={`text-[11px] font-bold uppercase tracking-wider cursor-pointer ${
                      hasImage
                        ? "text-safety-400 hover:text-white"
                        : "text-safety-600 hover:text-navy-900"
                    }`}
                  >
                    + Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
