export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-16">
          Expense tracking shouldn't be complicated
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most finance apps are bloated with features you don't need. They require accounts, sync across clouds, and
              demand your personal data. Simple expense tracking becomes an overwhelming chore.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">The Solution</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ledger is different — browser-native, local-first, and minimal by design. No servers, no accounts, no
              complexity. Just open your browser and start tracking instantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
