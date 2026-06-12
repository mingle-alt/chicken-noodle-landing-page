import { menuCategories } from "@/lib/menu-data"

export function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
        <div className="mb-10 text-center">
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            MENU
          </span>
          <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            전체 메뉴
          </h2>
          <p className="mt-3 text-muted-foreground">
            계절에 따라 즐기는 다양한 칼국수와 곁들임 메뉴
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {menuCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 border-b border-border pb-4">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {cat.title}
                </h3>
                {cat.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.subtitle}
                  </p>
                )}
              </div>

              <ul className="flex flex-col gap-3.5">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <span className="flex items-center gap-2 text-foreground">
                      {item.name}
                      {item.tag && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                          {item.tag}
                        </span>
                      )}
                    </span>
                    <span
                      className="flex-1 translate-y-[-2px] border-b border-dotted border-border"
                      aria-hidden="true"
                    />
                    <span className="shrink-0 font-mono font-bold text-foreground">
                      {item.price}
                      <span className="ml-0.5 text-xs font-normal text-muted-foreground">
                        원
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 rounded-xl border border-brass/40 bg-brass/10 px-5 py-4 text-center text-sm text-foreground">
          포장 주문 시 금액별 <strong className="text-primary">1,000원</strong>이
          추가됩니다. 전화 또는 온라인으로 예약·포장 주문이 가능합니다.
        </p>
      </div>
    </section>
  )
}
