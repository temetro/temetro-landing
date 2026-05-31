import {
  ArrowRight,
  FileCheck2,
  FileClock,
  GitFork,
  KeyRound,
  MessageSquare,
  Server,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

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
        <p className="text-sm font-medium text-primary">What is temetro?</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          An AI chat that knows your records
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          temetro sits on top of your existing patient data and turns it into a conversation. Built
          for the realities of clinical work — accurate, accountable, and private.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card p-6">
            <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-primary">
              <feature.icon className="size-5" />
            </div>
            <h3 className="mt-4 text-base font-medium">{feature.title}</h3>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a href="#" className={cn(buttonVariants({ variant: "outline" }), "group rounded-lg")}>
          Read the docs
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}
