import type { ReactNode } from "react";

const ICON_MAP: Record<string, ReactNode> = {
  peb: (
    <path d="M4 42h40M8 42V18l16-10 16 10v24M16 42V26h16v16M8 18h32M24 8v10" />
  ),
  "roof-sheets": (
    <path d="M4 32l6-12h6l6 12h6l6-12h6l4 8M4 38l6-12h6l6 12h6l6-12h6l4 8" />
  ),
  sheds: (
    <path d="M4 40h40M6 40V20l18-11 18 11v20M12 40V28h10v12M28 24h8v8h-8z" />
  ),
  "deck-sheets": (
    <path d="M4 22h40M4 30h6l3-6h6l3 6h6l3-6h6l3 6h4M4 36h40" />
  ),
  "cable-trays": (
    <path d="M8 14v20h32V14M8 28h32M14 28v6M21 28v6M28 28v6M34 28v6" />
  ),
  gratings: (
    <>
      <rect x="6" y="10" width="36" height="28" />
      <path d="M14 10v28M22 10v28M30 10v28M38 10v28M6 19h36M6 29h36" />
    </>
  ),
  "crash-barriers": (
    <path d="M4 16h40v12H4zM4 22h40M12 28v12M36 28v12" />
  ),
  "erw-pipes": (
    <>
      <ellipse cx="14" cy="24" rx="6" ry="12" />
      <path d="M14 12h20c3.3 0 6 5.4 6 12s-2.7 12-6 12H14" />
    </>
  ),
  scaffolding: (
    <path d="M12 8v34M36 8v34M12 14h24M12 24h24M12 34h24M12 14l24 10M36 24L12 34" />
  ),
  shutter: (
    <>
      <rect x="8" y="8" width="32" height="32" />
      <path d="M8 14h32M8 20h32M8 26h32M8 32h32" />
    </>
  ),
  handrails: (
    <path d="M14 8v34M34 8v34M14 14h20M14 21h20M14 28h20M14 35h20" />
  ),
  solar: (
    <>
      <polygon points="8,26 26,12 42,18 24,32" />
      <path d="M17 19l16 6M14 29v11M30 27v13M8 40h32" />
    </>
  ),
  "hot-rolled": <path d="M10 10h28v6H27v16h11v6H10v-6h11V16H10z" />,
  fabrications: <path d="M8 36L24 12l16 24H8zM16 36l8-12 8 12M24 12v24" />,
  galvanised: (
    <>
      <circle cx="16" cy="24" r="10" />
      <circle cx="16" cy="24" r="4" />
      <path d="M16 14h18a10 10 0 010 20H16" />
    </>
  ),
  fasteners: (
    <>
      <polygon points="24,6 34,12 34,20 24,26 14,20 14,12" />
      <path d="M20 24v16h8V24M20 29h8M20 34h8" />
    </>
  ),
  "thermal-insulation": (
    <>
      <rect x="6" y="10" width="36" height="28" />
      <path d="M12 16c2 3-2 5 0 8s-2 5 0 8M24 16c2 3-2 5 0 8s-2 5 0 8M36 16c2 3-2 5 0 8s-2 5 0 8" />
    </>
  ),
  "sound-insulation": (
    <>
      <path d="M10 18h8l10-8v28l-10-8h-8z" />
      <path d="M34 18a8 8 0 010 12M38 14a14 14 0 010 20" />
    </>
  ),
  "vibration-insulation": (
    <>
      <path d="M8 12h32M8 36h32" />
      <path d="M14 16l20 4-20 4 20 4-20 4 20 4" />
    </>
  ),
};

export function ProductIcon({
  productId,
  className = "w-9 h-9",
}: {
  productId: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden="true"
    >
      {ICON_MAP[productId] ?? null}
    </svg>
  );
}
