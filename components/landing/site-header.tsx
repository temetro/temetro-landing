import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { GitHubIcon } from "@/components/landing/brand-icons"
import { FeaturesMenu, ResourcesMenu } from "@/components/landing/nav-menu"

const plainLinks = [
  { label: "Story", href: "/story" },
  { label: "Blog", href: "https://blog.temetro.com", external: true },
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
          <FeaturesMenu />
          <ResourcesMenu />
          {plainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            aria-label="temetro on GitHub"
            className="text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<a href="https://github.com/temetro/temetro" target="_blank" rel="noreferrer" />}
            size="icon-sm"
            variant="ghost"
          >
            <GitHubIcon className="size-[18px]" />
          </Button>
          <Button nativeButton={false} render={<Link href="https://docs.temetro.com/docs" />} size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
