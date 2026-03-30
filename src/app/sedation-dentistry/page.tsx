import { Metadata } from "next";
import SedationDentistryContent from "@/components/SedationDentistryContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Sedation Dentistry in Charlottesville VA | Anxiety-Free Dental Care",
  description:
    "Overcome dental anxiety with sedation dentistry at Willis & Associates. Nitrous oxide, oral sedation, and professional comfort protocols from Dr. Karamcheti.",
  openGraph: {
    title: "Sedation Dentistry in Charlottesville VA | Anxiety-Free Dental Care",
    description:
      "Overcome dental anxiety with sedation dentistry at Willis & Associates. Nitrous oxide, oral sedation, and professional comfort protocols from Dr. Karamcheti.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/sedation-dentistry",
  },
  keywords:
    "sedation dentistry Charlottesville, dental anxiety, sleep dentistry, nitrous oxide, oral sedation, anxiety-free dental care, conscious sedation",
};

export default function SedationDentistry() {
  return (
    <>
      <SedationDentistryContent />
      <SchemaMarkup
        description="Sedation dentistry and anxiety management services in Charlottesville VA. Dr. Karamcheti offers nitrous oxide and oral sedation for comfortable, stress-free dental care."
      />
    </>
  );
}
