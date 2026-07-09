"use client"

import { useState } from "react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// A Zen-browser-style showcase: a vertical list of selectable features on the
// left, and a large screenshot of the matching product page on the right that
// crossfades as you pick. Screenshots live in /public/showcase.
const items = [
  {
    key: "chat",
    title: "Ask in plain language",
    desc: "The home screen is a chat. Ask for a patient or a lab and get clean record cards back.",
    src: "/showcase/chat.png",
    alt: "temetro AI chat asking which patient to look up",
  },
  {
    key: "patients",
    title: "Every record, organized",
    desc: "History, medications, allergies, and labs laid out as tidy cards you can read at a glance.",
    src: "/showcase/patients.png",
    alt: "temetro patients list with names, file numbers, and status",
  },
  {
    key: "analytics",
    title: "Clinic insights at a glance",
    desc: "Visit volume, patient mix, and activity, computed live from your own clinic's data.",
    src: "/showcase/analytics.png",
    alt: "temetro analytics overview with a patient-visits chart",
  },
  {
    key: "appointments",
    title: "Scheduling in one place",
    desc: "Run the day's schedule and see what is coming up, right next to the chart.",
    src: "/showcase/appointments.png",
    alt: "temetro appointments and schedule for the day",
  },
] as const

export function ProductShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="showcase"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <Badge variant="info">A look inside</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          The whole clinic, in one calm workspace
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Pick a part of temetro to see it in action.
        </p>
      </div>

      <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-12">
        {/* Selectable feature list. Descriptions are always shown (uniform
            spacing); the active item gets the card highlight. */}
        <ul className="flex flex-col gap-2">
          {items.map((item, i) => {
            const selected = i === active
            return (
              <li key={item.key}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={selected}
                  className={cn(
                    "w-full cursor-pointer rounded-2xl border px-5 py-4 text-left transition-colors",
                    selected
                      ? "border-border bg-card/60"
                      : "border-transparent hover:bg-card/30",
                  )}
                >
                  <span
                    className={cn(
                      "text-base font-medium transition-colors",
                      selected ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm text-pretty text-muted-foreground">
                    {item.desc}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Screenshot panel. All images are rendered and eager-loaded, then
            cross-faded purely with opacity so switching is instant (no refetch). */}
        <div className="relative aspect-[2940/1410] w-full overflow-hidden rounded-2xl border border-border bg-card/30 shadow-2xl shadow-black/20">
          {items.map((item, i) => (
            <Image
              key={item.key}
              src={item.src}
              alt={item.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className={cn(
                "object-cover object-left-top transition-opacity duration-300 ease-out",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
