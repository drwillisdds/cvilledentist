import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cville Dentist | Charlottesville Dentist",
  description:
    "Premium dental care in Charlottesville, VA. Led by Dr. Sowmya Karamcheti, DDS, MHA. Implants, cosmetic dentistry, Invisalign, and emergency services.",
  keywords:
    "dentist Charlottesville, dental implants, Invisalign, cosmetic dentistry, emergency dentist",
  authors: [{ name: "Cville Dentist" }],
  openGraph: {
    title: "Cville Dentist",
    description: "Premium dental care in Charlottesville, VA",
    type: "website",
    url: "https://www.cvilledentist.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
