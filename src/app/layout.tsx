import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rooftroninfra.com"),
  title:
    "Rooftron Infra Solution Pvt. Ltd. | PEB, Roofing Sheets & Structural Steel",
  description:
    "Rooftron Infra Solution Private Limited (CIN: U43292BR2026PTC089582) - Manufacturer & supplier of Pre-Engineered Buildings (PEB), Colour-Coated Roof Sheets, Highway Crash Barriers, Cable Trays, and Structural Steel in Patna, Bihar.",
  keywords: [
    "rooftroninfra",
    "Rooftron Infra",
    "Rooftron Infra Solution Pvt Ltd",
    "Pre-Engineered Buildings Patna",
    "PEB Manufacturer Bihar",
    "Colour-Coated Roof Sheets",
    "Highway Crash Barriers",
    "Cable Trays",
    "Structural Steel Patna",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Rooftron Infra Solution Pvt. Ltd. | PEB, Roofing Sheets & Structural Steel",
    description:
      "Manufacturer & supplier of Pre-Engineered Buildings (PEB), Colour-Coated Roof Sheets, Highway Crash Barriers, Cable Trays, and Structural Steel in Patna, Bihar.",
    url: "https://www.rooftroninfra.com",
    siteName: "Rooftron Infra Solution Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rooftron Infra Solution Pvt. Ltd. | PEB, Roofing Sheets & Structural Steel",
    description:
      "Pre-Engineered Buildings (PEB), Colour-Coated Roof Sheets, Highway Crash Barriers & Structural Steel in Patna, Bihar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rooftron Infra Solution Private Limited",
  alternateName: ["Rooftron Infra", "rooftroninfra", "Rooftron"],
  url: "https://www.rooftroninfra.com",
  email: "sales@rooftroninfra.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit No Ccpt Bo402, City Centre Mall, Lodhipur",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800001",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}
    >
      <body className="bg-white text-steel-900 font-sans antialiased selection:bg-navy-900 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
