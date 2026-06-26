import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CtaBand } from "@/components/landing/cta"
import { FeatureFigure } from "@/components/landing/feature-figure"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import type { Feature } from "@/components/landing/feature-data"

export function FeaturePage({ feature }: { feature: Feature }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center"
          >
            <div className="h-[420px] w-[820px] max-w-full rounded-full bg-foreground/10 blur-[140px]" />
          </div>

          <div className="mx-auto max-w-3xl px-6 pt-24 pb-10 text-center sm:pt-32 sm:pb-12">
            <Badge variant="outline">{feature.badge}</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {feature.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
              {feature.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                className="group"
                nativeButton={false}
                render={<Link href="https://docs.temetro.com/docs" />}
                size="lg"
              >
                Get started
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="https://docs.temetro.com" />}
                size="lg"
                variant="outline"
              >
                Read the docs
              </Button>
            </div>
          </div>

          {/* Polar-style hero visual */}
          <div className="mx-auto max-w-4xl px-6 pb-16 sm:pb-20">
            <FeatureFigure icon={feature.icon} />
          </div>
        </section>

        {/* Alternating content sections */}
        <section className="mx-auto max-w-3xl px-6 pb-20 sm:pb-28">
          <div className="flex flex-col gap-16">
            {feature.sections.map((section, i) => (
              <div key={section.title}>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-pretty text-muted-foreground">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                        <span className="text-pretty text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
