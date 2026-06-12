import { Clock } from "lucide-react"
import { hours } from "@/lib/menu-data"

export function HoursSection() {
  return (
    <section id="hours" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              HOURS
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              영업시간
            </h2>
            <p className="mt-3 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              연중무휴 운영하며, 라스트오더 시간을 꼭 확인해 주세요. 명절 등
              휴무는 매장 공지를 참고 바랍니다.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {hours.map((h) => (
              <div
                key={h.days}
                className="flex items-center justify-between rounded-2xl border border-border bg-card px-6 py-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Clock className="size-5" />
                  </span>
                  <span className="font-bold text-foreground">{h.days}</span>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg font-bold text-foreground">
                    {h.time}
                  </p>
                  <p className="text-xs text-muted-foreground">{h.lastOrder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
