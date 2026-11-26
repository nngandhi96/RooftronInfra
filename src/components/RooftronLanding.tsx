"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import type { BoqInquiryResponse } from "@/types/product";
import { TopUtilityBar } from "@/components/TopUtilityBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductCatalog } from "@/components/ProductCatalog";
import { CorporateProfile } from "@/components/CorporateProfile";
import { QualityStandards } from "@/components/QualityStandards";
import {
  BoqInquirySection,
  DEFAULT_BOQ_PRODUCT,
} from "@/components/BoqInquirySection";
import { Footer } from "@/components/Footer";
import { QuickActionDock } from "@/components/QuickActionDock";
import { ProductSpecModal } from "@/components/ProductSpecModal";
import { BrochureModal } from "@/components/BrochureModal";

export function RooftronLanding() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [primaryProduct, setPrimaryProduct] = useState(DEFAULT_BOQ_PRODUCT);
  const [quoteTriggerNonce, setQuoteTriggerNonce] = useState(0);
  const [boqConfirmation, setBoqConfirmation] =
    useState<BoqInquiryResponse | null>(null);

  const activeProduct = activeProductId
    ? PRODUCTS.find((p) => p.id === activeProductId) ?? null
    : null;

  function handleQuoteProduct(productName: string) {
    setPrimaryProduct(productName);
    setBoqConfirmation(null);
    setQuoteTriggerNonce((prev) => prev + 1);
  }

  return (
    <>
      <TopUtilityBar onOpenBrochure={() => setIsBrochureOpen(true)} />
      <Navbar onSelectProduct={(id) => setActiveProductId(id)} />
      <main>
        <HeroSection onSelectProduct={(id) => setActiveProductId(id)} />
        <ProductCatalog
          onSelectProduct={(id) => setActiveProductId(id)}
          onQuoteProduct={handleQuoteProduct}
        />
        <CorporateProfile />
        <QualityStandards />
        <BoqInquirySection
          primaryProduct={primaryProduct}
          onPrimaryProductChange={setPrimaryProduct}
          quoteTriggerNonce={quoteTriggerNonce}
          confirmation={boqConfirmation}
          onConfirmationChange={setBoqConfirmation}
        />
      </main>
      <Footer onSelectProduct={(id) => setActiveProductId(id)} />
      <QuickActionDock />
      <ProductSpecModal
        product={activeProduct}
        onClose={() => setActiveProductId(null)}
        onAddToQuote={handleQuoteProduct}
      />
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </>
  );
}
