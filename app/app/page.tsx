import type { Metadata } from "next"
import { BadgeCheck, KeyRound, ShieldCheck, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AndroidIcon, AppleIcon } from "@/components/landing/brand-icons"
import { CtaBand } from "@/components/landing/cta"
import { WalletPhoneFigure } from "@/components/landing/figures"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { JsonLd, breadcrumbList } from "@/components/landing/json-ld"

const siteUrl = "https://www.temetro.com"

export const metadata: Metadata = {
  // Bare title: the layout template appends "· temetro" (avoids the old double
  // suffix from hardcoding it here).
  title: "Patient app",
  description:
    "The temetro wallet is a patient companion app for iPhone and Android, coming soon. It keeps a patient's record on their own device, sealed with a key only they hold.",
  alternates: { canonical: "/app" },
}

// The four things the wallet app does, kept in step with the copy on the home
// page's wallet section (components/landing/wallet-app.tsx).
const points = [
  {
    icon: KeyRound,
    title: "Patient-owned data",
    body: "The record lives on the patient's own phone. Their wallet number, a tmw_… address derived from an Ed25519 keypair, is a key only they hold. No account, no password, no middleman.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted on the device",
    body: "The record never leaves the phone in the clear. The Temetro Network relay only ever forwards sealed ciphertext, so nothing readable passes through our servers.",
  },
  {
    icon: BadgeCheck,
    title: "Approve changes before they apply",
    body: "Every update a clinic makes is sealed to the patient and waits for their approval on the phone before it counts. Nothing is written behind their back.",
  },
  {
    icon: Timer,
    title: "Share in a single tap",
    body: "Share a record for one visit, then let it auto-delete. It is off-chain by design, so a temporary share can truly be removed once the visit is over.",
  },
]

export default function AppPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", url: siteUrl },
          { name: "Patient app", url: `${siteUrl}/app` },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
          <header className="text-center">
            <Badge variant="info">Companion app · Coming soon</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Your record, in your pocket
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground sm:text-lg">
              The temetro wallet is a patient companion app for iPhone and Android,
              coming soon. It keeps your health record on your own device, sealed with a
              key that only you hold, so you decide what a clinic can see and change.
            </p>
          </header>

          {/* Phone figure with the two platforms it is coming to. */}
          <div className="mt-14 flex flex-col items-center gap-10">
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="pointer-events-none absolute size-72 rounded-full bg-foreground/5 blur-3xl"
              />
              <div className="h-72 w-full max-w-[15rem] text-foreground">
                <WalletPhoneFigure />
              </div>
            </div>

            {/* Platform logos, marked coming soon. */}
            <div className="flex items-center justify-center gap-12">
              {[
                { Icon: AppleIcon, label: "iOS" },
                { Icon: AndroidIcon, label: "Android" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card/40 text-foreground">
                    <Icon className="size-7" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{label}</span>
                  <span className="text-xs text-muted-foreground">Coming soon</span>
                </div>
              ))}
            </div>

            {/* Disabled coming-soon store badges. */}
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button
                aria-label="App Store, coming soon"
                className="h-auto gap-3 px-5 py-3"
                disabled
                size="lg"
                variant="outline"
              >
                <AppleIcon className="size-7" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal text-muted-foreground">
                    Coming soon on the
                  </span>
                  <span className="text-base font-semibold">App Store</span>
                </span>
              </Button>
              <Button
                aria-label="Google Play, coming soon"
                className="h-auto gap-3 px-5 py-3"
                disabled
                size="lg"
                variant="outline"
              >
                <AndroidIcon className="size-7" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal text-muted-foreground">
                    Coming soon on
                  </span>
                  <span className="text-base font-semibold">Google Play</span>
                </span>
              </Button>
            </div>
          </div>

          {/* Short info sections about what the app does. */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <section
                key={point.title}
                className="rounded-2xl border border-border bg-card/30 p-5"
              >
                <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                  <point.icon className="size-5" />
                </div>
                <h2 className="mt-4 text-base font-medium">{point.title}</h2>
                <p className="mt-1.5 text-sm text-pretty text-muted-foreground">
                  {point.body}
                </p>
              </section>
            ))}
          </div>
        </article>

        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
