import {
  ArrowRight,
  CalendarClock,
  GitFork,
  KeyRound,
  MessageSquare,
  Server,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Patient records",
    desc: "Pull up, create, and edit a patient's history, medications, and labs — organized into clean record cards.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    desc: "Owner, admin, member, and viewer roles per clinic, so your team only ever sees what it should.",
  },
  {
    icon: CalendarClock,
    title: "Your clinic in one place",
    desc: "Scheduling, prescriptions, notes, and tasks live alongside the record — not scattered across tools.",
  },
  {
    icon: MessageSquare,
    title: "Ask in plain language",
    desc: "A conversational way to find what you need across the record. The AI chat is in active development.",
  },
  {
    icon: Server,
    title: "Self-hostable",
    desc: "Run temetro on your own infrastructure with Docker and Postgres. Patient data stays on your network.",
  },
  {
    icon: GitFork,
    title: "Open source",
    desc: "Audit every line, extend it to your workflow, and contribute back. No black boxes.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline">What is temetro?</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Everything around the patient record
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          temetro brings the day-to-day of clinical work — records, scheduling, prescriptions, notes,
          and tasks — into one open-source workspace your whole team can use.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card className="gap-0" key={feature.title} size="sm">
            <CardContent className="flex flex-col gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                <feature.icon className="size-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.desc}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          className="group"
          nativeButton={false}
          render={<a href="#" />}
          variant="outline"
        >
          Read the docs
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </section>
  )
}
