import { SiteNavbar } from "@/components/site-navbar"
import { SiteHero } from "@/components/site-hero"
import { SiteMarquee } from "@/components/site-marquee"
import { SiteServices } from "@/components/site-services"
import { SiteGallery } from "@/components/site-gallery"
import { SiteWhyUs } from "@/components/site-why-us"
import { SiteContact } from "@/components/site-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <SiteHero />
      <SiteMarquee />
      <SiteServices />
      <SiteGallery />
      <SiteWhyUs />
      <SiteContact />
      <SiteFooter />
    </main>
  )
}
