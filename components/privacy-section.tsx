import { HardDrive, UserX, EyeOff, Code } from "lucide-react"

const privacyFeatures = [
  {
    icon: HardDrive,
    title: "100% Local Storage",
    description: "All data stays in your browser. Nothing is sent to any server.",
  },
  {
    icon: UserX,
    title: "No Account Required",
    description: "Start using immediately. No email, no signup, no passwords.",
  },
  {
    icon: EyeOff,
    title: "No Analytics",
    description: "We don't track you. No telemetry, no usage data, nothing.",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Inspect the code yourself. Fully transparent.",
  },
]

export function PrivacySection() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-foreground mb-4">
          Your finances. Your device. Your control.
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Privacy isn't a feature — it's the foundation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {privacyFeatures.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-card border border-border rounded-xl flex items-center justify-center">
                <feature.icon size={24} className="text-muted-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
