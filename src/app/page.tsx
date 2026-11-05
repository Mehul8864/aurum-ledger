export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full bg-surface border border-border p-8 rounded-lg shadow-subtle text-center">
        <h1 className="text-xl font-medium tracking-tight text-foreground">AURUM LEDGER</h1>
        <p className="text-sm text-foreground-muted mt-2">
          Jewellery Workshop Gold Accountability System
        </p>
        <p className="text-xs text-gold-primary font-medium mt-4">
          Every gram accounted for.
        </p>
      </div>
    </main>
  );
}
