import { cn } from "@/lib/utils"

// Dependency-free, monochrome SVG "figures" for the open-source band (the
// reference image's Fig 1/2/3 look). All decorative (aria-hidden), all driven
// by `currentColor` so they pick up whatever text color the wrapper sets, with no
// chart library, no client hooks, so these render on the server. Math adapted
// from the frontend's components/chat/sparkline.tsx.

// Deterministic pseudo-noise in [0, 1) so the "random" textures are stable
// across renders (no hydration drift) without seeding state.
function noise(n: number) {
  const x = Math.sin(n * 12.9898) * 43_758.5453
  return x - Math.floor(x)
}

// Shared frame for the purpose-built figures below: a square-ish illustration
// drawn in line-art that sits centered in its caption card.
function FigureFrame({
  children,
  className,
  viewBox = "0 0 200 140",
}: {
  children: React.ReactNode
  className?: string
  viewBox?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full text-foreground", className)}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox={viewBox}
    >
      {children}
    </svg>
  )
}

// "Your records, organized": a stack of clean record cards with a header row
// (avatar + lines) and list rows beneath, the way a chart reads in temetro.
export function RecordsFigure({ className }: { className?: string }) {
  return (
    <FigureFrame className={className}>
      {/* back cards, offset for depth */}
      <rect x="44" y="20" width="120" height="96" rx="10" opacity="0.25" strokeWidth="1.5" />
      <rect x="38" y="26" width="120" height="96" rx="10" opacity="0.45" strokeWidth="1.5" />
      {/* front card */}
      <rect x="32" y="32" width="120" height="80" rx="10" strokeWidth="1.75" />
      {/* avatar + header lines */}
      <circle cx="50" cy="50" r="7" strokeWidth="1.5" />
      <line x1="64" y1="46" x2="132" y2="46" strokeWidth="1.5" />
      <line x1="64" y1="54" x2="116" y2="54" strokeWidth="1.5" opacity="0.6" />
      {/* list rows */}
      <line x1="44" y1="72" x2="140" y2="72" strokeWidth="1.5" opacity="0.55" />
      <line x1="44" y1="84" x2="140" y2="84" strokeWidth="1.5" opacity="0.4" />
      <line x1="44" y1="96" x2="118" y2="96" strokeWidth="1.5" opacity="0.4" />
    </FigureFrame>
  )
}

// "Patient-owned data": a phone (the patient's device) holding a key, so the
// record and the key to it live with the patient.
export function DeviceKeyFigure({ className }: { className?: string }) {
  return (
    <FigureFrame className={className}>
      {/* phone body */}
      <rect x="66" y="20" width="68" height="100" rx="12" strokeWidth="1.75" />
      {/* speaker + home indicator */}
      <line x1="92" y1="29" x2="108" y2="29" strokeWidth="1.5" opacity="0.6" />
      <line x1="90" y1="111" x2="110" y2="111" strokeWidth="1.5" opacity="0.6" />
      {/* key: ring + shaft + teeth, centered on the screen */}
      <circle cx="89" cy="62" r="9" strokeWidth="1.75" />
      <line x1="96" y1="69" x2="116" y2="89" strokeWidth="1.75" />
      <line x1="110" y1="83" x2="116" y2="77" strokeWidth="1.75" />
      <line x1="116" y1="89" x2="121" y2="84" strokeWidth="1.75" />
    </FigureFrame>
  )
}

// "Self-hosted & open": a stack of servers under an open padlock, so it runs on
// your own machines, and the source is open.
export function SelfHostFigure({ className }: { className?: string }) {
  return (
    <FigureFrame className={className}>
      {/* open padlock */}
      <rect x="84" y="40" width="32" height="24" rx="5" strokeWidth="1.75" />
      <path d="M90 40 v-6 a10 10 0 0 1 20 0" strokeWidth="1.75" opacity="0.85" />
      <circle cx="100" cy="51" r="2.4" fill="currentColor" stroke="none" />
      {/* server stack */}
      <rect x="60" y="74" width="80" height="18" rx="5" strokeWidth="1.6" />
      <rect x="60" y="96" width="80" height="18" rx="5" strokeWidth="1.6" opacity="0.7" />
      <circle cx="71" cy="83" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="71" cy="105" r="2.2" fill="currentColor" stroke="none" opacity="0.7" />
      <line x1="82" y1="83" x2="128" y2="83" strokeWidth="1.5" opacity="0.5" />
      <line x1="82" y1="105" x2="128" y2="105" strokeWidth="1.5" opacity="0.35" />
    </FigureFrame>
  )
}

