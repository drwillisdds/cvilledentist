import { Metadata } from "next";
import AlloOn4Content from "@/components/AlloOn4Content";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "All-on-4 Dental Implants Charlottesville VA | Full Arch",
  description:
    "All-on-4 full-arch dental implants in Charlottesville. Replace an entire arch of teeth with just 4 implants. Dr. Karamcheti — consultation available.",
  openGraph: {
    title: "All-on-4 Dental Implants Charlottesville VA | Full Arch",
    description:
      "All-on-4 full-arch dental implants in Charlottesville. Replace an entire arch of teeth with just 4 implants. Dr. Karamcheti — consultation available.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/dental-implants-charlottesville/all-on-4",
  },
};

export default function AlloOn4() {
  return (
    <>
      <AlloOn4Content />
      <SchemaMarkup
        description="All-on-4 dental implants in Charlottesville replace a full arch of teeth using four strategically placed implants. Dr. Karamcheti offers full-arch implant consultations at Cville Dentist."
      />
    </>
  );
}
