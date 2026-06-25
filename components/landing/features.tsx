import {
  ArrowRight,
  CalendarClock,
  MessageSquare,
  Pill,
  ShieldCheck,
  StickyNote,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

// Focused on what a clinic actually does day to day. The "open source" and
// "self-hostable" story lives one section up, so it is not repeated here; the
// single privacy card folds in the points that used to be their own section.
const features = [
  {
    icon: Users,
    title: "Patient records",
    desc: "Pull up, create, and edit a patient's history, medications, and labs, all laid out as clean record cards.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & appointments",
    desc: "Book visits, run the day's schedule, and see what is coming up, right next to the patient's chart.",
  },
  {
    icon: Pill,
    title: "Prescriptions & pharmacy",
    desc: "Prescribe, work the dispensing queue, and watch stock levels without leaving the record.",
  },
  {
    icon: StickyNote,
    title: "Notes & tasks",
    desc: "Keep clinical notes and a shared care-team to-do list in step with everything else the clinic is doing.",
  },
  {
    icon: MessageSquare,
    title: "Ask in plain language",
    desc: "A built-in, model-agnostic AI chat that finds what you need across the record. Just ask.",
  },
  {
    icon: ShieldCheck,
    title: "Private by architecture",
    desc: "PHI stays inside your own network, and per-clinic roles gate who can see and change each record.",
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
          One workspace for the whole clinic. Records, scheduling, prescriptions, notes,
          and tasks sit together, so your team stops jumping between disconnected tools.
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
          render={<a href="https://docs.temetro.com" />}
          variant="outline"
        >
          Read the docs
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </section>
  )
}
