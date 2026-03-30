import { Metadata } from "next";
import InvisalignCostContent from "@/components/InvisalignCostContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Invisalign Cost Charlottesville VA | Pricing & Financing",
  description:
    "How much does Invisalign cost in Charlottesville? Typical range $3,500-$6,500 at Willis & Associates. Insurance, financing, and Virginia Dental Club discounts.",
  openGraph: {
    title: "Invisalign Cost Charlottesville VA | Pricing & Financing",
    description:
      "How much does Invisalign cost in Charlottesville? Typical range $3,500-$6,500 at Willis & Associates. Insurance, financing, and Virginia Dental Club discounts.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/invisalign-charlottesville/cost",
  },
};

export default function InvisalignCost() {
  return (
    <>
      <InvisalignCostContent />
      <SchemaMarkup
        description="Invisalign cost in Charlottesville: $3,500-$6,500 depending on case complexity. Includes scans, aligners, retainers, and follow-ups. Insurance and financing available."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Invisalign Treatment and Pricing",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
