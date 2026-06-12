import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SignatureSection } from "@/components/signature-section"
import { MenuSection } from "@/components/menu-section"
import { HoursSection } from "@/components/hours-section"
import { TipsSection } from "@/components/tips-section"
import { LocationSection } from "@/components/location-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileCallBar } from "@/components/mobile-call-bar"
import { contact } from "@/lib/menu-data"

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: contact.name,
  description:
    "강남역과 역삼역 사이에 있는 진한 닭육수 닭칼국수 전문점입니다.",
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address,
    addressLocality: "강남구",
    addressRegion: "서울",
    addressCountry: "KR",
  },
  servesCuisine: ["닭칼국수", "칼국수", "닭곰탕", "수육"],
  priceRange: "₩₩",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "11:00",
      closes: "20:00",
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <SiteHeader />
      <main className="pb-20 sm:pb-0">
        <Hero />
        <SignatureSection />
        <MenuSection />
        <HoursSection />
        <TipsSection />
        <LocationSection />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </>
  )
}
