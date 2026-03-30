import { Metadata } from "next";
import PediatricDentistryContent from "@/components/PediatricDentistryContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Pediatric Dentistry in Charlottesville VA | Kids' Dental Care",
  description:
    "Gentle, kid-friendly pediatric dentistry in Charlottesville. First visits, cleanings, sealants, fluoride treatment, and cavity care from Dr. Karamcheti. UVA families welcome.",
  openGraph: {
    title: "Pediatric Dentistry in Charlottesville VA | Kids' Dental Care",
    description:
      "Gentle, kid-friendly pediatric dentistry in Charlottesville. First visits, cleanings, sealants, fluoride treatment, and cavity care from Dr. Karamcheti. UVA families welcome.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/pediatric-dentistry",
  },
  keywords:
    "pediatric dentist Charlottesville, kids dentist, children's dental care, first dental visit, dental sealants, pediatric cleanings, fluoride treatment",
};

export default function PediatricDentistry() {
  return (
    <>
      <PediatricDentistryContent />
      <SchemaMarkup
        description="Pediatric dental care in Charlottesville VA for children and families. Dr. Karamcheti specializes in kid-friendly first visits, cleanings, sealants, and cavity treatment."
      />
    </>
  );
}
