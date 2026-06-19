export function WaveDivider({
  flip = false,
  fill = 'cream',
}: {
  flip?: boolean
  fill?: 'cream' | 'navy' | 'cream-dark'
}) {
  const fillClass = {
    cream: 'fill-cream',
    navy: 'fill-navy',
    'cream-dark': 'fill-cream-dark',
  }[fill]

  return (
    <div className={`wave-divider leading-none ${flip ? 'rotate-180' : ''}`} aria-hidden>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className={`h-10 w-full sm:h-14 ${fillClass}`}
      >
        <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z" />
      </svg>
    </div>
  )
}
