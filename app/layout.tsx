import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AD Geoscience | Subsurface Intelligence Partner",
  description:
    "AD Geoscience delivers integrated marine geoscience solutions — geophysical, geotechnical, metocean and construction support surveys — for offshore engineers and infrastructure developers in the Mediterranean and Black Sea.",
  keywords: [
    "marine geophysical survey",
    "marine geotechnical survey",
    "offshore survey",
    "subsurface intelligence",
    "Mediterranean offshore",
    "UXO survey",
    "metocean monitoring",
  ],
  openGraph: {
    title: "AD Geoscience | Subsurface Intelligence Partner",
    description:
      "Engineering confidence through survey excellence. A strategic partnership of Agea Survey and Denar Ocean Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
