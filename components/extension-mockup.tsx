import { PieChart, Wallet, TrendingUp, Coffee, ShoppingCart, Home, Car } from "lucide-react"

export function ExtensionMockup() {
  const expenses = [
    { category: "Food & Dining", amount: 342.5, icon: Coffee, percent: 35 },
    { category: "Shopping", amount: 215.0, icon: ShoppingCart, percent: 22 },
    { category: "Housing", amount: 180.0, icon: Home, percent: 18 },
    { category: "Transport", amount: 125.0, icon: Car, percent: 13 },
  ]

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-foreground">Ledger</span>
            <div className="flex items-center gap-2">
              <Wallet size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Main Wallet</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-1">December Spending</p>
            <p className="text-3xl font-semibold text-foreground">$862.50</p>
            <p className="text-sm text-muted-foreground">of $1,200 budget</p>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-foreground rounded-full" style={{ width: "72%" }} />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">By Category</span>
            <PieChart size={16} className="text-muted-foreground" />
          </div>
          <div className="space-y-3">
            {expenses.map((expense) => (
              <div key={expense.category} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  <expense.icon size={16} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground">{expense.category}</span>
                    <span className="text-sm font-medium text-foreground">${expense.amount.toFixed(2)}</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-foreground/60 rounded-full" style={{ width: `${expense.percent}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Add */}
        <div className="p-4 border-t border-border">
          <button className="w-full py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium flex items-center justify-center gap-2">
            <TrendingUp size={16} />
            Add Expense
          </button>
        </div>
      </div>
    </div>
  )
}
