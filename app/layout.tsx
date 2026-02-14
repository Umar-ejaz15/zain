import type { Metadata } from "next";
import { Inter, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "./HomeComponents/Footer";
import Navbar from "./HomeComponents/Navbar";
import { CaseStudiesProvider } from "@/context/CaseStudiesContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  weight: "400",
  subsets: ["latin"],
});

// ✅ Full SEO Metadata (no favicons)
export const metadata: Metadata = {
  title: "Zain Ameen | Marketing Strategist & Growth Expert",
  description:
    "I help businesses scale faster with SEO, automation, and community-driven strategies. 25M+ impressions, $18M+ raised, and 6.5x ROI average return.",
  keywords: [
    "Zain Ameen",
    "Marketing Strategist",
    "Growth Expert",
    "SEO Specialist",
    "Social Media Marketing",
    "Product Marketing",
    "Community Building",
    "Content Marketing",
    "Automation",
  ],
  authors: [{ name: "Zain Ameen", url: "https://www.zainameen.com" }],
  creator: "Zain Ameen",
  publisher: "Zain Ameen",
  metadataBase: new URL("https://www.zainameen.com"),
  openGraph: {
    title: "Zain Ameen | Marketing Strategist & Growth Expert",
    description:
      "Turning quiet brands into loud voices. From 600 ➝ 150K views in 40 days. $2M+ savings generated. Let's scale your business together.",
    url: "https://www.zainameen.com",
    siteName: "Zain Ameen",
    images: [
      {
        url: "https://www.zainameen.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zain Ameen Marketing Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@techeon_ai",
    creator: "@zainnameen",
    title: "Zain Ameen | Marketing Strategist & Growth Expert",
    description:
      "Scaling brands with SEO, automation & social growth. 25M+ impressions, $18M+ raised, 6.5x ROI avg.",
    images: ["https://www.zainameen.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.zainameen.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data (Person + Contact Info + Links) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zain Ameen",
              jobTitle: "Marketing Strategist & Growth Expert",
              url: "https://www.zainameen.com",
              email: ["contact@zainameen.com", "hello@zainameen.com"],
              sameAs: [
                "https://www.linkedin.com/in/zain-ameen/",
                "https://x.com/zainnameen",
                "https://calendly.com/zain-ameen",
                "https://techeon.org/",
                "https://www.linkedin.com/company/techeon-partners/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Zain Ameen Marketing",
                url: "https://www.zainameen.com",
              },
              knowsAbout: [
                "SEO",
                "Social Media Marketing",
                "Product Marketing",
                "Community Growth",
                "Content Strategy",
                "Automation",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "contact@zainameen.com",
                  contactType: "Business inquiries",
                },
                {
                  "@type": "ContactPoint",
                  email: "hello@zainameen.com",
                  contactType: "Collaborations",
                },
              ],
            }),
          }}
        />

        {/* ✅ Optional: WebSite schema for rich search results */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zain Ameen",
              url: "https://www.zainameen.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.zainameen.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} ${atkinson.variable} antialiased`}
      >
        <CaseStudiesProvider>
          <Navbar />
          {children}
          <Footer />
        </CaseStudiesProvider>

        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T3ZK018Y8C"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T3ZK018Y8C');
          `}
        </Script>
      </body>
    </html>
  );
}
