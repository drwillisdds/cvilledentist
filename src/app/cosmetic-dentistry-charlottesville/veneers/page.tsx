import { Metadata } from "next";
import VeneersContent from "@/components/VeneersContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Porcelain Veneers Charlottesville VA | Natural Results",
  description:
    "Custom porcelain veneers in Charlottesville by Dr. Karamcheti. Natural-looking results — not the obvious Hollywood look. Free smile consultation.",
  openGraph: {
    title: "Porcelain Veneers Charlottesville VA | Natural Results",
    description:
      "Custom porcelain veneers in Charlottesville by Dr. Karamcheti. Natural-looking results — not the obvious Hollywood look. Free smile consultation.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/cosmetic-dentistry-charlottesville/veneers",
  },
};

export default function Veneers() {
  return (
    <>
      <VeneersContent />
      <SchemaMarkup
        description="Porcelain veneers in Charlottesville by Dr. Karamcheti at Cville Dentist. Custom-designed veneers for natural-looking smile transformations. No Hollywood look — just your best smile."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Porcelain Veneers",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
