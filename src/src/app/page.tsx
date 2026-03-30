import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Charlottesville Dentist | cvilledentist.com | Dr. Karamcheti",
  description:
    "Dr. Sowmya Karamcheti offers same-day appointments, in-house implants & gentle family dentistry in Charlottesville, VA. New patients welcome. Call today.",
  openGraph: {
    title: "Charlottesville Dentist | Dr. Sowmya Karamcheti, DDS, MHA",
    description:
      "Same-day appointments, in-house implants, family dentistry in Charlottesville, VA.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com",
  },
};

export default function Home() {
  return (
    <>
      <HomeContent />
      <SchemaMarkup />
    </>
  );
}
