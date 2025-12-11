import { PlusCircle, PieChart, Calendar, Wallet, TrendingDown } from "lucide-react"

export function ProductShowcaseSection() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">Simple by design</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Every element serves a purpose. No clutter, just clarity.
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Main mockup */}
          <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-secondary/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
                <div className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background border border-border rounded-md px-4 py-1 text-xs text-muted-foreground">
                  chrome-extension://ledger
                </div>
              </div>
            </div>

            {/* Extension content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Wallet size={20} className="text-foreground" />
                  <span className="font-semibold text-foreground">Ledger</span>
                </div>
                <select className="text-sm bg-secondary border border-border rounded-md px-2 py-1 text-foreground">
                  <option>December 2025</option>
                </select>
              </div>

              {/* Balance card */}
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Monthly Spending</span>
                  <TrendingDown size={16} className="text-muted-foreground" />
                </div>
                <div className="text-3xl font-semibold text-foreground mb-1">$1,247.50</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-foreground rounded-full" style={{ width: "62%" }} />
                  </div>
                  <span className="text-xs text-muted-foreground">62% of $2,000</span>
                </div>
              </div>

              {/* Category breakdown mini */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {["Food", "Transport", "Shopping", "Bills"].map((cat) => (
                  <div key={cat} className="text-center p-3 bg-secondary/50 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">{cat}</div>
                    <div className="text-sm font-medium text-foreground">${Math.floor(Math.random() * 400 + 100)}</div>
                  </div>
                ))}
              </div>

              {/* Quick add button */}
              <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2">
                <PlusCircle size={18} />
                Add Expense
              </button>
            </div>
          </div>

          {/* Floating annotations */}
          <div className="hidden lg:block absolute -left-48 top-24 text-right">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 shadow-sm">
              <PlusCircle size={16} className="text-muted-foreground" />
              <span className="text-sm text-foreground">One-click entry</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-52 top-48 text-left">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 shadow-sm">
              <PieChart size={16} className="text-muted-foreground" />
              <span className="text-sm text-foreground">Category breakdown</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-48 bottom-32 text-left">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 shadow-sm">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-sm text-foreground">Monthly overview</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
