import { Metadata } from "next";
import WisdomTeethContent from "@/components/WisdomTeethContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Wisdom Teeth Removal in Charlottesville VA | Dr. Karamcheti",
  description:
    "Expert wisdom teeth extraction and impacted tooth removal in Charlottesville. In-house treatment with sedation. Safe, comfortable care from Dr. Karamcheti.",
  openGraph: {
    title: "Wisdom Teeth Removal in Charlottesville VA | Dr. Karamcheti",
    description:
      "Expert wisdom teeth extraction and impacted tooth removal in Charlottesville. In-house treatment with sedation. Safe, comfortable care from Dr. Karamcheti.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/wisdom-teeth",
  },
  keywords:
    "wisdom teeth removal Charlottesville, wisdom tooth extraction, impacted wisdom teeth, third molar extraction, tooth removal, UVA students dentist",
};

export default function WisdomTeeth() {
  return (
    <>
      <WisdomTeethContent />
      <SchemaMarkup
        description="Professional wisdom teeth extraction and removal services in Charlottesville VA. Dr. Karamcheti performs impacted tooth removal in-house with sedation options."
      />
    </>
  );
}
