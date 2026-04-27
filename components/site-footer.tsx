import { Phone, Instagram, Facebook } from "lucide-react"

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

export function SiteFooter() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="font-display text-lg font-bold">C&amp;C</span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                  C&amp;C Landscaping
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Hardscape LLC
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Quality landscaping &amp; hardscape services. Free estimates on
              every project. Transforming yards, building dreams.
            </p>
            <a
              href="tel:6024465194"
              className="mt-5 inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-accent"
            >
              <Phone className="h-5 w-5" />
              602-446-5194
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Artificial Turf</li>
              <li>Pavers</li>
              <li>Gravel</li>
              <li>Irrigation</li>
              <li>Clean Ups</li>
              <li>Tree Trimming</li>
              <li>Concrete Work</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/cclandscapinghardscape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  cclandscapinghardscape
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@cclandscapinghardscape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <TikTokIcon className="h-4 w-4" />
                  C&amp;C landscaping/hardscape
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/cclandscapinghardscape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-4 w-4" />
                  C&amp;C landscaping/Hardscape
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} C&amp;C Landscaping Hardscape LLC. All
            rights reserved.
          </p>
          <p className="text-xs uppercase tracking-widest text-primary">
            Free Estimates · 602-446-5194
          </p>
        </div>
      </div>
    </footer>
  )
}
