type LogoVariant = 'dark' | 'light'

export function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: LogoVariant
  className?: string
}) {
  const ink = variant === 'light' ? '#f5f0e8' : '#1a2d4a'
  const muted = variant === 'light' ? '#f4a261' : '#e07b2d'

  return (
    <svg
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Barter Life"
      role="img"
    >
      <g className="manta-swim">
        <path
          d="M120 18c-8 0-14 6-14 14v6c-22 4-40 18-48 38-6 14-6 30 0 44 8 20 26 34 48 38v6c0 8 6 14 14 14s14-6 14-14v-6c22-4 40-18 48-38 6-14 6-30 0-44-8-20-26-34-48-38v-6c0-8-6-14-14-14z"
          fill={ink}
          opacity="0"
        />
        <path
          d="M120 28c-18 0-34 8-44 22-8 12-10 28-4 42 8 18 26 30 48 32v22c0 6 5 11 11 11s11-5 11-11V124c22-2 40-14 48-32 6-14 4-30-4-42-10-14-26-22-44-22zm0 18c12 0 22 6 28 16 4 7 5 16 2 24-5 12-16 20-30 22v-8c10-2 18-8 22-18 3-7 2-15-2-22-6-10-16-16-28-16-12 0-22 6-28 16-4 7-5 15-2 22 4 10 12 16 22 18v8c-14-2-25-10-30-22-3-8-2-17 2-24 6-10 16-16 28-16z"
          fill={ink}
        />
        <path d="M88 62c-6 8-8 18-5 28M152 62c6 8 8 18 5 28" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <path d="M96 74c-4 6-5 14-2 20M144 74c4 6 5 14 2 20" stroke={ink} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="108" cy="52" r="3" fill={ink} />
        <circle cx="132" cy="52" r="3" fill={ink} />
        <path d="M120 118 L120 148" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      </g>

      <text
        x="120"
        y="168"
        textAnchor="middle"
        fill={ink}
        style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: '18px', fontWeight: 600, letterSpacing: '0.12em' }}
      >
        THE BARTER LIFE
      </text>

      <path d="M40 182 H92 M148 182 H200" stroke={muted} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M92 182 L100 174 L108 186 L116 178 L124 182 L132 176 L140 182 L148 182" stroke={muted} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}
