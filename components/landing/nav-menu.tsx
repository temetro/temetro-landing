"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { features } from "@/components/landing/feature-data"
import { cn } from "@/lib/utils"

const triggerClass =
  "inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"

const resources = [
  { label: "Docs", desc: "Guides and API reference", href: "https://docs.temetro.com" },
  { label: "Roadmap", desc: "Where temetro is headed", href: "https://docs.temetro.com/docs/roadmap" },
  { label: "Changelog", desc: "What's new, newest first", href: "https://docs.temetro.com/docs/changelog" },
  { label: "GitHub", desc: "Star, fork, and contribute", href: "https://github.com/temetro/temetro" },
]

// Hover-activated mega-dropdown for the "Features" nav item.
export function FeaturesMenu() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<button className={triggerClass} type="button" />}>
        Features
        <ChevronDown className="size-3.5" />
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-[560px] p-2">
        <div className="grid grid-cols-2 gap-1">
          {features.map((feature) => (
            <Link
              key={feature.slug}
              href={`/features/${feature.slug}`}
              className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-accent"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                <feature.icon className="size-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-foreground">
                  {feature.navTitle}
                </div>
                <div className="text-xs text-muted-foreground">{feature.navDesc}</div>
              </div>
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

// Hover-activated dropdown for "Resources".
export function ResourcesMenu({ className }: { className?: string }) {
  return (
    <HoverCard>
      <HoverCardTrigger
        render={<button className={cn(triggerClass, className)} type="button" />}
      >
        Resources
        <ChevronDown className="size-3.5" />
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-64 p-2">
        <div className="flex flex-col gap-0.5">
          {resources.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-2xl p-3 transition-colors hover:bg-accent"
            >
              <span className="text-sm font-medium text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </a>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
