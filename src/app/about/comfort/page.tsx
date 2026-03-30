import { Metadata } from "next";
import ComfortContent from "@/components/ComfortContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Anxiety-Free Dentist Charlottesville | Gentle Care",
  description:
    "Dental anxiety? Dr. Karamcheti's Charlottesville practice is designed for nervous patients. Calm environment, patient-paced care, and a team that listens.",
  openGraph: {
    title: "Anxiety-Free Dentist Charlottesville | Gentle Care",
    description:
      "Dental anxiety? Dr. Karamcheti's Charlottesville practice is designed for nervous patients. Calm environment, patient-paced care, and a team that listens.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/about/comfort",
  },
};

export default function Comfort() {
  return (
    <>
      <ComfortContent />
      <SchemaMarkup
        description="Cville Dentist in Charlottesville specializes in treating anxious patients. Dr. Karamcheti offers calm, patient-paced care, sedation options, and a comfortable environment for nervous patients."
      />
    </>
  );
}
