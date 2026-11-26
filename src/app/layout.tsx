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
  title:
    "Rooftron Infra Solution Pvt. Ltd. | PEB, Roofing Sheets & Structural Steel",
  description:
    "Rooftron Infra Solution Private Limited (CIN: U43292BR2026PTC089582) - Manufacturer & supplier of Pre-Engineered Buildings (PEB), Colour-Coated Roof Sheets, Highway Crash Barriers, Cable Trays, and Structural Steel in Patna, Bihar.",
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
        {children}
      </body>
    </html>
  );
}
