import { Metadata } from "next";
import BlogImplantsVsDenturesContent from "@/components/blog/BlogImplantsVsDenturesContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Implants vs. Dentures: Which Is Right for You?",
  description:
    "Compare dental implants and dentures on comfort, cost, longevity, bone health, and maintenance. Find the best tooth replacement solution for your needs.",
  openGraph: {
    title: "Dental Implants vs. Dentures: Which Is Right for You?",
    description:
      "Compare dental implants and dentures on comfort, cost, longevity, bone health, and maintenance. Find the best tooth replacement solution for your needs.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/blog/dental-implants-vs-dentures",
  },
};

export default function BlogImplantsVsDentures() {
  return (
    <>
      <BlogImplantsVsDenturesContent />
      <SchemaMarkup
        description="Comprehensive comparison of dental implants vs. dentures, including cost, comfort, longevity, and maintenance considerations."
      />
    </>
  );
}
