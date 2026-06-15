import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Collection } from "@/components/collection"
import { CustomerGallery } from "@/components/customer-gallery"
import { HowItWorks } from "@/components/how-it-works"
import { RentalRules } from "@/components/rental-rules"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Collection />
      <CustomerGallery />
      <HowItWorks />
      <RentalRules />
      <SiteFooter />
    </main>
  )
}
