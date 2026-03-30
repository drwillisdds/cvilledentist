import { Metadata } from "next";
import InvisalignAdultsContent from "@/components/InvisalignAdultsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Invisalign for Adults Charlottesville | Clear Aligners",
  description:
    "Straighten your teeth discreetly with Invisalign for adults in Charlottesville. Dr. Karamcheti treats adults of all ages. Free smile assessment.",
  openGraph: {
    title: "Invisalign for Adults Charlottesville | Clear Aligners",
    description:
      "Straighten your teeth discreetly with Invisalign for adults in Charlottesville. Dr. Karamcheti treats adults of all ages. Free smile assessment.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/invisalign-charlottesville/adults",
  },
};

export default function InvisalignAdults() {
  return (
    <>
      <InvisalignAdultsContent />
      <SchemaMarkup
        description="Invisalign clear aligner treatment for adults in Charlottesville by Dr. Sowmya Karamcheti. No age limit. Straighten teeth discreetly without metal braces."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Invisalign for Adults",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
