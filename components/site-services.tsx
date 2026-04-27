import {
  Trees,
  Construction,
  Mountain,
  Droplets,
  Sparkles,
  Scissors,
  Hammer,
} from "lucide-react"

const services = [
  {
    icon: Trees,
    title: "Artificial Turf",
    description:
      "Premium synthetic grass installations that stay green year-round with zero mowing or watering.",
  },
  {
    icon: Construction,
    title: "Pavers",
    description:
      "Custom paver patios, walkways, and driveways built to last with precision installation.",
  },
  {
    icon: Mountain,
    title: "Gravel",
    description:
      "Decorative and functional gravel landscaping in a variety of colors, sizes, and styles.",
  },
  {
    icon: Droplets,
    title: "Irrigation",
    description:
      "Smart irrigation systems and drip lines that keep your landscape healthy and water-efficient.",
  },
  {
    icon: Sparkles,
    title: "Clean Ups",
    description:
      "Full yard clean ups, debris removal, and seasonal maintenance to keep your property pristine.",
  },
  {
    icon: Scissors,
    title: "Tree Trimming",
    description:
      "Safe, professional tree trimming and pruning to keep your landscape healthy and beautiful.",
  },
  {
    icon: Hammer,
    title: "Concrete Work",
    description:
      "Driveways, walkways, slabs, and decorative concrete poured and finished to perfection.",
  },
]

export function SiteServices() {
  return (
    <section
      id="services"
      className="relative border-b border-border/60 py-20 sm:py-28"
    >
      <div className="grass-pattern absolute inset-0 -z-10 opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
            Full Service Landscaping &amp; Hardscape
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From the ground up — we handle every aspect of your outdoor space
            with the same level of craftsmanship and care.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_0_0_1px_var(--primary)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div
                aria-hidden
                className="absolute -bottom-px left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
