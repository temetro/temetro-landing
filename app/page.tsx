import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { OpenSource } from "@/components/landing/open-source"
import { Features } from "@/components/landing/features"
import { ProductShowcase } from "@/components/landing/product-showcase"
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
        <WalletApp />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  )
}
