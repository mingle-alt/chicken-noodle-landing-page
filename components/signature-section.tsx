import Image from "next/image"

export function SignatureSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-xl md:order-1">
          <Image
            src="/images/signature-bowl.png"
            alt="현풍닭칼국수 대표 메뉴 - 진한 국물의 닭칼국수 한 그릇"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 480px"
          />
        </div>

        <div className="order-1 md:order-2">
          <span className="font-mono text-xs tracking-[0.3em] text-primary-foreground/70">
            SIGNATURE
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-black leading-tight sm:text-4xl">
            대표 메뉴, 닭칼국수
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-primary-foreground/85">
            국내산 닭을 푹 고아 만든 뽀얀 육수에 직접 반죽한 칼국수를 넣어
            끓여냅니다. 부드러운 닭살과 김가루, 신선한 채소가 어우러져 깔끔하고
            든든한 한 그릇을 완성합니다.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "매일 아침 직접 고아내는 진한 닭육수",
              "주문 즉시 삶아내는 쫄깃한 생면",
              "조미료를 줄인 건강한 집밥 같은 맛",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brass" />
                <span className="leading-relaxed text-primary-foreground/90">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
