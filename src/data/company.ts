export const COMPANY_INFO = {
  legalName: "ROOFTRON INFRA SOLUTION PRIVATE LIMITED",
  shortBrand: "ROOFTRON",
  subBrand: "INFRA SOLUTION PVT. LTD.",
  tagline: "BUILT TO PROTECT. ENGINEERED TO LAST.",
  cin: "U43292BR2026PTC089582",
  incorporationDate: "November 17, 2026",
  incorporationShort: "17 Nov 2026",
  domain: "www.rooftroninfra.com",
  domainShort: "rooftroninfra.com",
  email: "sales@rooftroninfra.com",
  shortAddress: "Regd. Office: City Centre Mall, Lodhipur, Patna, Bihar – 800001",
  fullAddress:
    "Unit No Ccpt Bo402, City Centre Mall, Lodhipur, Patna G.P.O., Phulwari, Patna, Bihar, India – 800001",
  workingHours: "Monday – Saturday: 09:30 AM – 06:30 PM IST",
} as const;

export const OPERATIONAL_PILLARS = [
  {
    title: "01. Custom Design",
    description:
      "STAAD.Pro & Tekla-aligned structural detailing tailored for regional wind loads (IS 875) & seismic zones.",
  },
  {
    title: "02. Mill-Certified Steel",
    description:
      "Sourced from prime integrated steel mills with full Mill Test Certificates (MTC) for yield strength & zinc coating.",
  },
  {
    title: "03. Turnkey Supply",
    description:
      "Single-window supply of primary frames, roof sheets, fasteners, flashings, and safety accessories.",
  },
] as const;

export const IS_STANDARDS = [
  {
    code: "IS 2062 : 2011",
    title: "Hot Rolled Structural Steel",
    description:
      "Grades E250 & E350 (Fe 410 / Fe 490) for PEB primary columns, rafters, crane girders, and heavy industrial fabrications.",
  },
  {
    code: "IS 14246 / IS 15965",
    title: "Pre-Painted & Bare Galvalume",
    description:
      "550 MPa high-yield steel substrate with AZ150 (150 GSM Al-Zn) coating and SMP/PVDF weather-resistant top coat.",
  },
  {
    code: "IS 4759 / IS 2629",
    title: "Hot-Dip Zinc Galvanising",
    description:
      "Minimum 550–610 GSM zinc coating for Highway W-Beam Crash Barriers, Solar Mount Structures, and Electro-Forged Gratings.",
  },
  {
    code: "IS 1161 / IS 4923",
    title: "ERW Pipes & Hollow Sections",
    description:
      "Precision-welded circular, square, and rectangular hollow sections (YST 210 / 240 / 310) for trusses, poles, and scaffolding.",
  },
] as const;

export const FOOTER_PEB_LINKS = [
  { productId: "peb", label: "Pre-Engineered Buildings (PEB)" },
  { productId: "sheds", label: "Industrial Sheds & Warehouses" },
  { productId: "roof-sheets", label: "Colour-Coated Roof Sheets" },
  { productId: "deck-sheets", label: "Composite Deck Sheets" },
  { productId: "shutter", label: "Galvanised Shutter Profiles" },
  { productId: "fasteners", label: "Self-Drilling Fasteners & Clamps" },
] as const;

export const FOOTER_INFRA_LINKS = [
  { productId: "crash-barriers", label: "Highway Crash Barriers" },
  { productId: "cable-trays", label: "Perforated Cable Trays" },
  { productId: "gratings", label: "Electro Forged Gratings" },
  { productId: "solar", label: "Solar Mount Structures" },
  { productId: "erw-pipes", label: "ERW Pipes & Sections" },
  { productId: "fabrications", label: "Heavy Metal Fabrications" },
] as const;
