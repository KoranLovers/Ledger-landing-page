import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
          Take control of your spending
        </h2>
        <p className="text-lg text-muted-foreground mb-10">Simple expense tracking, right in your browser</p>
        <Button size="lg" className="rounded-full px-10 text-base">
          Add to Chrome
        </Button>
        <p className="text-sm text-muted-foreground mt-6">Free · No signup · No data collection</p>
      </div>
    </section>
  )
}
