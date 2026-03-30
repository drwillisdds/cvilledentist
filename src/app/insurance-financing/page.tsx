import { Metadata } from "next";
import InsuranceFinancingContent from "@/components/InsuranceFinancingContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Insurance & Financing in Charlottesville | cvilledentist.com",
  description:
    "Maximize your dental benefits at Cville Dentist. We accept all major insurance, offer Virginia Dental Club membership, CareCredit financing, and transparent pricing.",
  openGraph: {
    title: "Dental Insurance & Financing in Charlottesville | cvilledentist.com",
    description:
      "Maximize your dental benefits at Cville Dentist. We accept all major insurance, offer Virginia Dental Club membership, CareCredit financing, and transparent pricing.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/insurance-financing",
  },
};

export default function InsuranceFinancing() {
  return (
    <>
      <InsuranceFinancingContent />
      <SchemaMarkup
        description="Dental insurance and financing options at Cville Dentist in Charlottesville, VA. Affordable dental care for all patients."
        customData={{
          "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
          areaServed: "Charlottesville, VA",
        }}
      />
    </>
  );
}
