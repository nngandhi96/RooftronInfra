import { useId } from "react";

export function HeroShowcaseGraphic({ showcaseId }: { showcaseId: string }) {
  const uid = useId().replace(/:/g, "");
  const gridId = `smallGrid-${uid}`;

  if (showcaseId === "roofing-showcase") {
    return (
      <svg
        viewBox="0 0 520 210"
        className="w-full h-48 bg-navy-950 border border-steel-300"
        role="img"
        aria-label="Colour-coated trapezoidal roof sheet cross-section diagram"
      >
        <rect width="520" height="210" fill="#061529" />
        {/* Cross-section Trapezoidal Roof Sheet Profile */}
        <polyline
          points="20,135 55,135 72,75 102,75 119,135 175,135 192,75 222,75 239,135 295,135 312,75 342,75 359,135 415,135 432,75 462,75 479,135 500,135"
          fill="none"
          stroke="#1B66C2"
          strokeWidth="6"
          strokeLinejoin="miter"
        />
        <polyline
          points="20,131 55,131 72,71 102,71 119,131 175,131 192,71 222,71 239,131 295,131 312,71 342,71 359,131 415,131 432,71 462,71 479,131 500,131"
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
        />
        {/* Pitch Callouts */}
        <line x1="87" y1="52" x2="207" y2="52" stroke="#94A3B8" strokeWidth="1" />
        <line x1="87" y1="47" x2="87" y2="66" stroke="#94A3B8" strokeWidth="1" />
        <line
          x1="207"
          y1="47"
          x2="207"
          y2="66"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <text
          x="147"
          y="46"
          fill="#F8FAFC"
          fontSize="10"
          fontFamily="monospace"
          textAnchor="middle"
        >
          RIB PITCH: 200 / 250 MM
        </text>
        <text
          x="260"
          y="172"
          fill="#94A3B8"
          fontSize="10"
          fontFamily="monospace"
          textAnchor="middle"
        >
          EFFECTIVE COVER WIDTH: 1000 MM | ANTI-CAPILLARY GROOVE
        </text>
      </svg>
    );
  }

  if (showcaseId === "infra-showcase") {
    return (
      <svg
        viewBox="0 0 520 210"
        className="w-full h-48 bg-navy-950 border border-steel-300"
        role="img"
        aria-label="MoRTH Highway W-Beam crash barrier cross-section diagram"
      >
        <rect width="520" height="210" fill="#061529" />
        {/* W-Beam Cross Section + C-Post */}
        <rect
          x="245"
          y="40"
          width="24"
          height="145"
          fill="#1E293B"
          stroke="#94A3B8"
          strokeWidth="1.5"
        />
        <path
          d="M195,55 L225,55 L235,75 L225,95 L235,115 L225,135 L195,135"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="5"
        />
        <rect x="226" y="82" width="20" height="26" fill="#F97316" />
        <text x="315" y="75" fill="#F8FAFC" fontSize="10" fontFamily="monospace">
          W-BEAM RAIL (312x83x3 MM)
        </text>
        <text x="315" y="98" fill="#F97316" fontSize="10" fontFamily="monospace">
          SPACER BLOCK (IS 5986)
        </text>
        <text x="315" y="121" fill="#94A3B8" fontSize="10" fontFamily="monospace">
          C-CHANNEL POST (150x75x5 MM)
        </text>
        <text
          x="260"
          y="196"
          fill="#94A3B8"
          fontSize="10"
          fontFamily="monospace"
          textAnchor="middle"
        >
          HOT-DIP GALVANISED TO IS 4759 (550 GSM MIN.)
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 520 210"
      className="w-full h-48 bg-navy-950 border border-steel-300"
      role="img"
      aria-label="Pre-Engineered Building portal frame elevation diagram"
    >
      <defs>
        <pattern
          id={gridId}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#1E3A5F"
            strokeWidth="0.6"
          />
        </pattern>
      </defs>
      <rect width="520" height="210" fill={`url(#${gridId})`} />
      {/* PEB Portal Frame Architectural Elevation */}
      <line
        x1="30"
        y1="180"
        x2="490"
        y2="180"
        stroke="#94A3B8"
        strokeWidth="2"
      />
      {/* Main Columns */}
      <rect
        x="70"
        y="75"
        width="10"
        height="105"
        fill="#124E96"
        stroke="#60A5FA"
        strokeWidth="1"
      />
      <rect
        x="440"
        y="75"
        width="10"
        height="105"
        fill="#124E96"
        stroke="#60A5FA"
        strokeWidth="1"
      />
      {/* Tapered Rafters */}
      <polygon
        points="70,75 260,30 260,42 80,84"
        fill="#1B66C2"
        stroke="#93C5FD"
        strokeWidth="1"
      />
      <polygon
        points="450,75 260,30 260,42 440,84"
        fill="#1B66C2"
        stroke="#93C5FD"
        strokeWidth="1"
      />
      {/* Ridge Cap Highlight */}
      <polygon points="245,28 260,23 275,28 260,32" fill="#F97316" />
      {/* Purlin Nodes */}
      <circle cx="130" cy="61" r="3" fill="#F97316" />
      <circle cx="195" cy="45" r="3" fill="#F97316" />
      <circle cx="325" cy="45" r="3" fill="#F97316" />
      <circle cx="390" cy="61" r="3" fill="#F97316" />
      {/* Dimension Lines */}
      <line
        x1="75"
        y1="194"
        x2="445"
        y2="194"
        stroke="#F97316"
        strokeWidth="1"
        strokeDasharray="4 2"
      />
      <text
        x="260"
        y="191"
        fill="#F8FAFC"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        CLEAR SPAN: 15M – 60M (CUSTOM ENGINEERED)
      </text>
      <text
        x="260"
        y="118"
        fill="#94A3B8"
        fontSize="10"
        fontFamily="monospace"
        textAnchor="middle"
      >
        TAPERED BUILT-UP I-SECTION PORTAL FRAME
      </text>
    </svg>
  );
}
