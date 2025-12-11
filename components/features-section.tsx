import { Zap, Target, BarChart3, Wallet, RefreshCw, Download } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Quick Entry",
    description: "Log expenses in seconds. Keyboard shortcuts, smart categories, zero friction.",
  },
  {
    icon: Target,
    title: "Budget Limits",
    description: "Set monthly limits by category. Visual indicators show your progress.",
  },
  {
    icon: BarChart3,
    title: "Visual Insights",
    description: "Clean charts show where your money goes. Daily, weekly, monthly views.",
  },
  {
    icon: Wallet,
    title: "Multi-Wallet",
    description: "Separate cash, cards, and accounts. See each balance at a glance.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Expenses",
    description: "Track subscriptions and bills. Keep your commitments visible.",
  },
  {
    icon: Download,
    title: "Export & Backup",
    description: "Download your data anytime. CSV, JSON — your data is yours.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Everything you need. Nothing you don't.
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Focused features designed for simplicity and efficiency.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-card border border-border rounded-xl">
              <feature.icon size={24} className="text-muted-foreground mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
