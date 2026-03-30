import { Metadata } from "next";
import SmileMakeoversContent from "@/components/SmileMakeoversContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Smile Makeover Charlottesville VA | Complete Smile Design",
  description:
    "Ready for a total smile transformation? Dr. Karamcheti designs custom smile makeovers combining veneers, whitening, bonding & more in Charlottesville.",
  openGraph: {
    title: "Smile Makeover Charlottesville VA | Complete Smile Design",
    description:
      "Ready for a total smile transformation? Dr. Karamcheti designs custom smile makeovers combining veneers, whitening, bonding & more in Charlottesville.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/cosmetic-dentistry-charlottesville/smile-makeovers",
  },
};

export default function SmileMakeovers() {
  return (
    <>
      <SmileMakeoversContent />
      <SchemaMarkup
        description="Smile makeovers in Charlottesville by Dr. Karamcheti at Cville Dentist. Custom treatment plans combining veneers, bonding, whitening, and more for complete smile transformations."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Smile Makeover",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
