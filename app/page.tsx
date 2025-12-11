import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductShowcaseSection } from "@/components/product-showcase-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PrivacySection } from "@/components/privacy-section"
import { FreeForeverSection } from "@/components/free-forever-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function LedgerLandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <HowItWorksSection />
      <PrivacySection />
      <FreeForeverSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
