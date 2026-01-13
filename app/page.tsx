import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { QualitySection } from "@/components/quality-section"
import { DNASection } from "@/components/dna-section"
import { EventsSection } from "@/components/events-section"
import { SchoolsSection } from "@/components/schools-section"
import { InternationalSection } from "@/components/international-section"
import { NewsSection } from "@/components/news-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <QualitySection />
      <DNASection />
      <EventsSection />
      <SchoolsSection />
      <InternationalSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
