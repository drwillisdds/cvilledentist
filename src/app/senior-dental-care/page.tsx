import { Metadata } from "next";
import SeniorDentalCareContent from "@/components/SeniorDentalCareContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Senior Dental Care in Charlottesville VA | Geriatric Dentistry",
  description:
    "Specialized senior dental care addressing dry mouth, gum disease, medication interactions, dentures, and implants. Medicare-friendly. Virginia Dental Club community.",
  openGraph: {
    title: "Senior Dental Care in Charlottesville VA | Geriatric Dentistry",
    description:
      "Specialized senior dental care addressing dry mouth, gum disease, medication interactions, dentures, and implants. Medicare-friendly. Virginia Dental Club community.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/senior-dental-care",
  },
  keywords:
    "senior dentist Charlottesville, elderly dental care, geriatric dentistry, dry mouth treatment, denture care, senior implants, Medicare dental care",
};

export default function SeniorDentalCare() {
  return (
    <>
      <SeniorDentalCareContent />
      <SchemaMarkup
        description="Senior dental care and geriatric dentistry services in Charlottesville VA. Dr. Karamcheti addresses unique needs of older adults including dry mouth, gum disease, dentures, and implant options."
      />
    </>
  );
}
