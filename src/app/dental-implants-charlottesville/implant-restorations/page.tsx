import { Metadata } from "next";
import ImplantRestorationsContent from "@/components/ImplantRestorationsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Implant Restorations Charlottesville | Crowns on Implants",
  description:
    "Custom implant crowns and restorations at Cville Dentist in Charlottesville. Dr. Karamcheti completes the entire implant process — placement through final crown — under one roof.",
  openGraph: {
    title: "Implant Restorations Charlottesville | Crowns on Implants",
    description:
      "Custom implant crowns and restorations at Cville Dentist in Charlottesville. Dr. Karamcheti completes the entire implant process — placement through final crown — under one roof.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/dental-implants-charlottesville/implant-restorations",
  },
};

export default function ImplantRestorations() {
  return (
    <>
      <ImplantRestorationsContent />
      <SchemaMarkup
        description="Dr. Karamcheti designs and places custom implant crowns at Cville Dentist in Charlottesville. Same doctor handles both placement and restoration for precise fit and natural appearance."
      />
    </>
  );
}
