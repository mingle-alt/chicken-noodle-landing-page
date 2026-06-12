import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 pt-10 pb-14 md:grid-cols-2 md:pt-16 md:pb-20">
        <div className="flex flex-col items-start">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brass/50 bg-brass/15 px-3 py-1 text-xs font-medium text-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            강남역 · 역삼역 사이 닭칼국수 전문점
          </span>

          <h1 className="text-balance font-serif text-4xl font-black leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            진하게 우려낸
            <br />
            <span className="text-primary">건강한 닭칼국수</span>
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            {contact.slogan}. 매일 정성껏 끓여낸 깊은 닭육수와 쫄깃한 면발로
            한 끼의 식사에도 건강을 담았습니다.
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-5" />
              {contact.phone}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              메뉴 보기
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" />
            <span>
              {contact.address}{" "}
              <span className="text-foreground/50">· {contact.addressNote}</span>
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/hero-spread.png"
              alt="놋그릇에 담긴 현풍닭칼국수와 수육, 반찬 한 상 차림"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/images/signature-bowl.png"
                alt="현풍닭칼국수 대표 닭칼국수 메뉴 사진"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 240px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src="/images/hero-spread.png"
                alt="수육과 반찬을 곁들인 현풍닭칼국수 한 상"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 240px"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-mono text-[10px] tracking-[0.25em] text-primary">
              SINCE 1982
            </p>
            <p className="font-serif text-lg font-bold text-foreground">
              현풍 본가의 맛
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
