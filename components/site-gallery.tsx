import Image from "next/image"

const projects = [
  {
    src: "/images/pavers.jpg",
    title: "Custom Paver Patios",
    tag: "Hardscape",
  },
  {
    src: "/images/artificial-turf.jpg",
    title: "Premium Artificial Turf",
    tag: "Landscape",
  },
  {
    src: "/images/concrete-work.jpg",
    title: "Concrete Driveways",
    tag: "Hardscape",
  },
  {
    src: "/images/gravel-irrigation.jpg",
    title: "Gravel & Irrigation",
    tag: "Landscape",
  },
  {
    src: "/images/tree-trimming.jpg",
    title: "Tree Trimming & Clean Ups",
    tag: "Maintenance",
  },
  {
    src: "/images/hero-landscaping.jpg",
    title: "Full Yard Transformations",
    tag: "Featured",
  },
]

export function SiteGallery() {
  return (
    <section
      id="gallery"
      className="border-b border-border/60 bg-card/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
              Recent Projects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A look at the yards we&apos;ve transformed — every project is
              built with quality materials and an eye for detail.
            </p>
          </div>
          <a
            href="#contact"
            className="font-display text-sm font-bold uppercase tracking-widest text-primary underline-offset-4 hover:underline"
          >
            Start Your Project →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card ${
                i === 0 ? "lg:row-span-2 lg:aspect-auto" : ""
              }`}
            >
              <div
                className={`relative ${i === 0 ? "h-full min-h-[420px]" : "aspect-[4/3]"}`}
              >
                <Image
                  src={p.src || "/placeholder.svg"}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <span className="inline-block rounded-full border border-primary/40 bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-foreground sm:text-xl">
                    {p.title}
                  </h3>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
