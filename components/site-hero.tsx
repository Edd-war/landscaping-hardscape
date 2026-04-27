import Image from "next/image"
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-border/60"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-landscaping.jpg"
          alt="Beautifully landscaped front yard with green lawn and pavers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-36">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Free Estimates
          </div>

          <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Transforming Yards,{" "}
            <span className="text-primary">Building Dreams</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            C&amp;C Landscaping &amp; Hardscape LLC delivers quality work and
            reliable service across every project — from artificial turf and
            pavers to irrigation, tree trimming, and concrete work.
          </p>

          <ul className="mt-6 grid max-w-lg grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground">
            {[
              "Licensed Professionals",
              "Free On-Site Estimates",
              "Quality Materials",
              "Reliable Service",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary font-display text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
            >
              <a href="tel:6024465194">
                <Phone className="mr-2 h-5 w-5" />
                Call 602-446-5194
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-primary/50 bg-transparent font-display text-base font-bold uppercase tracking-wide text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <a href="sms:6024465194">
                <MessageCircle className="mr-2 h-5 w-5" />
                Text for Estimate
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            Quality Work · Reliable Service
            <span className="h-px w-8 bg-border" />
          </div>
        </div>

        {/* Floating phone callout card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:ml-auto">
            <div className="rounded-2xl border border-primary/30 bg-card/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Call or Text
              </p>
              <a
                href="tel:6024465194"
                className="mt-2 block font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl"
              >
                602-446-5194
              </a>
              <div className="mt-5 h-px bg-border" />
              <p className="mt-5 font-display text-lg uppercase tracking-wide text-foreground">
                Free Estimates
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Get a no-obligation quote for your next landscaping or hardscape
                project. We respond fast.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-lg border border-border bg-background/60 p-3">
                  <div className="font-display text-2xl font-bold text-primary">
                    7+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Services
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-background/60 p-3">
                  <div className="font-display text-2xl font-bold text-primary">
                    100%
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-1 -z-10 rounded-2xl bg-primary/20 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
