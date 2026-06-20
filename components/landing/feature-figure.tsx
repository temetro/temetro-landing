import type { LucideIcon } from "lucide-react"

// A Polar-style hero visual: an abstract orbital figure (concentric rings with
// slowly orbiting nodes) behind the feature's icon. Dependency-free SVG + CSS
// animation — no three.js, no client hooks — so it matches the rest of the
// landing page and renders on the server. Respects prefers-reduced-motion.
export function FeatureFigure({ icon: Icon }: { icon: LucideIcon }) {
  const C = 200 // center
  const rings = [60, 108, 156]
  // [radius, angleDeg, durationSec, reverse]
  const orbits: [number, number, number, boolean][] = [
    [60, 20, 18, false],
    [108, 200, 30, true],
    [108, 70, 30, true],
    [156, 310, 44, false],
    [156, 150, 44, false],
  ]

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-card/30">
      {/* soft center glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="size-72 rounded-full bg-foreground/10 blur-3xl" />
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full text-foreground"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 400 400"
      >
        {/* static concentric rings */}
        {rings.map((r) => (
          <circle
            cx={C}
            cy={C}
            fill="none"
            key={r}
            opacity={0.18}
            r={r}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
        {/* faint radial guides */}
        {[0, 60, 120].map((a) => {
          const rad = (a * Math.PI) / 180
          return (
            <line
              key={a}
              opacity={0.07}
              stroke="currentColor"
              strokeWidth="1"
              x1={C - Math.cos(rad) * 156}
              x2={C + Math.cos(rad) * 156}
              y1={C - Math.sin(rad) * 156}
              y2={C + Math.sin(rad) * 156}
            />
          )
        })}
        {/* orbiting nodes — each group rotates around the center */}
        {orbits.map(([r, angle, dur, reverse], i) => {
          const rad = (angle * Math.PI) / 180
          const cx = C + Math.cos(rad) * r
          const cy = C + Math.sin(rad) * r
          return (
            <g
              key={i}
              className="animate-spin motion-reduce:animate-none"
              style={{
                // Rotate around the viewBox center (200,200), not the node's own
                // bounding box — otherwise the dot would spin in place.
                transformBox: "view-box",
                transformOrigin: "200px 200px",
                animationDuration: `${dur}s`,
                animationDirection: reverse ? "reverse" : "normal",
              }}
            >
              <circle cx={cx} cy={cy} fill="currentColor" opacity={0.9} r={i % 2 ? 3 : 4} />
            </g>
          )
        })}
      </svg>

      {/* the feature's icon at the heart of the system */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-16 items-center justify-center rounded-2xl border border-border bg-background text-foreground shadow-md ring-1 ring-foreground/5">
          <Icon className="size-7" />
        </div>
      </div>
    </div>
  )
}
