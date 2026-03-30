import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Dr. Sowmya Karamcheti DDS MHA | Charlottesville Dentist",
  description:
    "Meet Dr. Sowmya Karamcheti, Charlottesville's trusted family and cosmetic dentist. Warm, precise, and anxiety-free care for every patient.",
  openGraph: {
    title: "About Dr. Sowmya Karamcheti DDS MHA | Charlottesville Dentist",
    description:
      "Meet Dr. Sowmya Karamcheti, Charlottesville's trusted family and cosmetic dentist. Warm, precise, and anxiety-free care for every patient.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/about",
  },
};

export default function About() {
  return (
    <>
      <AboutContent />
      <SchemaMarkup
        description="Dr. Sowmya Karamcheti, DDS, MHA — Charlottesville's trusted family and cosmetic dentist offering in-house implants, Invisalign, and gentle dental care."
      />
    </>
  );
}
