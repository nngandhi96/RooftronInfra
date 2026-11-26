"use client";

import { useState } from "react";
import { HERO_SHOWCASES } from "@/data/products";
import { HeroShowcaseGraphic } from "@/components/icons/HeroShowcaseGraphic";

interface HeroSectionProps {
  onSelectProduct: (productId: string) => void;
}

export function HeroSection({ onSelectProduct }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = HERO_SHOWCASES[activeTab] ?? HERO_SHOWCASES[0];

  return (
    <section
      id="top"
      className="relative bg-steel-100 blueprint-grid border-b border-steel-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Crisp Industrial Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white border border-steel-200 px-3 py-1.5 rounded-[2px]">
              <span className="w-2 h-2 bg-roofblue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Precision Roll-Forming &amp; Structural Engineering • Patna,
                Bihar
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-navy-900 uppercase leading-[1.04] tracking-tight">
              Engineered Steel Structures &amp;{" "}
              <span className="text-roofblue-600">Industrial Roofing</span>{" "}
              Systems
            </h1>

            <p className="text-base sm:text-lg text-steel-700 leading-relaxed max-w-2xl">
              Rooftron Infra Solution Pvt. Ltd. delivers high-tensile{" "}
              <strong>Pre-Engineered Buildings (PEB)</strong>,{" "}
              <strong>Colour-Coated Profile Roof Sheets</strong>,{" "}
              <strong>Highway Crash Barriers</strong>, and heavy structural
              steel fabrications engineered to strict IS &amp; ASTM codes for
              industrial, logistics, and infrastructure projects.
            </p>

            {/* Primary & Secondary Sharp CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#products"
                className="bg-navy-900 hover:bg-roofblue-600 text-white font-display font-bold uppercase tracking-wider text-base px-6 py-3.5 rounded-[2px] transition-colors inline-flex items-center gap-2"
              >
                Explore 16 Product Lines
                <svg
                  className="w-4 h-4"
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
              </a>
              <a
                href="#boq-inquiry"
                className="bg-white hover:bg-steel-50 text-navy-900 border border-steel-300 font-display font-bold uppercase tracking-wider text-base px-6 py-3.5 rounded-[2px] transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-safety-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="square"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Submit BOQ / Drawing
              </a>
            </div>

            {/* Grounded Engineering Facts Strip */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-steel-200">
              <div>
                <div className="font-display font-extrabold text-xl sm:text-2xl text-navy-900">
                  IS 2062 / E350
                </div>
                <div className="text-xs text-steel-700 font-medium">
                  High-Tensile Structural Grade
                </div>
              </div>
              <div className="border-l border-steel-200 pl-3">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-navy-900">
                  AZ150 / PPGI
                </div>
                <div className="text-xs text-steel-700 font-medium">
                  Al-Zn Alloy Roof Cladding
                </div>
              </div>
              <div className="border-l border-steel-200 pl-3">
                <div className="font-display font-extrabold text-xl sm:text-2xl text-navy-900">
                  PAN-INDIA
                </div>
                <div className="text-xs text-steel-700 font-medium">
                  Direct Mill &amp; Site Dispatch
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Technical Showcase Box */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-steel-300 shadow-sm rounded-[2px] overflow-hidden">
              {/* Showcase Switcher Tabs */}
              <div className="grid grid-cols-3 bg-navy-900 text-white text-xs font-display font-bold uppercase tracking-wider border-b border-navy-800">
                {HERO_SHOWCASES.map((showcase, idx) => {
                  const isActive = idx === activeTab;
                  return (
                    <button
                      key={showcase.id}
                      type="button"
                      onClick={() => setActiveTab(idx)}
                      className={`py-3 px-2 text-center transition-colors cursor-pointer ${
                        idx > 0 ? "border-l border-navy-800" : ""
                      } ${
                        isActive
                          ? "bg-roofblue-600 border-b-2 border-safety-500 text-white"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {showcase.tabLabel}
                    </button>
                  );
                })}
              </div>

              {/* Interactive Engineering Visual Canvas */}
              <div className="p-5 sm:p-6 bg-white">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-safety-600">
                      {currentItem.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProduct(currentItem.productId)}
                      className="text-xs font-bold uppercase text-roofblue-600 hover:underline cursor-pointer"
                    >
                      Full Datasheet &rarr;
                    </button>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-900 uppercase leading-tight">
                    {currentItem.title}
                  </h3>
                  <HeroShowcaseGraphic showcaseId={currentItem.id} />
                  <p className="text-xs sm:text-sm text-steel-700 leading-relaxed">
                    {currentItem.desc}
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-steel-200">
                    {currentItem.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-steel-100 px-3 py-2 border border-steel-200"
                      >
                        <div className="text-[10px] uppercase font-bold text-steel-700">
                          {spec.label}
                        </div>
                        <div className="font-display font-bold text-base text-navy-900">
                          {spec.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
