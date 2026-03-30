import { Metadata } from "next";
import WhiteningContent from "@/components/WhiteningContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Teeth Whitening Charlottesville VA | Professional Results",
  description:
    "Professional teeth whitening in Charlottesville — dramatically brighter results than drugstore strips. In-office and take-home options at Willis & Associates.",
  openGraph: {
    title: "Teeth Whitening Charlottesville VA | Professional Results",
    description:
      "Professional teeth whitening in Charlottesville — dramatically brighter results than drugstore strips. In-office and take-home options at Willis & Associates.",
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
        description="Professional teeth whitening in Charlottesville by Dr. Karamcheti at Willis & Associates. In-office and custom take-home whitening options with dramatic results."
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
