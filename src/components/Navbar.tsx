"use client";

import { useEffect, useState } from "react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { ProductIcon } from "@/components/icons/ProductIcon";
import { RooftronLogo } from "@/components/icons/RooftronLogo";

interface NavbarProps {
  onSelectProduct: (productId: string) => void;
}

export function Navbar({ onSelectProduct }: NavbarProps) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-steel-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Custom Brand Logo Recreated from Rooftron Emblem */}
          <a href="#top" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center">
              <RooftronLogo />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-navy-900 leading-none">
                {COMPANY_INFO.shortBrand}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-steel-700 uppercase mt-0.5">
                {COMPANY_INFO.subBrand}
              </span>
              <span className="text-[8.5px] font-bold tracking-[0.08em] text-roofblue-600 uppercase mt-0.5 hidden sm:block">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#top"
              className="text-sm font-semibold text-steel-900 hover:text-roofblue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-steel-900 hover:text-roofblue-600 transition-colors"
            >
              About
            </a>

            {/* Products Mega-Menu Trigger */}
            <div
              className="relative group"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                aria-expanded={isMegaMenuOpen}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-steel-900 group-hover:text-roofblue-600 py-7 transition-colors cursor-pointer"
              >
                Products &amp; Solutions
                <svg
                  className={`w-4 h-4 text-steel-700 group-hover:text-roofblue-600 transition-transform ${
                    isMegaMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="square"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Pinax-Style Technical Mega Menu */}
              <div
                className={`${
                  isMegaMenuOpen ? "block" : "hidden"
                } fixed left-0 right-0 top-20 bg-white border-t border-b border-steel-200 shadow-xl z-50`}
              >
                <div className="max-w-7xl mx-auto px-6 py-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-steel-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-safety-600">
                        Complete Manufacturing &amp; Supply Range
                      </span>
                      <h3 className="font-display text-xl font-bold text-navy-900 uppercase">
                        Industrial Roofing, PEB &amp; Structural Steel Products
                      </h3>
                    </div>
                    <a
                      href="#products"
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="text-xs font-bold uppercase tracking-wider text-roofblue-600 hover:text-navy-900 inline-flex items-center gap-1"
                    >
                      View Full Catalog &amp; Specs &rarr;
                    </a>
                  </div>
                  <div className="grid grid-cols-4 gap-x-6 gap-y-2.5">
                    {PRODUCTS.map((product) => (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => {
                          setIsMegaMenuOpen(false);
                          onSelectProduct(product.id);
                        }}
                        className="flex items-center gap-3 p-2 text-left hover:bg-steel-100 border border-transparent hover:border-steel-200 rounded-[2px] transition-colors group cursor-pointer"
                      >
                        <div className="text-navy-900 group-hover:text-safety-600 shrink-0">
                          <ProductIcon productId={product.id} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-navy-900 group-hover:text-roofblue-600">
                            {product.name}
                          </div>
                          <div className="text-[10px] text-steel-700 font-mono">
                            {product.isCode}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#standards"
              className="text-sm font-semibold text-steel-900 hover:text-roofblue-600 transition-colors"
            >
              Quality &amp; IS Codes
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-steel-900 hover:text-roofblue-600 transition-colors"
            >
              Contact &amp; Office
            </a>
          </nav>

          {/* Primary Action Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#boq-inquiry"
              className="bg-safety-500 hover:bg-safety-600 text-white font-display font-bold uppercase tracking-wider text-sm sm:text-base px-4 sm:px-5 py-2.5 rounded-[2px] transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Request Quote</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="square"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen((prev) => !prev)}
              aria-label="Open Menu"
              aria-expanded={isMobileDrawerOpen}
              className="lg:hidden p-2.5 border border-steel-200 text-navy-900 hover:bg-steel-100 rounded-[2px] cursor-pointer"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileDrawerOpen && (
        <div className="lg:hidden bg-navy-900 text-white border-t border-navy-800 max-h-[82vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#top"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="block py-2 text-sm font-semibold border-b border-navy-800"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="block py-2 text-sm font-semibold border-b border-navy-800"
            >
              About Rooftron Infra
            </a>
            <div className="py-2 border-b border-navy-800">
              <div className="text-xs font-bold uppercase tracking-wider text-safety-400 mb-2">
                All Product Categories
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-200">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => {
                      setIsMobileDrawerOpen(false);
                      onSelectProduct(product.id);
                    }}
                    className="text-left py-1 hover:text-safety-400 truncate cursor-pointer"
                  >
                    &rsaquo; {product.name}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#standards"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="block py-2 text-sm font-semibold border-b border-navy-800"
            >
              Quality &amp; IS Standards
            </a>
            <a
              href="#boq-inquiry"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="block py-2 text-sm font-semibold text-safety-400"
            >
              Submit BOQ / Bulk Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
