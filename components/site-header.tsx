"use client"

import { useState } from "react"
import { Menu, ShoppingBag, X } from "lucide-react"

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Gallery", href: "#gallery" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rental Rules", href: "#rental-rules" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button
          className="flex items-center gap-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-tight lg:text-3xl lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          RNR Closet Ph
        </a>

        <div className="flex items-center gap-5">
          <a
            href="#collection"
            className="hidden text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary lg:inline"
          >
            Sign In
          </a>
          <button
            className="flex items-center gap-2 text-sm tracking-wide text-foreground transition-colors hover:text-primary"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="size-5" />
            <span className="hidden sm:inline">Bag (0)</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-wide text-foreground/80"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
