import { Phone } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <a
        href={contact.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-base font-bold text-primary-foreground"
      >
        <Phone className="size-5" />
        지금 전화 예약 · {contact.phone}
      </a>
    </div>
  )
}
