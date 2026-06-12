import { Users, Timer, Utensils } from "lucide-react"

const tips = [
  {
    icon: Timer,
    title: "회전율이 빠릅니다",
    desc: "칼국수 특성상 식사 시간이 짧아 테이블 회전이 빨라요. 줄이 보여도 대기시간은 생각보다 짧습니다.",
  },
  {
    icon: Utensils,
    title: "혼밥엔 바 테이블",
    desc: "1인 좌석인 바 테이블이 마련되어 있어, 혼자 방문하셔도 기다림 없이 바로 착석할 가능성이 높습니다.",
  },
  {
    icon: Users,
    title: "피크타임 피하기",
    desc: "평일 점심 11:50~12:50은 직장인으로 가장 붐빕니다. 여유로운 식사를 원하면 이 시간대를 살짝 피해보세요.",
  },
]

export function TipsSection() {
  return (
    <section id="tips" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mb-10 max-w-xl">
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            VISIT TIPS
          </span>
          <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            방문 꿀팁
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            점심시간 직장인 손님이 많은 강남역삼점, 똑똑하게 방문하는 방법을
            알려드립니다.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <tip.icon className="size-6" />
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {tip.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