// Wallet app centerpiece: a detailed line-art phone showing the wallet number,
// a clinic approval request, and an on-device lock. Same line-art family as the
// Open Source figures (server-rendered, currentColor, no deps). Portrait frame.
export function WalletPhoneFigure({ className }: { className?: string }) {
  return (
    <FigureFrame className={className} viewBox="0 0 160 220">
      {/* device body */}
      <rect x="34" y="10" width="92" height="200" rx="18" strokeWidth="1.75" />
      {/* speaker */}
      <line x1="68" y1="22" x2="92" y2="22" strokeWidth="1.5" opacity="0.6" />
      {/* app header: logo dot + title bar */}
      <circle cx="50" cy="40" r="3" strokeWidth="1.4" />
      <line x1="58" y1="40" x2="92" y2="40" strokeWidth="1.5" />
      {/* wallet-number card */}
      <rect x="46" y="54" width="68" height="40" rx="7" strokeWidth="1.6" />
      <line x1="54" y1="66" x2="84" y2="66" strokeWidth="1.4" opacity="0.55" />
      <line x1="54" y1="78" x2="106" y2="78" strokeWidth="1.5" />
      {/* small key glyph in the card corner */}
      <circle cx="98" cy="65" r="3.4" strokeWidth="1.4" />
      <line x1="100.4" y1="67.4" x2="106" y2="73" strokeWidth="1.4" />
      <line x1="103" y1="76" x2="106" y2="73" strokeWidth="1.4" />
      {/* approval request row (approved: check in circle) */}
      <circle cx="56" cy="116" r="7" strokeWidth="1.6" />
      <path d="M52.5 116 l2.5 2.5 l4.5 -5" strokeWidth="1.6" />
      <line x1="70" y1="113" x2="110" y2="113" strokeWidth="1.5" />
      <line x1="70" y1="121" x2="98" y2="121" strokeWidth="1.4" opacity="0.5" />
      {/* pending row */}
      <circle cx="56" cy="142" r="7" strokeWidth="1.6" opacity="0.7" />
      <line x1="70" y1="139" x2="106" y2="139" strokeWidth="1.5" opacity="0.7" />
      <line x1="70" y1="147" x2="92" y2="147" strokeWidth="1.4" opacity="0.4" />
      {/* on-device padlock */}
      <rect x="68" y="170" width="24" height="18" rx="4" strokeWidth="1.6" />
      <path d="M73 170 v-4 a7 7 0 0 1 14 0" strokeWidth="1.6" opacity="0.85" />
      <circle cx="80" cy="179" r="1.8" fill="currentColor" stroke="none" />
      {/* home indicator */}
      <line x1="68" y1="200" x2="92" y2="200" strokeWidth="1.5" opacity="0.6" />
    </FigureFrame>
  )
}

// Fig 1: a rising growth curve with a fine vertical-hatch fill beneath it.
export function AreaFigure({ className }: { className?: string }) {
  const W = 320
  const H = 140
  const padTop = 12
  const padBottom = 6
  // A smooth S-shaped cumulative curve.
  const pts = [
    4, 5, 6, 8, 10, 13, 17, 22, 28, 35, 43, 52, 61, 69, 76, 82, 87, 91, 94, 96,
    98, 99,
  ]
  const min = Math.min(...pts)
  const max = Math.max(...pts)
  const range = max - min || 1
  const coords = pts.map((v, i) => {
    const x = (i / (pts.length - 1)) * W
    const y = H - padBottom - ((v - min) / range) * (H - padTop - padBottom)
    return [x, y] as const
  })
  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ")
  const area = `${line} L${W},${H} L0,${H} Z`

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full text-foreground", className)}
      preserveAspectRatio="none"
      viewBox={`0 0 ${W} ${H}`}
    >
      <defs>
        <pattern
          height={H}
          id="fig-area-hatch"
          patternUnits="userSpaceOnUse"
          width="4"
        >
          <line
            opacity="0.28"
            stroke="currentColor"
            strokeWidth="0.6"
            x1="0"
            x2="0"
            y1="0"
            y2={H}
          />
        </pattern>
      </defs>
      {/* hatched fill, clipped to the area under the curve */}
      <path d={area} fill="url(#fig-area-hatch)" stroke="none" />
      {/* the curve itself */}
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

// Fig 2: a grid of dots at varying opacity (the "contributors" matrix look).
export function DotMatrixFigure({ className }: { className?: string }) {
  const cols = 20
  const rows = 9
  const step = 14
  const W = cols * step
  const H = rows * step
  const dots: { cx: number; cy: number; o: number }[] = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        cx: c * step + step / 2,
        cy: r * step + step / 2,
        o: 0.1 + noise(c * 31.7 + r * 7.3) * 0.78,
      })
    }
  }

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full text-foreground", className)}
      preserveAspectRatio="xMidYMid meet"
      viewBox={`0 0 ${W} ${H}`}
    >
      {dots.map((d, i) => (
        <circle
          cx={d.cx}
          cy={d.cy}
          fill="currentColor"
          key={i}
          opacity={d.o.toFixed(2)}
          r="2.4"
        />
      ))}
    </svg>
  )
}

// Fig 3: a noisy bar histogram.
export function BarsFigure({ className }: { className?: string }) {
  const n = 44
  const W = 320
  const H = 140
  const step = W / n
  const bw = step * 0.5
  const bars = Array.from({ length: n }, (_, i) => {
    const h = (0.16 + noise(i * 1.73 + 3.1) * 0.84) * (H - 6)
    return { x: i * step + (step - bw) / 2, h, o: 0.4 + (h / H) * 0.5 }
  })

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full text-foreground", className)}
      preserveAspectRatio="none"
      viewBox={`0 0 ${W} ${H}`}
    >
      {bars.map((b, i) => (
        <rect
          fill="currentColor"
          height={b.h.toFixed(1)}
          key={i}
          opacity={b.o.toFixed(2)}
          width={bw.toFixed(2)}
          x={b.x.toFixed(2)}
          y={(H - b.h).toFixed(1)}
        />
      ))}
    </svg>
  )
}
