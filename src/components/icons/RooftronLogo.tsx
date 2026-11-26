import { useId } from "react";

export function RooftronLogo({ className = "w-full h-full" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const roofBlueGradId = `roofBlueGrad-${uid}`;
  const shieldSilverId = `shieldSilver-${uid}`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-label="Rooftron Infra Emblem"
    >
      <defs>
        <linearGradient id={roofBlueGradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A2240" />
          <stop offset="50%" stopColor="#124E96" />
          <stop offset="100%" stopColor="#0A2240" />
        </linearGradient>
        <linearGradient id={shieldSilverId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
      </defs>
      {/* Trapezoidal Corrugated Roof Profile */}
      <polygon
        points="60,8 10,36 16,42 60,18 104,42 110,36"
        fill={`url(#${roofBlueGradId})`}
      />
      <polygon
        points="60,14 20,36 25,40 60,21 95,40 100,36"
        fill="#1B66C2"
        opacity="0.7"
      />
      {/* Metallic Shield */}
      <path
        d="M28,36 L60,24 L92,36 L92,66 C92,88 60,106 60,106 C60,106 28,88 28,66 Z"
        fill="#FFFFFF"
        stroke={`url(#${shieldSilverId})`}
        strokeWidth="5"
      />
      {/* Geometric Navy 'R' */}
      <path
        d="M41,45 L67,45 C75,45 80,50 80,57 C80,64 75,68 67,68 L53,68 L53,82 L41,82 L41,56 L66,56 C68,56 69,55 69,53.5 C69,52 68,51 66,51 L46,51 Z"
        fill="#0A2240"
      />
      {/* Safety Orange Diagonal Leg of 'R' */}
      <polygon points="60,71 70,71 81,82 70,82" fill="#F97316" />
    </svg>
  );
}
