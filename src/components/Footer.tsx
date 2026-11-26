"use client";

import {
  COMPANY_INFO,
  FOOTER_INFRA_LINKS,
  FOOTER_PEB_LINKS,
} from "@/data/company";

interface FooterProps {
  onSelectProduct: (productId: string) => void;
}

export function Footer({ onSelectProduct }: FooterProps) {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-safety-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-navy-800">
          {/* Brand & Registration */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-display font-extrabold text-2xl text-white tracking-tight uppercase">
              ROOFTRON INFRA SOLUTION PVT. LTD.
            </div>
            <div className="text-xs font-bold tracking-wider text-safety-400 uppercase">
              {COMPANY_INFO.tagline}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Manufacturers &amp; suppliers of Pre-Engineered Buildings (PEB),
              Colour-Coated Profile Sheets, Decking Sheets, Highway Crash
              Barriers, Cable Trays, ERW Pipes, and Structural Steel
              Fabrications.
            </p>
            <div className="pt-1 text-xs font-mono text-slate-300">
              CIN: {COMPANY_INFO.cin}
              <br />
              Domain: {COMPANY_INFO.domainShort}
            </div>
          </div>

          {/* Product Group 1 */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
              PEB &amp; Roofing Systems
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {FOOTER_PEB_LINKS.map((item) => (
                <li key={item.productId}>
                  <a
                    href="#products"
                    onClick={() => onSelectProduct(item.productId)}
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Group 2 */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Infra &amp; Steel
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {FOOTER_INFRA_LINKS.map((item) => (
                <li key={item.productId}>
                  <a
                    href="#products"
                    onClick={() => onSelectProduct(item.productId)}
                    className="hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Registered Address */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="font-display font-bold text-base text-white uppercase tracking-wider">
              Registered Office
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Unit No. CCPT BO402, City Centre Mall,
              <br />
              Lodhipur, Patna, Bihar 800001
            </p>
            <p className="text-xs text-slate-400 space-y-1">
              <span className="block">
                Phone / WhatsApp:{" "}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="text-white hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </span>
              <span className="block">
                Email:{" "}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; 2026 Rooftron Infra Solution Private Limited. All Rights
            Reserved.
          </div>
          <div>
            Incorporated in Patna, Bihar (MCA Reg. Date:{" "}
            {COMPANY_INFO.incorporationShort})
          </div>
        </div>
      </div>
    </footer>
  );
}
