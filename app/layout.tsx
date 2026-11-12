import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Noto_Sans_Arabic } from "next/font/google";
import Providers from "@/components/Providers";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Financial Services Deira Dubai`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Visit Delta Center – Baniyas Square Branch opposite Baniyas Metro Station in Deira, Dubai. Call +971 4 323 9926 for financial services branch support.",
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Financial Services Deira Dubai`,
    description:
      "Conveniently located opposite Baniyas Metro Station, Exit 2, Deira, Dubai. Call +971 4 323 9926.",
    images: [
      {
        url: siteConfig.images.hero,
        width: 2400,
        height: 1600,
        alt: "Dubai skyline near Delta Center Baniyas Square Branch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Financial Services Deira Dubai`,
    description:
      "Delta Center Baniyas Square Branch – opposite Baniyas Metro Station, Deira, Dubai. Call +971 4 323 9926.",
    images: [siteConfig.images.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#102B46",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteConfig.fullName,
  description:
    "Delta Center Baniyas Square Branch provides financial services branch support in Deira, Dubai, opposite Baniyas Metro Station.",
  telephone: siteConfig.phoneTel,
  url: siteConfig.url,
  image: siteConfig.images.hero,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Exit 2, Opposite Baniyas Metro Station",
    addressLocality: "Deira",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${arabic.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
