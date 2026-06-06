import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/landing/brand-icons"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Open source", href: "#open-source" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/temetro-logo.png"
            alt="temetro"
            width={28}
            height={28}
            className="size-7"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight">temetro</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            aria-label="temetro on GitHub"
            className="text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
            size="icon-sm"
            variant="ghost"
          >
            <GitHubIcon className="size-[18px]" />
          </Button>
          <Button nativeButton={false} render={<Link href="/register" />} size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
