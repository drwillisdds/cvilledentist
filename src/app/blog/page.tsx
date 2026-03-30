import { Metadata } from "next";
import BlogIndexContent from "@/components/BlogIndexContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Blog | Charlottesville Dentist | Cville Dentist",
  description:
    "Read expert dental health tips from Dr. Sowmya Karamcheti. Learn about implants, Invisalign, emergencies, and affordable dental care in Charlottesville.",
  openGraph: {
    title: "Dental Blog | Charlottesville Dentist | Cville Dentist",
    description:
      "Read expert dental health tips from Dr. Sowmya Karamcheti. Learn about implants, Invisalign, emergencies, and affordable dental care in Charlottesville.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/blog",
  },
};

export default function Blog() {
  return (
    <>
      <BlogIndexContent />
      <SchemaMarkup
        description="Charlottesville dental blog with expert tips on implants, Invisalign, emergency dentistry, and affordable dental care."
      />
    </>
  );
}
