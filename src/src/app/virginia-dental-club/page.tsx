import { Metadata } from "next";
import VirginiaDentalClubContent from "@/components/VirginiaDentalClubContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Virginia Dental Club | No Insurance Dental Plan Charlottesville",
  description:
    "No dental insurance? The Virginia Dental Club covers cleanings, exams & X-rays plus discounts on all treatment. Charlottesville's affordable dental membership plan.",
  openGraph: {
    title: "Virginia Dental Club | No Insurance Dental Plan Charlottesville",
    description:
      "No dental insurance? The Virginia Dental Club covers cleanings, exams & X-rays plus discounts on all treatment. Charlottesville's affordable dental membership plan.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/virginia-dental-club",
  },
};

export default function VirginiaDentalClub() {
  return (
    <>
      <VirginiaDentalClubContent />
      <SchemaMarkup
        description="Virginia Dental Club membership plan at Willis & Associates Family Dentistry in Charlottesville. Affordable dental coverage without insurance, including cleanings, exams, X-rays, and treatment discounts."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Dental Membership Plan",
          availability: "By Membership",
        }}
      />
    </>
  );
}
