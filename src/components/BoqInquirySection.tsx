"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { submitBoqInquiry } from "@/lib/supabase/client";
import type { BoqInquiryResponse } from "@/types/product";

export const DEFAULT_BOQ_PRODUCT = "Multiple / Complete BOQ Package";

interface BoqInquirySectionProps {
  primaryProduct: string;
  onPrimaryProductChange: (product: string) => void;
  quoteTriggerNonce: number;
  confirmation: BoqInquiryResponse | null;
  onConfirmationChange: (confirmation: BoqInquiryResponse | null) => void;
}

export function BoqInquirySection({
  primaryProduct,
  onPrimaryProductChange,
  quoteTriggerNonce,
  confirmation,
  onConfirmationChange,
}: BoqInquirySectionProps) {
  const companyInputRef = useRef<HTMLInputElement>(null);

  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [siteLocation, setSiteLocation] = useState("");
  const [estimatedVolume, setEstimatedVolume] = useState("");
  const [boqNotes, setBoqNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (quoteTriggerNonce === 0) return;
    const section = document.getElementById("boq-inquiry");
    section?.scrollIntoView({ behavior: "smooth" });
    const timer = window.setTimeout(() => {
      companyInputRef.current?.focus();
    }, 150);
    return () => window.clearTimeout(timer);
  }, [quoteTriggerNonce]);

  async function handleBoqSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const result = await submitBoqInquiry({
        companyName,
        contactPerson,
        phone,
        email,
        siteLocation,
        primaryProduct,
        estimatedVolume,
        boqNotes,
      });

      onConfirmationChange(result);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to submit BOQ inquiry. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetBoqForm() {
    setCompanyName("");
    setContactPerson("");
    setPhone("");
    setEmail("");
    setSiteLocation("");
    onPrimaryProductChange(DEFAULT_BOQ_PRODUCT);
    setEstimatedVolume("");
    setBoqNotes("");
    setErrorMessage(null);
    onConfirmationChange(null);
  }

  return (
    <section id="boq-inquiry" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Direct Contact & Dispatch Desk */}
          <div id="contact" className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-safety-600 block mb-1">
                Estimation &amp; Commercial Desk
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 uppercase">
                Submit Your BOQ or Project Requirement
              </h2>
              <p className="text-sm text-steel-700 mt-2 leading-relaxed">
                Share your required tonnage, roof area (in sq. ft. or sq. mtr.),
                or product list. Our estimation engineers prepare itemized
                commercial quotes within 24 working hours.
              </p>
            </div>

            <div className="bg-steel-100 border border-steel-200 p-5 rounded-[2px] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-navy-900 text-white flex items-center justify-center shrink-0 rounded-[2px]">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Registered Corporate Office
                  </div>
                  <p className="text-xs text-steel-700 mt-0.5 leading-relaxed">
                    {COMPANY_INFO.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-roofblue-600 text-white flex items-center justify-center shrink-0 rounded-[2px]">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Sales &amp; Tender Desk
                  </div>
                  <p className="text-xs text-steel-700 mt-0.5">
                    Email:{" "}
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-semibold text-roofblue-600 hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <br />
                    Web:{" "}
                    <span className="font-semibold">{COMPANY_INFO.domain}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-safety-500 text-white flex items-center justify-center shrink-0 rounded-[2px]">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Working Hours
                  </div>
                  <p className="text-xs text-steel-700 mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: B2B Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-steel-50 border border-steel-300 p-6 sm:p-8 rounded-[2px]">
              {!confirmation ? (
                <form onSubmit={handleBoqSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Company / Firm Name *
                      </label>
                      <input
                        ref={companyInputRef}
                        type="text"
                        id="companyName"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Eastern Infra Projects Pvt. Ltd."
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactPerson"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Contact Person &amp; Designation *
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="e.g. Rajesh Kumar (Purchase Manager)"
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="phoneInput"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phoneInput"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="emailInput"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Official Email *
                      </label>
                      <input
                        type="email"
                        id="emailInput"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="purchase@company.com"
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="siteLocation"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Delivery City / State *
                      </label>
                      <input
                        type="text"
                        id="siteLocation"
                        required
                        value={siteLocation}
                        onChange={(e) => setSiteLocation(e.target.value)}
                        placeholder="e.g. Patna / Ranchi / Kolkata"
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="selectedProductSelect"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Primary Product Required *
                      </label>
                      <select
                        id="selectedProductSelect"
                        required
                        value={primaryProduct}
                        onChange={(e) => onPrimaryProductChange(e.target.value)}
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      >
                        <option value={DEFAULT_BOQ_PRODUCT}>
                          Multiple Products / Complete Project BOQ
                        </option>
                        {PRODUCTS.map((product) => (
                          <option key={product.id} value={product.name}>
                            {product.name} ({product.isCode})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="estQuantity"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Estimated Volume / Area
                      </label>
                      <input
                        type="text"
                        id="estQuantity"
                        value={estimatedVolume}
                        onChange={(e) => setEstimatedVolume(e.target.value)}
                        placeholder="e.g. 45 MT or 25,000 Sq. Ft."
                        className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="boqNotes"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                    >
                      Technical Specifications / BOQ Notes
                    </label>
                    <textarea
                      id="boqNotes"
                      rows={3}
                      value={boqNotes}
                      onChange={(e) => setBoqNotes(e.target.value)}
                      placeholder="Specify sheet thickness (e.g. 0.50mm AZ150), PEB clear span/eave height, RAL colour code, or delivery timeline..."
                      className="w-full bg-white border border-steel-300 px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-roofblue-600"
                    />
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="bg-red-50 border-l-4 border-safety-600 px-4 py-3 text-xs text-red-900 rounded-[2px]"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <span className="text-[11px] text-steel-700">
                      Direct dispatch &amp; GST billing across Bihar, Jharkhand,
                      UP, West Bengal &amp; Pan-India.
                    </span>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-safety-500 hover:bg-safety-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-bold uppercase tracking-wider text-base px-7 py-3 rounded-[2px] transition-colors shrink-0 cursor-pointer"
                    >
                      {isSubmitting
                        ? "Logging Inquiry..."
                        : "Generate Quote Inquiry"}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-white border-l-4 border-roofblue-600 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-roofblue-600">
                      Inquiry Logged Successfully
                    </span>
                    <span className="font-mono text-xs bg-steel-100 border border-steel-300 px-2.5 py-1 font-bold text-navy-900">
                      REF: {confirmation.quoteRef}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-900 uppercase">
                    Thank You. Your BOQ Request is Assigned.
                  </h3>
                  <p className="text-xs sm:text-sm text-steel-700 leading-relaxed">
                    We have logged your commercial quote request from{" "}
                    {confirmation.companyName} for &quot;
                    {confirmation.primaryProduct}&quot; (Delivery Site:{" "}
                    {confirmation.siteLocation}). Our Patna estimation desk will
                    share pricing and technical datasheets shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetBoqForm}
                    className="text-xs font-bold uppercase tracking-wider text-safety-600 hover:text-navy-900 underline cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
