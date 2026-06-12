import { Phone, MapPin } from "lucide-react"
import { contact } from "@/lib/menu-data"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-background/60">
              SHIN KAL · SINCE 1982
            </p>
            <p className="mt-1 font-serif text-2xl font-black">
              현풍닭칼국수 <span className="text-brass">강남역삼점</span>
            </p>
            <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-background/70">
              {contact.slogan}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={contact.phoneHref}
              className="flex items-center gap-2 text-background/85 transition-colors hover:text-brass"
            >
              <Phone className="size-4" />
              {contact.phone}
            </a>
            <p className="flex items-start gap-2 text-background/85">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {contact.address}
                <br />
                <span className="text-background/60">{contact.addressNote}</span>
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 text-xs text-background/50">
          © {new Date().getFullYear()} 현풍닭칼국수 강남역삼점. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
