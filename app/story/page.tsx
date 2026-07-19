import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/landing/site-header"
import { SiteFooter } from "@/components/landing/site-footer"
import { JsonLd, breadcrumbList } from "@/components/landing/json-ld"

const siteUrl = "https://www.temetro.com"

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Why temetro exists: a clinician's view from Djibouti, where everyday hospital software lags decades behind modern practice, and a bet that open, patient-owned tools can change that across Africa.",
  alternates: { canonical: "/story" },
}

// A short, plain-spoken origin story. No em-dashes anywhere in the copy.
const principles = [
  {
    title: "Open source",
    body: "Every line is readable. Any clinic, anywhere, can run it, audit it, and shape it to how they actually work.",
  },
  {
    title: "Self-hostable",
    body: "Run it on a single machine in the clinic or in a private cloud. Patient data stays inside your own network.",
  },
  {
    title: "Patient-owned data",
    body: "The model we are building toward keeps a patient's record on their own device, where changes need their approval.",
  },
  {
    title: "Role-based access",
    body: "Owner, clinician, reception, pharmacy, and lab each see only what their job needs. Nothing more.",
  },
]

export default function StoryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: siteUrl },
          { name: "Our story", url: `${siteUrl}/story` },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <header className="text-center">
            <Badge variant="info">Our story</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Built in Djibouti, for clinics everywhere
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground sm:text-lg">
              temetro started with a simple, frustrating observation about the software
              that runs everyday healthcare.
            </p>
          </header>

          <div className="mt-14 space-y-12">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                The problem in front of me
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                I live in Djibouti. Spend any time around the hospitals and clinics here
                and you notice the same thing again and again: the systems that hold
                patient information are years, sometimes decades, behind modern practice.
                Records live in paper files or in brittle, locked-down programs that no
                one can extend. Information is hard to find when it matters, easy to lose,
                and almost impossible to move from one place to another. Clinicians spend
                their energy fighting the tools instead of caring for patients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                It is not just here
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                The more I looked, the clearer it became that this is not a Djibouti
                problem. Across many countries in Africa, clinics are asked to choose
                between expensive systems built for somewhere else and no real system at
                all. Patient data ends up trapped inside a vendor, scattered across
                tools, or simply on paper. When software does exist, it rarely respects
                the people whose data it holds. That gap is exactly where a different
                kind of tool can help.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                What temetro is
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                temetro is an open-source workspace for patient care. It brings records,
                scheduling, prescriptions, notes, and tasks into one place, with a
                built-in AI chat that lets you ask for what you need in plain language and
                get clean record cards back. It is designed to run on your own
                infrastructure, so a clinic keeps control of its data instead of handing
                it to someone else. And it is built toward a future where the record can
                belong to the patient: stored on their own device, changed only with
                their approval.
              </p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {principles.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-2xl border border-border bg-card/30 p-5"
                  >
                    <h3 className="text-sm font-medium">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-pretty text-muted-foreground">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Where we are</h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                The platform is in beta and openly in development. The workspace is real
                and you can run it today, while parts of the vision are still being built
                in the open, including the patient-owned wallet app, a separate companion
                still in early alpha. If any of this sounds like a problem you know, we
                would love your help.
              </p>
            </section>
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              render={
                <a
                  href="https://github.com/temetro/temetro"
                  target="_blank"
                  rel="noreferrer"
                />
              }
              size="lg"
              variant="outline"
            >
              See the code
            </Button>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
