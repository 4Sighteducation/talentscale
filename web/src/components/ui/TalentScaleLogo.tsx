interface TalentScaleLogoProps {
  size?: number
  className?: string
}

export function TalentScaleLogo({ size = 36, className }: TalentScaleLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 46"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Talent Scale logo"
    >
      <defs>
        <linearGradient id="tsGradMain" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="tsGradBar3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* Bar 1 — leftmost, shortest */}
      <circle cx="6" cy="30.5" r="3.5" fill="#a78bfa" opacity="0.28" />
      <rect x="3" y="34" width="6" height="10" rx="2" fill="#a78bfa" opacity="0.28" />

      {/* Bar 2 */}
      <circle cx="16" cy="24.5" r="3.8" fill="#8b5cf6" opacity="0.46" />
      <rect x="13" y="28" width="6" height="16" rx="2" fill="#8b5cf6" opacity="0.46" />

      {/* Bar 3 — tallest, most prominent */}
      <circle cx="26" cy="15" r="4.5" fill="url(#tsGradBar3)" />
      <rect x="23" y="19" width="6.5" height="25" rx="2.5" fill="url(#tsGradMain)" />

      {/* Bar 4 */}
      <circle cx="36" cy="20.5" r="3.8" fill="#c4b5fd" opacity="0.52" />
      <rect x="33" y="24" width="6" height="20" rx="2" fill="#c4b5fd" opacity="0.45" />

      {/* Bar 5 — rightmost */}
      <circle cx="46" cy="27.5" r="3.5" fill="#a78bfa" opacity="0.28" />
      <rect x="43" y="31" width="6" height="13" rx="2" fill="#a78bfa" opacity="0.28" />

      {/* Connecting arc */}
      <path
        d="M6,44 C6,38 46,38 46,44"
        stroke="url(#tsGradMain)"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}
