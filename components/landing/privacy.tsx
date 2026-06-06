import { Database, Lock, ScrollText, Server, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const points = [
  {
    icon: Lock,
    title: "PHI stays in your environment",
    desc: "Deploy inside your own network so protected health information never leaves your control.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-aligned by design",
    desc: "Access controls, encryption, and audit trails are built in, not bolted on.",
  },
  {
    icon: Server,
    title: "Self-host or on-prem",
    desc: "Run on your infrastructure or a private cloud. You choose where the data lives.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    desc: "Every interaction is recorded so you can answer who saw what, and when.",
  },
  {
    icon: Database,
    title: "Configurable retention",
    desc: "Set your own data-retention and logging policies to match your compliance needs.",
  },
]

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card/40 px-6 py-14 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-foreground/5 blur-3xl"
        />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Badge variant="outline">Privacy first</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Built for the most sensitive data there is
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Patient information demands more than a privacy policy. temetro is architected so that
              you stay in control of where data lives and who can reach it.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point.title} className="flex gap-3">
                <point.icon className="mt-0.5 size-5 shrink-0 text-foreground" />
                <div>
                  <h3 className="text-sm font-medium">{point.title}</h3>
                  <p className="mt-1 text-sm text-pretty text-muted-foreground">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
