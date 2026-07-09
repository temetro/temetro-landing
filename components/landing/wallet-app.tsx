"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { BadgeCheck, KeyRound, ShieldCheck, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { WalletPhoneFigure } from "@/components/landing/figures"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger, useGSAP)

// The patient wallet app (the Temetro Expo companion, still in alpha). The four
// feature cards sit in a 2x2 bento; the phone card is the centre tile. On scroll
// the phone travels down into the middle of the four cards (a smooth, un-pinned
// GSAP scrub) and the cards settle into place around it.
const cards = [
  {
    icon: ShieldCheck,
    title: "Encrypted on your device",
    body: "Your record lives on your own phone. The relay only ever forwards sealed ciphertext, never anything in the clear.",
  },
  {
    icon: KeyRound,
    title: "Your wallet number is your key",
    body: "A tmw_… address derived from an Ed25519 keypair that only you hold. No account, no password, no middleman.",
  },
  {
    icon: BadgeCheck,
    title: "Nothing changes without you",
    body: "Every update a clinic makes is sealed to you and waits for your approval on the phone before it counts.",
  },
  {
    icon: Timer,
    title: "Shares that delete themselves",
    body: "Share a record for one visit, then let it auto-delete. It is off-chain by design, so it can truly be removed.",
  },
]

// Bento placement: two cards down the left column, two down the right, with the
// phone in the centre column spanning both rows.
const placement = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
]

export function WalletApp() {
  const root = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop with motion allowed: scrub the phone down into the centre as the
      // bento passes through the viewport, and ease the cards in around it.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: stage.current,
              start: "top bottom",
              end: "center center",
              scrub: 0.6,
            },
          })
          tl.fromTo(
            ".wallet-phone",
            { y: -150, scale: 0.94, autoAlpha: 0.4 },
            { y: 0, scale: 1, autoAlpha: 1, ease: "none" },
            0,
          ).fromTo(
            ".wallet-card",
            { y: 24, scale: 0.96, autoAlpha: 0 },
            { y: 0, scale: 1, autoAlpha: 1, ease: "none", stagger: 0.08 },
            0,
          )
        },
      )

      // Mobile / reduced-motion: no movement, just make sure everything shows.
      mm.add(
        "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        () => {
          gsap.set([".wallet-phone", ".wallet-card"], {
            autoAlpha: 1,
            y: 0,
            scale: 1,
          })
        },
      )

      // Recompute trigger positions after layout/images settle.
      ScrollTrigger.refresh()
    },
    { scope: root },
  )

  return (
    <section
      id="wallet"
      ref={root}
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28"
    >
      <div className="max-w-2xl">
        <Badge variant="info">Companion app · Alpha</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Your record, in your pocket
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          The temetro wallet is a patient companion app, still in alpha. It keeps your
          health record on your own device, sealed with a key that only you hold, so you
          decide what a clinic can see and change.
        </p>
      </div>

      {/* Bento stage: four feature cards in a 2x2, phone in the centre column. */}
      <div ref={stage} className="relative mt-12">
        {/* soft neutral glow behind the centre phone */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/5 blur-3xl"
        />

        <div className="grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Phone (centre column, spans both rows on desktop) */}
          <Card className="wallet-phone order-first items-center justify-center py-8 shadow-lg ring-1 ring-foreground/10 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <CardContent className="flex h-full w-full items-center justify-center">
              <div className="h-64 w-full max-w-[14rem] text-foreground">
                <WalletPhoneFigure />
              </div>
            </CardContent>
          </Card>

          {/* Feature cards, two per side. */}
          {cards.map((card, i) => (
            <Card
              key={card.title}
              size="sm"
              className={cn("wallet-card justify-center gap-0", placement[i])}
            >
              <CardContent className="flex flex-col gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-foreground">
                  <card.icon className="size-5" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.body}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
