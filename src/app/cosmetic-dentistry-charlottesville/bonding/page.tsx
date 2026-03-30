import { Metadata } from "next";
import BondingContent from "@/components/BondingContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Bonding Charlottesville VA | Same-Day Smile Fix",
  description:
    "Fix chips, gaps, and discoloration in one visit with dental bonding in Charlottesville. Dr. Karamcheti — affordable cosmetic results starting at $300/tooth.",
  openGraph: {
    title: "Dental Bonding Charlottesville VA | Same-Day Smile Fix",
    description:
      "Fix chips, gaps, and discoloration in one visit with dental bonding in Charlottesville. Dr. Karamcheti — affordable cosmetic results starting at $300/tooth.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/cosmetic-dentistry-charlottesville/bonding",
  },
};

export default function Bonding() {
  return (
    <>
      <BondingContent />
      <SchemaMarkup
        description="Dental bonding in Charlottesville by Dr. Karamcheti at Willis & Associates. Same-day cosmetic repairs for chips, gaps, and stains. Affordable alternative to veneers."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Dental Bonding",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
