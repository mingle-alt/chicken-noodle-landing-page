import { MapPin, Phone } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={contact.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-3 text-sm font-bold text-primary-foreground"
        >
          <Phone className="size-5 shrink-0" />
          전화 예약
        </a>
        <a
          href={contact.naverMapHref}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-bold text-foreground"
        >
          <MapPin className="size-5 shrink-0 text-primary" />
          길찾기
        </a>
      </div>
    </div>
  )
}
