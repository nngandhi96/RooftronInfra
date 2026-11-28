"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HERO_SLIDES } from "@/data/products";

interface HeroSectionProps {
  onSelectProduct: (productId: string) => void;
}

export function HeroSection({ onSelectProduct }: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[activeSlide] ?? HERO_SLIDES[0];

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [isPaused, totalSlides]);

  function handlePrev() {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }

  function handleNext() {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }

  return (
    <section id="top" className="border-b border-steel-200">
      {/* Full-Width Industrial Hero Image Carousel */}
      <div
        className="relative w-full min-h-[470px] sm:min-h-[540px] lg:min-h-[600px] bg-navy-950 overflow-hidden flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides */}
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === activeSlide;
          return (
            <div
              key={slide.id}
              aria-hidden={!isCurrent}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isCurrent
                  ? "opacity-100 scale-100 z-0"
                  : "opacity-0 scale-[1.03] pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        {/* Directional Dark Navy Gradient Overlays for Crisp Readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/65 to-navy-950/15"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/25"
        />

        {/* Vertical PREV Button (Left Edge) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Hero Slide"
          className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 border border-white/50 bg-navy-950/50 hover:bg-roofblue-600 hover:border-roofblue-500 text-white px-2 py-4 text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase transition-colors cursor-pointer"
        >
          <span className="block [writing-mode:vertical-rl] rotate-180">
            PREV
          </span>
        </button>

        {/* Vertical NEXT Button (Right Edge, cleared from QuickActionDock) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Hero Slide"
          className="absolute right-12 sm:right-14 top-1/2 -translate-y-1/2 z-20 border border-white/50 bg-navy-950/50 hover:bg-roofblue-600 hover:border-roofblue-500 text-white px-2 py-4 text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase transition-colors cursor-pointer"
        >
          <span className="block [writing-mode:vertical-rl] rotate-180">
            NEXT
          </span>
        </button>

        {/* Slide Content Overlay */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-14 sm:px-16 lg:px-16 py-14 sm:py-16">
          <div className="max-w-3xl space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-safety-500 inline-block" />
              <span className="text-safety-400 font-bold text-sm sm:text-base tracking-wide">
                {currentSlide.eyebrow}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[60px] text-white uppercase leading-[1.04] tracking-tight drop-shadow-sm">
              {currentSlide.headline}
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              {currentSlide.subtitle}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#boq-inquiry"
                className="bg-roofblue-600 hover:bg-safety-500 text-white font-display font-bold uppercase tracking-wider text-sm sm:text-base px-7 py-3 rounded-full transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
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

              <a
                href="#products"
                className="bg-white/10 hover:bg-white/20 border border-white/35 text-white font-display font-bold uppercase tracking-wider text-sm sm:text-base px-6 py-3 rounded-full transition-colors"
              >
                Explore 10 Product Lines
              </a>

              <button
                type="button"
                onClick={() => onSelectProduct(currentSlide.productId)}
                className="text-xs font-bold uppercase tracking-wider text-safety-400 hover:text-white underline underline-offset-4 ml-1 cursor-pointer"
              >
                {currentSlide.featuredLabel} Specs &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Slide Progress Bars */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "w-9 bg-safety-500"
                    : "w-4 bg-white/40 hover:bg-white/75"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Grounded Engineering Facts Strip */}
      <div className="bg-steel-100 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 bg-white border border-steel-200 px-3 py-1.5 rounded-[2px]">
                <span className="w-2 h-2 bg-roofblue-600" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy-900">
                  Precision Roll-Forming &amp; Structural Engineering • Patna,
                  Bihar
                </span>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-3 gap-3">
              <div className="bg-white/80 border border-steel-200 px-3.5 py-2 rounded-[2px]">
                <div className="font-display font-extrabold text-lg sm:text-xl text-navy-900">
                  IS 2062 / E350
                </div>
                <div className="text-[11px] text-steel-700 font-medium">
                  High-Tensile Structural Grade
                </div>
              </div>
              <div className="bg-white/80 border border-steel-200 px-3.5 py-2 rounded-[2px]">
                <div className="font-display font-extrabold text-lg sm:text-xl text-navy-900">
                  AZ150 / PPGI
                </div>
                <div className="text-[11px] text-steel-700 font-medium">
                  Al-Zn Alloy Roof Cladding
                </div>
              </div>
              <div className="bg-white/80 border border-steel-200 px-3.5 py-2 rounded-[2px]">
                <div className="font-display font-extrabold text-lg sm:text-xl text-navy-900">
                  PAN-INDIA
                </div>
                <div className="text-[11px] text-steel-700 font-medium">
                  Direct Mill &amp; Site Dispatch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
