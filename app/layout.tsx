import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "C&C Landscaping Hardscape LLC | Free Estimates 602-446-5194",
  description:
    "Quality landscaping and hardscape services. Artificial turf, pavers, gravel, irrigation, clean ups, tree trimming, and concrete work. Transforming yards, building dreams. Call or text 602-446-5194 for a free estimate.",
  generator: "v0.app",
  keywords: [
    "landscaping",
    "hardscape",
    "artificial turf",
    "pavers",
    "gravel",
    "irrigation",
    "tree trimming",
    "concrete work",
    "Arizona landscaping",
    "C&C Landscaping",
  ],
  openGraph: {
    title: "C&C Landscaping Hardscape LLC",
    description:
      "Quality work. Reliable service. Transforming yards, building dreams. Free estimates — Call or text 602-446-5194.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#0a0f0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
