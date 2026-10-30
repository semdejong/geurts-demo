import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Public_Sans, Red_Hat_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import { MobileBar } from "@/components/mobile-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const display = Big_Shoulders({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-shoulders",
});

const sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-public-sans",
});

const mono = Red_Hat_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-redhat",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · Maikel Geurts Metaalbewerking",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = {
  themeColor: content.colors.primary,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--steel": c.steel,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col">
        <a href="#inhoud" className="skip">
          Naar de inhoud
        </a>
        <SiteHeader />
        <main id="inhoud" className="min-w-0 flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
