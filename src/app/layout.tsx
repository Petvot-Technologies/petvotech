import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteLoader } from "@/components/layout/SiteLoader";
import { OrganizationSchema } from "@/components/StructuredData";
import { Providers } from "@/components/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Petvot Tech | Technology That Grows With Your Business",
    template: "%s | Petvot Tech",
  },
  description:
    "Enterprise-grade digital solutions without the enterprise complexity. Digital transformation, cloud services, custom software development.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  keywords: [
    "digital transformation Nigeria",
    "custom software development",
    "cloud solutions",
    "business automation",
    "IT consulting Nigeria",
  ],

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.petvotech.com",
    siteName: "Petvot Tech",
    title: "Petvot Tech | Technology That Grows With Your Business",
    description:
      "Enterprise-grade digital solutions without enterprise complexity.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Petvot Tech | Technology That Grows With Your Business",
    description:
      "Enterprise-grade digital solutions without enterprise complexity.",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.petvotech.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-neutral-0 font-body">
        <SiteLoader />
        <OrganizationSchema />

        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:z-[1600]"
        >
          Skip to main content
        </a>

        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>

        <SpeedInsights />

        {/* Zoho SalesIQ */}
        <Script id="zoho-salesiq-init" strategy="lazyOnload">
          {`window.$zoho=window.$zoho || {}; $zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>

        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siq91a72b5bf2625d4a3642ef733ecaecf8a0153d48c3dba4b639e387130faad6d9"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}