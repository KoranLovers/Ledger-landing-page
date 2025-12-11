import { Button } from "@/components/ui/button"
import { ExtensionMockup } from "@/components/extension-mockup"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 text-balance">
            Track every dollar. Effortlessly.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty">
            A minimalist expense tracker that lives in your browser. No apps, no sync issues, no complexity — just
            clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="rounded-full px-8 text-base">
              Add to Chrome — It's Free
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-transparent">
              See how it works
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Free & open source · No account required · Your data stays local
          </p>
        </div>

        <ExtensionMockup />
      </div>
    </section>
  )
}
