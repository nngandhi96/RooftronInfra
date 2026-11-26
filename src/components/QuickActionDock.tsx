import { COMPANY_INFO } from "@/data/company";

export function QuickActionDock() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col shadow-lg border-l border-t border-b border-steel-300 bg-white">
      {/* Direct Call */}
      <a
        href="#boq-inquiry"
        title="Request Callback"
        className="group relative w-11 h-11 bg-safety-500 hover:bg-safety-600 text-white flex items-center justify-center transition-colors border-b border-white/20"
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="hidden md:block absolute right-12 bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          Sales Desk Call
        </span>
      </a>
      {/* WhatsApp Inquiry */}
      <a
        href="#boq-inquiry"
        title="WhatsApp BOQ Desk"
        className="group relative w-11 h-11 bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center transition-colors border-b border-white/20"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
        </svg>
        <span className="hidden md:block absolute right-12 bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          WhatsApp BOQ
        </span>
      </a>
      {/* Email Quote */}
      <a
        href={`mailto:${COMPANY_INFO.email}`}
        title="Email Tender / BOQ"
        className="group relative w-11 h-11 bg-roofblue-600 hover:bg-navy-900 text-white flex items-center justify-center transition-colors"
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
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="hidden md:block absolute right-12 bg-navy-900 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          Email Sales
        </span>
      </a>
    </div>
  );
}
