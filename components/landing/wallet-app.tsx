"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { KeyRound, ShieldCheck, Smartphone, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"

gsap.registerPlugin(ScrollTrigger, useGSAP)

// MetaMask-style bento for the patient wallet app (still alpha). Four feature
// cards orbit a phone mockup; the cards stagger into view on scroll via GSAP.
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
    icon: ShieldCheck,
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
      gsap.from(".bento-tile", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
      })
    },
    { scope: root },
  )

  return (
    <section id="wallet" className="scroll-mt-20 px-6 py-20 sm:py-28">
      <div
        ref={root}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 px-6 py-14 text-white sm:px-12 sm:py-16"
      >
        <div className="max-w-2xl">
          <Badge className="border-white/30 bg-white/15 text-white" variant="outline">
            Companion app · Alpha
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Your record, in your pocket
          </h2>
          <p className="mt-4 text-pretty text-white/80">
            The temetro wallet is a patient companion app, still in active development.
            It keeps your health record on your own device, sealed with a key that only
            you hold, so you decide what a clinic can see and change.
          </p>
        </div>

        {/* Bento: phone mockup flanked by feature tiles */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Phone mockup (center, spans both rows on desktop) */}
          <div className="bento-tile order-first flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm lg:order-none lg:col-start-2 lg:row-span-2">
            <div className="relative w-44 rounded-[2rem] border border-white/25 bg-white/10 p-3 shadow-2xl shadow-black/30">
              <div className="flex aspect-[9/19] flex-col rounded-[1.5rem] bg-neutral-950/70 p-4">
                <div className="mx-auto h-1.5 w-10 rounded-full bg-white/25" />
                <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
                  <Smartphone className="size-8 text-white/80" />
                  <p className="mt-4 text-[11px] uppercase tracking-wide text-white/50">
                    Wallet number
                  </p>
                  <p className="mt-1 font-mono text-sm break-all text-white/90">
                    tmw_8Qx…f2A
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] text-emerald-200">
                    <ShieldCheck className="size-3.5" />
                    Encrypted on device
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature tiles, two on each side via column placement */}
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bento-tile flex flex-col rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm ${
                i < 2 ? "lg:col-start-1" : "lg:col-start-3"
              }`}
            >
              <card.icon className="size-5 text-white/90" />
              <h3 className="mt-3 text-base font-medium">{card.title}</h3>
              <p className="mt-1.5 text-sm text-pretty text-white/75">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
