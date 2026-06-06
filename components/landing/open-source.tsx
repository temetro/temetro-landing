import { Badge } from "@/components/ui/badge"
import { AreaFigure, BarsFigure, DotMatrixFigure } from "@/components/landing/figures"

// The reference image's "open-source stats" band, reframed honestly for temetro:
// instead of vanity adoption metrics, the three monochrome figures illustrate the
// product's principles, each captioned like a technical figure (Fig 1/2/3).
const figures = [
  {
    n: "Fig 1.",
    title: "Grounded & cited",
    desc: "Every answer links back to the underlying record.",
    Figure: AreaFigure,
  },
  {
    n: "Fig 2.",
    title: "Patient-owned data",
    desc: "Records can live on the patient's own device, signed.",
    Figure: DotMatrixFigure,
  },
  {
    n: "Fig 3.",
    title: "Self-hosted & open",
    desc: "Run it entirely on your own infrastructure.",
    Figure: BarsFigure,
  },
]

const chips = [
  { k: "License", v: "MIT" },
  { k: "Deploy", v: "self-host / on-prem" },
  { k: "Answers", v: "always cited" },
]

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline">Open source</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Built in the open, runs on your terms
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          No black boxes and no data lock-in. temetro is engineered so you can read every line, run
          it yourself, and keep patient data where it belongs.
        </p>
      </div>

      {/* Terminal-style callout — honest framing, no invented numbers. */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-card/30 px-5 py-4">
        <p className="font-mono text-sm/6 text-muted-foreground">
          <span className="text-foreground">[*]</span> temetro is{" "}
          <span className="font-medium text-foreground">open source</span> and{" "}
          <span className="font-medium text-foreground">MIT-licensed</span>. Every answer is{" "}
          <span className="font-medium text-foreground">grounded</span> in your records and{" "}
          <span className="font-medium text-foreground">cited</span> to the source — and the whole
          thing is <span className="font-medium text-foreground">self-hostable</span>, so patient
          data never leaves your network.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {figures.map(({ n, title, desc, Figure }) => (
          <div
            key={n}
            className="flex flex-col rounded-2xl border border-border bg-card/30 p-5"
          >
            <div className="h-40 w-full">
              <Figure />
            </div>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {n} <span className="font-medium text-foreground">{title}</span>
            </p>
            <p className="mt-1 text-sm text-pretty text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <dl className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs">
        {chips.map((c) => (
          <div key={c.k} className="flex items-center gap-2">
            <dt className="text-muted-foreground">{c.k}:</dt>
            <dd className="font-medium text-foreground">{c.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
