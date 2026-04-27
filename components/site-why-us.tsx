import Image from "next/image"
import { ShieldCheck, Clock, Award, ThumbsUp } from "lucide-react"

const points = [
  {
    icon: Award,
    title: "Quality Work",
    description:
      "Every job done right the first time, using premium materials and proven techniques.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description:
      "We show up on time, communicate clearly, and stand behind every project we complete.",
  },
  {
    icon: Clock,
    title: "Free Estimates",
    description:
      "No-obligation, on-site estimates so you know exactly what to expect before we start.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description:
      "We're not done until you're happy with the result — it's that simple.",
  },
]

export function SiteWhyUs() {
  return (
    <section
      id="why-us"
      className="border-b border-border/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/artificial-turf.jpg"
                alt="Crew installing premium landscaping"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-primary/40 bg-card p-5 shadow-xl sm:block lg:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">
                    Trusted
                  </div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Local Pros
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
              Built on Trust.{" "}
              <span className="text-primary">Driven by Quality.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At C&amp;C Landscaping &amp; Hardscape, we treat every yard like
              our own. Our crew brings years of experience, the right
              equipment, and a genuine passion for transforming outdoor
              spaces.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
