import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GitHubIcon } from "@/components/landing/brand-icons"

export function CtaBand() {
  return (
    <section className="relative px-6 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-64 w-[640px] max-w-full rounded-full bg-foreground/10 blur-[120px]" />
      </div>
      <Card className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Bring your records into the conversation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Open source, self-hostable, and built for the most sensitive data there is. Get started in
          minutes.
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
      </Card>
    </section>
  )
}
