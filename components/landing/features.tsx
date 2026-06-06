import {
  ArrowRight,
  FileCheck2,
  FileClock,
  GitFork,
  KeyRound,
  MessageSquare,
  Server,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: MessageSquare,
    title: "Natural-language lookup",
    desc: "Ask for a patient's history, labs, or medications in plain English — no query syntax, no clicking through tabs.",
  },
  {
    icon: FileCheck2,
    title: "Grounded, cited answers",
    desc: "Every response links back to the underlying record, so you can verify the source in one click.",
  },
  {
    icon: KeyRound,
    title: "Role-based access",
    desc: "Clinicians only ever see the patients and fields they're authorized to access.",
  },
  {
    icon: Server,
    title: "Self-hostable",
    desc: "Run temetro entirely on your own infrastructure. Patient data never has to leave your network.",
  },
  {
    icon: GitFork,
    title: "Open source",
    desc: "Audit every line, extend it to your workflow, and contribute back. No black boxes.",
  },
  {
    icon: FileClock,
    title: "Audit logging",
    desc: "Every query and answer is logged with full context for compliance and review.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="outline">What is temetro?</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          An AI chat that knows your records
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          temetro sits on top of your existing patient data and turns it into a conversation. Built
          for the realities of clinical work — accurate, accountable, and private.
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
