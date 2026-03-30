import { Metadata } from "next";
import InvisalignContent from "@/components/InvisalignContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Invisalign Charlottesville VA | Clear Aligners | Dr. Karamcheti",
  description:
    "Straighten your teeth with Invisalign in Charlottesville. Dr. Karamcheti offers clear aligner treatment for teens and adults. Free smile assessment available.",
  openGraph: {
    title: "Invisalign Charlottesville VA | Clear Aligners | Dr. Karamcheti",
    description:
      "Straighten your teeth with Invisalign in Charlottesville. Dr. Karamcheti offers clear aligner treatment for teens and adults. Free smile assessment available.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/invisalign-charlottesville",
  },
};

export default function Invisalign() {
  return (
    <>
      <InvisalignContent />
      <SchemaMarkup
        description="Invisalign clear aligner treatment in Charlottesville by Dr. Sowmya Karamcheti. Straighter teeth without metal braces. Free smile assessment."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Invisalign Clear Aligner Treatment",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
