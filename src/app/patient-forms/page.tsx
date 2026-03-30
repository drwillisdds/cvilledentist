import { Metadata } from "next";
import PatientFormsContent from "@/components/PatientFormsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "New Patient Forms | Charlottesville Dentist | cvilledentist.com",
  description:
    "Download new patient forms before your first visit at Willis & Associates Family Dentistry. What to bring, parking, and what to expect.",
  openGraph: {
    title: "New Patient Forms | Charlottesville Dentist | cvilledentist.com",
    description:
      "Download new patient forms before your first visit at Willis & Associates Family Dentistry. What to bring, parking, and what to expect.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/patient-forms",
  },
};

export default function PatientForms() {
  return (
    <>
      <PatientFormsContent />
      <SchemaMarkup
        description="Patient forms and new patient information for Willis & Associates Family Dentistry in Charlottesville, VA."
        customData={{
          "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
          areaServed: "Charlottesville, VA",
        }}
      />
    </>
  );
}
