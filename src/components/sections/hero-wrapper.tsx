export function HeroWrapper({ children }: { children: React.ReactNode }) {
    return (
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    )
  }