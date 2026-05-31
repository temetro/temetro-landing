import Image from "next/image"
import Link from "next/link"

import { DiscordIcon, GitHubIcon } from "@/components/landing/brand-icons"

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Privacy", href: "#privacy" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "#" },
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
              The open-source AI assistant for clinicians. Retrieve patient information by simply
              asking.
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} temetro · Open source under the MIT License
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <GitHubIcon className="size-[18px]" />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <DiscordIcon className="size-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
