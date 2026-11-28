import type {
  CategoryFilter,
  HeroSlide,
  Product,
} from "@/types/product";

export const CATEGORY_FILTERS: readonly CategoryFilter[] = [
  { id: "all", label: "All Products (10)" },
  { id: "peb", label: "PEB & Structures" },
  { id: "roofing", label: "Roofing & Cladding" },
  { id: "insulation", label: "All Types Insulation" },
  { id: "infra", label: "Highway & Infra" },
  { id: "pipes", label: "Pipes, Coils & Solar" },
];

export const PRODUCTS: readonly Product[] = [
  {
    id: "roof-sheets",
    name: "Roof Sheets",
    category: "roofing",
    categoryLabel: "Roofing & Cladding",
    isCode: "IS 14246 / IS 15965",
    image: "/images/products/roof-sheets.jpg",
    summary:
      "Trapezoidal colour-coated PPGI & PPGL profile sheets with high corrosion and wind uplift resistance.",
    specs: [
      [
        "Base Metal Thickness",
        "0.40 mm to 0.80 mm TCT (550 MPa High Tensile)",
      ],
      ["Metallic Coating", "AZ150 (150 GSM Al-Zn) / Z120–Z275 Galvanised"],
      [
        "Effective Cover Width",
        "1000 mm / 1015 mm (Custom cut lengths up to 12 m)",
      ],
      [
        "Standard Colours",
        "Royal Blue, Brick Red, Caulfield Green, Off-White, Slate Grey",
      ],
    ],
    applications:
      "Industrial Shed Roofing, Wall Cladding, Canopy Structures, Residential & Institutional Roofs.",
  },
  {
    id: "sheds",
    name: "Industrial Shed",
    category: "peb",
    categoryLabel: "PEB & Structures",
    isCode: "IS 800 / IS 875",
    image: "/images/products/industrial-shed.jpg",
    summary:
      "Turnkey structural steel industrial sheds with ridge ventilation, skylights, and crane beam provisions.",
    specs: [
      ["Structure Type", "Portal Frame / Tubular Truss / Hybrid PEB"],
      ["Eave Height", "6 Meters to 18 Meters (with EOT Crane Brackets)"],
      [
        "Ventilation & Light",
        "Turbo Air Ventilators, Louvers & Polycarbonate Skylights",
      ],
      ["Anchor Bolts", "IS 5624 High-Strength Foundation Bolts"],
    ],
    applications:
      "MSME Workshops, Agro-Processing Units, Godowns, Automobile Service Bays.",
  },
  {
    id: "deck-sheets",
    name: "Deck Sheets",
    category: "roofing",
    categoryLabel: "Roofing & Cladding",
    isCode: "IS 277 / ASTM A653",
    summary:
      "Embossed galvanised composite steel floor decking sheets for high-load mezzanine and multi-storey slabs.",
    specs: [
      ["Thickness Range", "0.80 mm, 1.00 mm, 1.20 mm"],
      ["Rib Depth & Pitch", "51 mm / 75 mm Rib Depth with Shear Embossments"],
      [
        "Yield Strength",
        "240 MPa to 350 MPa Galvanised Steel (Z120–Z275)",
      ],
      ["Cover Width", "900 mm / 960 mm Effective Coverage"],
    ],
    applications:
      "Mezzanine Floors, Multi-Level Warehouses, Commercial Buildings, Bridge Decking.",
  },
  {
    id: "shutter",
    name: "Shutter Profiles",
    category: "roofing",
    categoryLabel: "Roofing & Cladding",
    isCode: "IS 277 / IS 6248",
    summary:
      "Precision roll-formed galvanised and colour-coated rolling shutter laths, guide channels, and bottom locks.",
    specs: [
      ["Strip Thickness", "0.70 mm to 1.25 mm Cold-Rolled Galvanised"],
      ["Profile Pitch", "75 mm / 80 mm / 100 mm Interlocking Lath"],
      [
        "Components",
        "Shutter Slats, Guide Channels, Bracket Plates & Spring Boxes",
      ],
      [
        "Operation Compatibility",
        "Manual Push-Pull, Gear Operated & Motorised Shutters",
      ],
    ],
    applications:
      "Industrial Warehouse Gates, Commercial Showrooms, Loading Bays, Garages.",
  },
  {
    id: "handrails",
    name: "Handrails & Ladders",
    category: "infra",
    categoryLabel: "Highway & Infra",
    isCode: "IS 800 / OSHA Compliant",
    summary:
      "Fabricated industrial tubular handrails, safety cage ladders, and modular access stairways.",
    specs: [
      [
        "Pipe Specification",
        "32 mm / 40 mm NB Heavy Duty Tubular Stanchions",
      ],
      ["Ladder Type", "Vertical Cage Ladders & Inclined Ship Ladders"],
      ["Base Plate", "150x150x10 mm Pre-Drilled Gusseted Base"],
      [
        "Surface Protection",
        "Hot-Dip Galvanised or Safety Yellow Epoxy Paint",
      ],
    ],
    applications:
      "Roof Access, Mezzanine Walkways, Conveyor Galleries, Water Treatment Plants.",
  },
  {
    id: "solar",
    name: "Solar Mount Structures",
    category: "pipes",
    categoryLabel: "Pipes, Coils & Solar",
    isCode: "IS 4759 / IS 875",
    summary:
      "Hot-dip galvanised & PosMAC module mounting structures for ground-mounted and rooftop solar plants.",
    specs: [
      [
        "Section Profiles",
        "Cold-Formed Lipped C, Z, Hat & Sigma Sections",
      ],
      ["Coating Standard", "Min. 80–100 Microns HDG (IS 4759) / ZM275"],
      ["Tilt Angle", "Fixed Tilt (5° to 30°) or Seasonal Tilt"],
      ["Wind Speed Rating", "Designed up to 180 km/hr Wind Zone"],
    ],
    applications:
      "Utility Solar Parks, Industrial PEB Rooftop Solar, Solar Carports.",
  },
  {
    id: "fasteners",
    name: "Fasteners And Clamps",
    category: "roofing",
    categoryLabel: "Roofing & Cladding",
    isCode: "AS 3566 / IS 1367",
    summary:
      "Self-drilling roofing screws (SDS), EPDM washers, standing-seam clips, and high-tensile structural bolts.",
    specs: [
      [
        "Roofing Screws",
        "Hex Head SDS #12 / #14 (25 mm to 150 mm) with EPDM Washer",
      ],
      [
        "Corrosion Rating",
        "Class 3 & Class 4 Ruspert / Zinc-Tin Salt Spray Tested",
      ],
      [
        "Structural Bolts",
        "Grade 8.8 & 10.9 High-Strength Friction Grip (HSFG) Bolts",
      ],
      [
        "Roof Accessories",
        "Ridge Caps, Corner Flashings, Gutters & Seam Clamps",
      ],
    ],
    applications:
      "Roof & Wall Sheet Fixing, PEB Primary Splice Connections, Solar Clamp Mounting.",
  },
  {
    id: "thermal-insulation",
    name: "Thermal Insulation",
    category: "insulation",
    categoryLabel: "All Types Insulation",
    isCode: "IS 8183 / ASTM C553",
    summary:
      "Rockwool, glasswool, PUF/PIR panels, and radiant XLPE/foil under-deck thermal insulation for PEB roofs and cold storages.",
    specs: [
      [
        "Insulation Media",
        "Rockwool / Glasswool Blankets, XLPE Foam, Bubble Foil & PUF Panels",
      ],
      ["Density & Thickness", "24–120 kg/m³ | Thickness: 12 mm to 150 mm"],
      [
        "Thermal Conductivity",
        "Low k-Value (0.022 – 0.038 W/m·K) with Aluminium Foil Facing",
      ],
      [
        "Fire & Moisture Rating",
        "Class A1 Non-Combustible (Mineral Wool) & Vapour Barrier",
      ],
    ],
    applications:
      "PEB Warehouse Under-Deck Roofing, Cold Storages, Cleanrooms, Industrial Ducting & HVAC.",
  },
  {
    id: "sound-insulation",
    name: "Acoustic Insulation",
    category: "insulation",
    categoryLabel: "All Types Insulation",
    isCode: "IS 8225 / ISO 354",
    summary:
      "High-NRC acoustic mineral wool slabs, perforated acoustic baffles, and noise-barrier wall liners for industrial plants.",
    specs: [
      [
        "Acoustic Performance",
        "NRC 0.85 – 1.00 | High Transmission Loss (STC 40–55 dB)",
      ],
      [
        "Core Materials",
        "High-Density Resin-Bonded Rockwool Slabs & Acoustic Foam",
      ],
      [
        "Facing & Protection",
        "Black Fibreglass Tissue (FGT), Perforated GI / Aluminium Liner",
      ],
      ["Density Options", "48 kg/m³, 64 kg/m³, 96 kg/m³ & 120 kg/m³"],
    ],
    applications:
      "DG Set Enclosures, Factory Acoustic Wall Lining, Compressor Rooms, Auditoriums & Studios.",
  },
  {
    id: "vibration-insulation",
    name: "Vibration Insulation",
    category: "insulation",
    categoryLabel: "All Types Insulation",
    isCode: "IS 3400 / DIN 53513",
    summary:
      "Heavy-duty elastomeric neoprene pads, spring-viscous mounts, and structural anti-vibration bearings for machinery and floors.",
    specs: [
      [
        "Isolation Systems",
        "Ribbed Neoprene / EPDM Pads, Spring Isolators & Inertia Bases",
      ],
      ["Load Capacity", "0.5 MPa to 7.0 MPa Heavy Industrial Static & Dynamic Loads"],
      [
        "Isolation Efficiency",
        "Up to 95–98% Structure-Borne Vibration & Shock Attenuation",
      ],
      [
        "Operating Temp & Spec",
        "-25°C to +110°C | Oil, Ozone & Weather Resistant Elastomer",
      ],
    ],
    applications:
      "Heavy CNC Presses, HVAC Chillers, Industrial Blowers, Floating Floors & Bridge Bearings.",
  },
];

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: "peb-erection",
    eyebrow: "Welcome To Rooftron Infra",
    headline: "Where Steel Meets Smart Engineering",
    subtitle:
      "Reliable Industrial Sheds, Roofing Systems & Structural Steel Solutions. Built to Perform.",
    image: "/images/hero/slide-1-peb-erection.jpg",
    imageAlt:
      "Crane hoisting structural steel I-beam onto a Pre-Engineered Steel Building frame at sunset",
    productId: "sheds",
    featuredLabel: "Industrial Shed",
  },
  {
    id: "infra-construction",
    eyebrow: "Welcome To Rooftron Infra",
    headline: "Precision-Built Steel for Modern Construction",
    subtitle:
      "Optimized for strength, speed, and long-term value across industrial plants, factories, and logistics parks.",
    image: "/images/hero/slide-2-infra-construction.jpg",
    imageAlt:
      "Heavy civil and structural steel construction site at sunset with tower crane and steel columns",
    productId: "handrails",
    featuredLabel: "Handrails & Ladders",
  },
  {
    id: "peb-engineers",
    eyebrow: "Welcome To Rooftron Infra",
    headline: "Strengthening Foundations with Every Beam",
    subtitle:
      "High-tensile AZ150 colour-coated roof cladding paired with composite floor deck sheets and thermal insulation.",
    image: "/images/hero/slide-3-peb-engineers.jpg",
    imageAlt:
      "Structural engineers reviewing blueprints in front of a multi-bay PEB steel portal frame",
    productId: "roof-sheets",
    featuredLabel: "Roof & Deck Sheets",
  },
  {
    id: "steel-welding",
    eyebrow: "Welcome To Rooftron Infra",
    headline: "Powering Progress Through Precision-Made Steel",
    subtitle:
      "Rooftron Infra supplies composite deck sheets, rolling shutter profiles, and thermal, acoustic, and vibration insulation.",
    image: "/images/hero/slide-4-steel-welding.jpg",
    imageAlt:
      "Industrial steel fabricator welding a heavy structural I-beam with bright sparks",
    productId: "deck-sheets",
    featuredLabel: "Deck Sheets",
  },
  {
    id: "erw-pipes",
    eyebrow: "Welcome To Rooftron Infra",
    headline: "Engineered for Endurance, Manufactured for Trust",
    subtitle:
      "Solar mount structures, high-tensile fasteners, and complete industrial roofing & insulation packages.",
    image: "/images/hero/slide-5-erw-pipes.jpg",
    imageAlt:
      "Stacked bundles of gleaming circular ERW and galvanised steel pipes inside a steel warehouse",
    productId: "solar",
    featuredLabel: "Solar Mount Structures",
  },
];
