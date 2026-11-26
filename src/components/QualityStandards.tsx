import { IS_STANDARDS } from "@/data/company";

export function QualityStandards() {
  return (
    <section
      id="standards"
      className="py-16 bg-navy-900 text-white blueprint-grid-dark border-b border-navy-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-navy-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-safety-400 block mb-1">
              Engineering Compliance &amp; Metallurgy
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Technical Standards &amp; Material Specifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md">
            All structural members, roof profiles, and galvanised infrastructure
            products adhere to Bureau of Indian Standards (BIS) &amp; MoRTH
            guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {IS_STANDARDS.map((item) => (
            <div
              key={item.code}
              className="bg-navy-950/90 border border-navy-800 p-5 rounded-[2px]"
            >
              <div className="text-xs font-mono text-safety-400 font-bold mb-1">
                {item.code}
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
