import { COMPANY_INFO, OPERATIONAL_PILLARS } from "@/data/company";

export function CorporateProfile() {
  return (
    <section
      id="about"
      className="py-16 bg-steel-100 border-b border-steel-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Company Overview */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-roofblue-600 block">
              Corporate Profile • Patna, Bihar
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 uppercase leading-tight">
              Built to Protect. Engineered to Last.
            </h2>
            <p className="text-sm sm:text-base text-steel-700 leading-relaxed">
              <strong>Rooftron Infra Solution Private Limited</strong> is a
              registered Indian infrastructure, roofing, and structural steel
              solutions company headquartered at City Centre Mall, Patna, Bihar.
              We partner with EPC contractors, warehouse developers, factory
              owners, and government infrastructure agencies to supply
              precision-engineered steel buildings and cladding systems.
            </p>
            <p className="text-sm sm:text-base text-steel-700 leading-relaxed">
              From primary structural framing (built-up I-sections, Z &amp; C
              purlins) to high-rib colour-coated roofing profiles, deck sheets,
              highway W-beam crash barriers, and solar mounting structures,
              every batch undergoes dimensional and coating thickness
              verification before site dispatch.
            </p>

            {/* 3 Core Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              {OPERATIONAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white border border-steel-200 p-4 rounded-[2px]"
                >
                  <div className="text-safety-600 font-display font-bold text-lg uppercase">
                    {pillar.title}
                  </div>
                  <p className="text-xs text-steel-700 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Official MCA Corporate Registration Ledger */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-steel-300 rounded-[2px] overflow-hidden">
              <div className="bg-navy-900 text-white px-5 py-3.5 flex items-center justify-between">
                <span className="font-display font-bold uppercase tracking-wider text-base">
                  Corporate Registration Dossier
                </span>
                <span className="text-[11px] font-mono bg-roofblue-600 px-2 py-0.5 rounded-[2px]">
                  MCA VERIFIED
                </span>
              </div>
              <div className="divide-y divide-steel-200 text-xs sm:text-sm">
                <div className="px-5 py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-steel-700 font-medium">
                    Legal Entity Name
                  </span>
                  <span className="font-bold text-navy-900 sm:text-right">
                    {COMPANY_INFO.legalName}
                  </span>
                </div>
                <div className="px-5 py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-steel-700 font-medium">
                    Corporate ID (CIN)
                  </span>
                  <span className="font-mono font-bold text-roofblue-600">
                    {COMPANY_INFO.cin}
                  </span>
                </div>
                <div className="px-5 py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-steel-700 font-medium">
                    Date of Incorporation
                  </span>
                  <span className="font-semibold text-steel-900">
                    {COMPANY_INFO.incorporationDate}
                  </span>
                </div>
                <div className="px-5 py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="text-steel-700 font-medium">
                    Official Domain
                  </span>
                  <span className="font-semibold text-steel-900">
                    {COMPANY_INFO.domain}
                  </span>
                </div>
                <div className="px-5 py-3.5 flex flex-col gap-1">
                  <span className="text-steel-700 font-medium">
                    Registered Office Address
                  </span>
                  <span className="font-semibold text-steel-900 leading-relaxed">
                    {COMPANY_INFO.fullAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
