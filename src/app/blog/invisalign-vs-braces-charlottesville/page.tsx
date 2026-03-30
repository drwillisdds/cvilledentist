import { Metadata } from "next";
import BlogInvisalignVsBracesContent from "@/components/blog/BlogInvisalignVsBracesContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Invisalign vs. Braces in Charlottesville: What Adults Need to Know",
  description:
    "Compare Invisalign and braces for adult orthodontics in Charlottesville. Learn about candidacy, cost, timeline, comfort, and why professionals choose clear aligners.",
  openGraph: {
    title: "Invisalign vs. Braces in Charlottesville: What Adults Need to Know",
    description:
      "Compare Invisalign and braces for adult orthodontics in Charlottesville. Learn about candidacy, cost, timeline, comfort, and why professionals choose clear aligners.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/blog/invisalign-vs-braces-charlottesville",
  },
};

export default function BlogInvisalignVsBraces() {
  return (
    <>
      <BlogInvisalignVsBracesContent />
      <SchemaMarkup
        description="Invisalign vs. braces comparison for adult patients in Charlottesville, including cost, timeline, and Dr. Karamcheti's recommendations."
      />
    </>
  );
}
