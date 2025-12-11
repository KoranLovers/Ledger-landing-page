export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Install",
      description: "Add Ledger to Chrome with one click. No account needed.",
    },
    {
      number: "02",
      title: "Set Budget",
      description: "Define your monthly budget and spending categories.",
    },
    {
      number: "03",
      title: "Track",
      description: "Log expenses as you go. Build better spending habits.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Get started in 30 seconds
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          No setup wizards, no tutorials needed. Just install and go.
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <span className="text-5xl font-semibold text-border mb-4 block">{step.number}</span>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
