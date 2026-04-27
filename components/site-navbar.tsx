"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <span className="font-display text-lg font-bold">C&amp;C</span>
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-bold uppercase tracking-wide text-foreground">
              C&amp;C Landscaping
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Hardscape LLC
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-primary font-display text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            <a href="tel:6024465194">
              <Phone className="mr-2 h-4 w-4" />
              602-446-5194
            </a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:6024465194"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-3 font-display text-base font-bold uppercase tracking-wide text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call 602-446-5194
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
