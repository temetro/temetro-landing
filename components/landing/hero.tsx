import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/landing/brand-icons"
import { ProductPreview } from "@/components/landing/product-preview"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft neutral glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center"
      >
        <div className="h-[420px] w-[820px] max-w-full rounded-full bg-foreground/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-center sm:pt-28">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="size-1.5 rounded-full bg-foreground" />
          Open source · Built for clinicians
        </a>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Patient information,
          <br className="hidden sm:block" /> one conversation away
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg">
          temetro is the open-source AI assistant for clinicians. Ask in plain language and get the
          right patient information back — grounded in your records, with every source cited.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button className="group" render={<Link href="/register" />} size="lg">
            Get started
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
            size="lg"
            variant="outline"
          >
            <GitHubIcon />
            Star on GitHub
          </Button>
        </div>
      </div>

      {/* A static mock of the real product (chat → patient record cards). */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <ProductPreview />
      </div>
    </section>
  )
}
