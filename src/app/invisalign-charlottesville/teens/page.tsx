import { Metadata } from "next";
import InvisalignTeensContent from "@/components/InvisalignTeensContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Invisalign for Teens Charlottesville VA | Teen Aligners",
  description:
    "Invisalign Teen in Charlottesville — clear aligners designed for active teenage lifestyles. Dr. Karamcheti offers free smile assessments for teens.",
  openGraph: {
    title: "Invisalign for Teens Charlottesville VA | Teen Aligners",
    description:
      "Invisalign Teen in Charlottesville — clear aligners designed for active teenage lifestyles. Dr. Karamcheti offers free smile assessments for teens.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/invisalign-charlottesville/teens",
  },
};

export default function InvisalignTeens() {
  return (
    <>
      <InvisalignTeensContent />
      <SchemaMarkup
        description="Invisalign Teen clear aligner treatment in Charlottesville designed for teenagers. Compliance monitoring, no food restrictions. Dr. Karamcheti offers free assessments."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Invisalign for Teens",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
