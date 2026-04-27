import { Phone, MessageCircle, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

// Simple TikTok glyph (lucide doesn't include it)
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.45 8.45 0 0 1-4.5-1.4V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .09v3.16A2.92 2.92 0 0 0 10.5 12 3 3 0 1 0 13.5 15V3h3Z" />
    </svg>
  )
}

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@cclandscapinghardscape",
    href: "https://instagram.com/cclandscapinghardscape",
  },
  {
    icon: TikTokIcon,
    label: "TikTok",
    handle: "C&C landscaping/hardscape",
    href: "https://www.tiktok.com/@cclandscapinghardscape",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "C&C landscaping/Hardscape",
    href: "https://facebook.com/cclandscapinghardscape",
  },
]

export function SiteContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border/60 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.82_0.23_135/0.18),transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground text-balance sm:text-5xl">
              Ready for a{" "}
              <span className="text-primary">Free Estimate?</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Call or text us today and we&apos;ll come out, take a look, and
              put together a custom quote for your project — at no cost to
              you.
            </p>

            <div className="mt-8 rounded-2xl border border-primary/30 bg-card p-6 sm:p-8">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-muted-foreground">
                Call or Text
              </p>
              <a
                href="tel:6024465194"
                className="mt-2 block font-display text-5xl font-bold tracking-tight text-accent sm:text-6xl"
              >
                602-446-5194
              </a>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 flex-1 bg-primary font-display text-base font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                >
                  <a href="tel:6024465194">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 flex-1 border-primary/50 bg-transparent font-display text-base font-bold uppercase tracking-wide text-foreground hover:bg-primary/10 hover:text-primary"
                >
                  <a href="sms:6024465194">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send Text
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
              Follow Our Work
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See our latest projects, transformations, and behind-the-scenes
              content.
            </p>

            <ul className="mt-6 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/60"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-display text-base font-bold uppercase tracking-wide text-foreground">
                        {s.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {s.handle}
                      </div>
                    </div>
                    <span className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                      Follow →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-card/60 p-5">
              <p className="font-display text-sm uppercase tracking-widest text-primary">
                Service Promise
              </p>
              <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-foreground">
                Quality Work. Reliable Service.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Transforming yards, building dreams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
