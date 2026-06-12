"use client"

import { useEffect, useMemo, useState } from "react"
import { Clock3 } from "lucide-react"

const weekdayHours = {
  open: 11 * 60,
  lastOrder: 20 * 60 + 30,
  close: 21 * 60,
}

const weekendHours = {
  open: 11 * 60,
  lastOrder: 19 * 60 + 30,
  close: 20 * 60,
}

function getStatus(now: Date) {
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()
  const schedule = day === 0 || day === 6 ? weekendHours : weekdayHours

  if (minutes < schedule.open) {
    return {
      label: "영업 전",
      desc: "오전 11:00부터 영업합니다.",
      tone: "bg-muted text-muted-foreground",
    }
  }

  if (minutes >= schedule.lastOrder && minutes < schedule.close) {
    return {
      label: "라스트오더 임박",
      desc: `${Math.floor(schedule.close / 60)}:00 영업 종료 전 주문을 서둘러 주세요.`,
      tone: "bg-brass/20 text-foreground",
    }
  }

  if (minutes >= schedule.close) {
    return {
      label: "영업 종료",
      desc: "내일 오전 11:00에 다시 문을 엽니다.",
      tone: "bg-muted text-muted-foreground",
    }
  }

  return {
    label: "지금 영업 중",
    desc: `${Math.floor(schedule.lastOrder / 60)}:${String(schedule.lastOrder % 60).padStart(2, "0")} 라스트오더입니다.`,
    tone: "bg-primary/10 text-primary",
  }
}

export function OpenStatus() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const timer = window.setInterval(() => setNow(new Date()), 60_000)
    return () => window.clearInterval(timer)
  }, [])

  const status = useMemo(() => (now ? getStatus(now) : null), [now])

  if (!status) {
    return null
  }

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex size-10 items-center justify-center rounded-full ${status.tone}`}
        >
          <Clock3 className="size-5" />
        </span>
        <div>
          <p className="font-serif text-lg font-black text-foreground">
            {status.label}
          </p>
          <p className="text-sm text-muted-foreground">{status.desc}</p>
        </div>
      </div>
    </div>
  )
}
