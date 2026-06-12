"use client"

import { useEffect, useState } from "react"
import { Phone, MenuIcon, X } from "lucide-react"
import { contact } from "@/lib/menu-data"

const navLinks = [
  { href: "#menu", label: "메뉴" },
  { href: "#hours", label: "영업시간" },
  { href: "#tips", label: "방문팁" },
  { href: "#location", label: "오시는길" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-mono text-[10px] tracking-[0.3em] text-primary">
            SHIN KAL
          </span>
          <span className="font-serif text-lg font-black tracking-tight text-foreground">
            현풍닭칼국수
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Phone className="size-4" />
            전화 예약
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground/80 last:border-none"
              >
                {link.label}
              </a>
            ))}
            <a
              href={contact.phoneHref}
              className="mt-3 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
