import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DiscordIcon, GitHubIcon } from "@/components/landing/brand-icons"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Open source", href: "#open-source" },
      { label: "Privacy", href: "#privacy" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.temetro.com" },
      { label: "Changelog", href: "#" },
      { label: "GitHub", href: "https://github.com" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Discussions", href: "#" },
      { label: "Contributing", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/temetro-logo.png"
                alt="temetro"
                width={28}
                height={28}
                className="size-7"
              />
              <span className="text-[15px] font-semibold tracking-tight">temetro</span>
            </Link>
            <p className="mt-4 text-sm text-pretty text-muted-foreground">
              The open-source workspace for patient care — records, scheduling, prescriptions, and
              notes in one place.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium">{column.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mt-12" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} temetro · Open source under the MIT License
          </p>
          <div className="flex items-center gap-1">
            <Button
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground"
              nativeButton={false}
              render={<a href="https://github.com" target="_blank" rel="noreferrer" />}
              size="icon-sm"
              variant="ghost"
            >
              <GitHubIcon className="size-[18px]" />
            </Button>
            <Button
              aria-label="Discord"
              className="text-muted-foreground hover:text-foreground"
              nativeButton={false}
              render={<a href="#" />}
              size="icon-sm"
              variant="ghost"
            >
              <DiscordIcon className="size-[18px]" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
