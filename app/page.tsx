import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { SignatureSection } from "@/components/signature-section"
import { MenuSection } from "@/components/menu-section"
import { HoursSection } from "@/components/hours-section"
import { TipsSection } from "@/components/tips-section"
import { LocationSection } from "@/components/location-section"
import { SiteFooter } from "@/components/site-footer"
import { MobileCallBar } from "@/components/mobile-call-bar"

export default function Page() {
  return (
    <>
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
