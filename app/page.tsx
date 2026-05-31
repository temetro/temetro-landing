import { SiteHeader } from "@/components/landing/site-header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { Privacy } from "@/components/landing/privacy"
import { Faq } from "@/components/landing/faq"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Privacy />
        <Faq />
      </main>
      <SiteFooter />
    </>
  )
}
