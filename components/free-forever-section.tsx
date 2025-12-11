import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Unlimited expense entries",
  "Unlimited wallets & categories",
  "All features unlocked",
  "Local-only storage",
  "No account required",
]

export function FreeForeverSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Completely free. No strings attached.
        </h2>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
          Ledger is a passion project built to solve a real problem. No premium tier, no ads, no data monetization.
        </p>

        <div className="inline-flex flex-col items-start gap-3 mb-10">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <Check size={18} className="text-foreground" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        <div>
          <Button size="lg" className="rounded-full px-8 text-base">
            Add to Chrome
          </Button>
        </div>
      </div>
    </section>
  )
}
