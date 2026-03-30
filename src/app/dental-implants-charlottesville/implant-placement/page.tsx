import { Metadata } from "next";
import ImplantPlacementContent from "@/components/ImplantPlacementContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Implant Placement Charlottesville | In-House Surgery",
  description:
    "Dr. Karamcheti places dental implants in-house at our Charlottesville office. No referral to an oral surgeon. Computer-guided precision. Free consultation.",
  openGraph: {
    title: "Dental Implant Placement Charlottesville | In-House Surgery",
    description:
      "Dr. Karamcheti places dental implants in-house at our Charlottesville office. No referral to an oral surgeon. Computer-guided precision. Free consultation.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/dental-implants-charlottesville/implant-placement",
  },
};

export default function ImplantPlacement() {
  return (
    <>
      <ImplantPlacementContent />
      <SchemaMarkup
        description="Dr. Karamcheti places dental implants in-house at Cville Dentist in Charlottesville using computer-guided surgery. No referral to an oral surgeon needed. Most patients return to normal activities within 24-48 hours."
      />
    </>
  );
}
