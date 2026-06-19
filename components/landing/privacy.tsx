import { Eye, KeyRound, Lock, Server } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const points = [
  {
    icon: Server,
    title: "Self-host or on-prem",
    desc: "Run on your own infrastructure or a private cloud with Docker and Postgres. You choose where data lives.",
  },
  {
    icon: Lock,
    title: "PHI stays in your network",
    desc: "Because you deploy temetro, protected health information never has to leave your environment.",
  },
  {
    icon: KeyRound,
    title: "Role-based access control",
    desc: "Owner, admin, clinician, reception, pharmacy, and lab roles per clinic gate who can see and change records.",
  },
  {
    icon: Eye,
    title: "Open and auditable",
    desc: "The full source is open, so you can review exactly how data is handled — no black boxes.",
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
              Patient information demands real control, not just a privacy policy. temetro is
              architected so you decide where data lives and who can reach it.
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
