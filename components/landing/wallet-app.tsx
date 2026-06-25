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

// The patient wallet app (the Temetro Expo companion, still in alpha). A neutral
// bento that matches the rest of the site: a line-art phone centerpiece flanked
// by design-system cards, revealed on scroll with GSAP.
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

export function WalletApp() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from(".bento-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        // clearProps so no inline opacity is left behind once revealed.
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: root.current,
          start: "top 85%",
          once: true,
        },
      })
      // Recompute trigger positions after layout/images settle, so the reveal
      // always fires (the round-1 bug left cards stuck at opacity 0).
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
        <Badge variant="outline">Companion app · Alpha</Badge>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Your record, in your pocket
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          The temetro wallet is a patient companion app, still in alpha. It keeps your
          health record on your own device, sealed with a key that only you hold, so you
          decide what a clinic can see and change.
        </p>
      </div>

      {/* Bento: line-art phone centerpiece flanked by feature cards. */}
      <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {/* Phone (center, spans both rows on desktop) */}
        <Card className="bento-reveal order-first items-center justify-center py-8 lg:order-none lg:col-start-2 lg:row-span-2">
          <CardContent className="flex h-full w-full items-center justify-center">
            <div className="h-64 w-full max-w-[15rem] text-foreground">
              <WalletPhoneFigure />
            </div>
          </CardContent>
        </Card>

        {/* Feature cards, two per side. */}
        {cards.map((card, i) => (
          <Card
            key={card.title}
            size="sm"
            className={cn(
              "bento-reveal gap-0 justify-center",
              i < 2 ? "lg:col-start-1" : "lg:col-start-3",
            )}
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
    </section>
  )
}
