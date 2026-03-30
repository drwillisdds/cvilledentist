import { Metadata } from "next";
import WhiteningContent from "@/components/WhiteningContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Teeth Whitening Charlottesville VA | Professional Results",
  description:
    "Professional teeth whitening in Charlottesville — dramatically brighter results than drugstore strips. In-office and take-home options at Cville Dentist.",
  openGraph: {
    title: "Teeth Whitening Charlottesville VA | Professional Results",
    description:
      "Professional teeth whitening in Charlottesville — dramatically brighter results than drugstore strips. In-office and take-home options at Cville Dentist.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/cosmetic-dentistry-charlottesville/whitening",
  },
};

export default function Whitening() {
  return (
    <>
      <WhiteningContent />
      <SchemaMarkup
        description="Professional teeth whitening in Charlottesville by Dr. Karamcheti at Cville Dentist. In-office and custom take-home whitening options with dramatic results."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Teeth Whitening",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
