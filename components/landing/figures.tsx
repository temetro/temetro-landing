import { cn } from "@/lib/utils"

// Dependency-free, monochrome SVG "figures" for the open-source band (the
// reference image's Fig 1/2/3 look) and a small sparkline reused by the hero
// product preview. All decorative (aria-hidden), all driven by `currentColor`
// so they pick up whatever text color the wrapper sets — no chart library, no
// client hooks, so these render on the server. Math adapted from the frontend's
// components/chat/sparkline.tsx.

// Deterministic pseudo-noise in [0, 1) so the "random" textures are stable
// across renders (no hydration drift) without seeding state.
function noise(n: number) {
  const x = Math.sin(n * 12.9898) * 43_758.5453
  return x - Math.floor(x)
}

// Fig 1 — a rising growth curve with a fine vertical-hatch fill beneath it.
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

// Fig 2 — a grid of dots at varying opacity (the "contributors" matrix look).
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

// Fig 3 — a noisy bar histogram.
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

// A small, non-interactive area sparkline for the hero labs card. Stretches to
// its container; colored via currentColor (defaults to text-foreground).
export function MiniSparkline({
  points,
  className,
}: {
  points: number[]
  className?: string
}) {
  if (points.length === 0) return null
  const W = 100
  const top = 3
  const bottom = 30
  const H = 32
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const coords = points.map((v, i) => {
    const x = points.length === 1 ? W / 2 : (i / (points.length - 1)) * W
    const y = bottom - ((v - min) / range) * (bottom - top)
    return [x, y] as const
  })
  const line = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
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
        <linearGradient id="fig-mini-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#fig-mini-grad)" stroke="none" />
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
