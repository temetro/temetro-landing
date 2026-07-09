import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { OpenSource } from "@/components/landing/open-source"
import { Features } from "@/components/landing/features"
import { ProductShowcase } from "@/components/landing/product-showcase"
import { TemetroNetwork } from "@/components/landing/temetro-network"
import { WalletApp } from "@/components/landing/wallet-app"
import { Faq } from "@/components/landing/faq"
import { CtaBand } from "@/components/landing/cta"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <OpenSource />
        <Features />
        <ProductShowcase />
        <TemetroNetwork />
        <WalletApp />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
