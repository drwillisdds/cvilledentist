import { Metadata } from "next";
import TMJTreatmentContent from "@/components/TMJTreatmentContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "TMJ Treatment in Charlottesville VA | Jaw Pain Relief",
  description:
    "Comprehensive TMJ and TMD treatment in Charlottesville. Digital imaging diagnosis, night guards, occlusal adjustment, and physical therapy coordination with Dr. Karamcheti.",
  openGraph: {
    title: "TMJ Treatment in Charlottesville VA | Jaw Pain Relief",
    description:
      "Comprehensive TMJ and TMD treatment in Charlottesville. Digital imaging diagnosis, night guards, occlusal adjustment, and physical therapy coordination with Dr. Karamcheti.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/tmj-treatment",
  },
  keywords:
    "TMJ treatment Charlottesville, jaw pain treatment, TMD specialist, temporomandibular joint disorder, bite correction, night guard, occlusal adjustment",
};

export default function TMJTreatment() {
  return (
    <>
      <TMJTreatmentContent />
      <SchemaMarkup
        description="TMJ and TMD treatment services in Charlottesville VA. Dr. Karamcheti diagnoses jaw joint disorders with digital imaging and offers night guards, occlusal adjustment, and treatment coordination."
      />
    </>
  );
}
