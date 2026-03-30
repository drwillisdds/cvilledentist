import { Metadata } from "next";
import TechnologyContent from "@/components/TechnologyContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Technology Charlottesville | Digital X-Rays & iTero",
  description:
    "Advanced dental technology at Willis & Associates in Charlottesville. Digital X-rays, iTero scanners, guided implant planning — modern precision for better outcomes.",
  openGraph: {
    title: "Dental Technology Charlottesville | Digital X-Rays & iTero",
    description:
      "Advanced dental technology at Willis & Associates in Charlottesville. Digital X-rays, iTero scanners, guided implant planning — modern precision for better outcomes.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/about/technology",
  },
};

export default function Technology() {
  return (
    <>
      <TechnologyContent />
      <SchemaMarkup
        description="Willis & Associates in Charlottesville uses advanced dental technology including digital X-rays (80% less radiation), iTero digital scanners, intraoral cameras, and computer-guided implant surgery for precise outcomes."
      />
    </>
  );
}
