import { Metadata } from "next";
import CosmeticDentistryContent from "@/components/CosmeticDentistryContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Cosmetic Dentist Charlottesville VA | Veneers, Bonding, Whitening",
  description:
    "Transform your smile with cosmetic dentistry in Charlottesville. Dr. Karamcheti offers veneers, bonding, whitening & smile makeovers. Schedule a consultation.",
  openGraph: {
    title: "Cosmetic Dentist Charlottesville VA | Veneers, Bonding, Whitening",
    description:
      "Transform your smile with cosmetic dentistry in Charlottesville. Dr. Karamcheti offers veneers, bonding, whitening & smile makeovers. Schedule a consultation.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/cosmetic-dentistry-charlottesville",
  },
};

export default function CosmeticDentistry() {
  return (
    <>
      <CosmeticDentistryContent />
      <SchemaMarkup
        description="Cosmetic dentistry services in Charlottesville including veneers, bonding, whitening, and smile makeovers. Dr. Sowmya Karamcheti specializes in natural-looking results."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Cosmetic Dentistry",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
