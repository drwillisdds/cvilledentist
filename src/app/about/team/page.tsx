import { Metadata } from "next";
import TeamContent from "@/components/TeamContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Our Dental Team | Charlottesville Dentist | Dr. Karamcheti",
  description:
    "Meet the dental team at Cville Dentist in Charlottesville. Experienced, stable, and genuinely warm — the same familiar faces at every visit.",
  openGraph: {
    title: "Our Dental Team | Charlottesville Dentist | Dr. Karamcheti",
    description:
      "Meet the dental team at Cville Dentist in Charlottesville. Experienced, stable, and genuinely warm — the same familiar faces at every visit.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/about/team",
  },
};

export default function Team() {
  return (
    <>
      <TeamContent />
      <SchemaMarkup
        description="Meet the dental team at Cville Dentist in Charlottesville. Experienced, stable team led by Dr. Sowmya Karamcheti, DDS, MHA. Same familiar faces at every visit."
      />
    </>
  );
}
