import { Phone, MapPin, ShoppingBag, CalendarCheck } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function LocationSection() {
  const mapQuery = encodeURIComponent(`${contact.name} ${contact.address}`)

  return (
    <section id="location" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            LOCATION & RESERVATION
          </span>
          <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            오시는 길 · 예약
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <iframe
              title="현풍닭칼국수 강남역삼점 지도"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-start gap-3 p-5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-bold text-foreground">{contact.address}</p>
                <p className="text-sm text-muted-foreground">
                  {contact.addressNote}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                <CalendarCheck className="size-5 text-primary" />
                예약 안내
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                전화 예약과 온라인 예약 모두 가능합니다. 단체 방문 시 미리
                연락 주시면 더욱 빠르게 준비해 드립니다.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                <ShoppingBag className="size-5 text-primary" />
                포장 안내
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                포장 주문 시 금액별 1,000원이 추가됩니다. 전화로 미리 주문하시면
                대기 없이 받아가실 수 있습니다.
              </p>
            </div>

            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" />
              {contact.phone} 전화하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
