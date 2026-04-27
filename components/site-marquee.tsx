const items = [
  "Artificial Turf",
  "Pavers",
  "Gravel",
  "Irrigation",
  "Clean Ups",
  "Tree Trimming",
  "Concrete Work",
  "Free Estimates",
]

export function SiteMarquee() {
  return (
    <div
      aria-hidden
      className="border-y border-primary/30 bg-primary py-3 text-primary-foreground"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 sm:px-6 lg:px-8">
        {items.map((item, i) => (
          <span
            key={item}
            className="flex items-center gap-6 font-display text-sm font-bold uppercase tracking-widest"
          >
            {item}
            {i < items.length - 1 && (
              <span className="h-1 w-1 rounded-full bg-primary-foreground/60" />
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
