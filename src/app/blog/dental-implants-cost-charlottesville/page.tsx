import { Metadata } from "next";
import BlogImplantsCostContent from "@/components/blog/BlogImplantsCostContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How Much Do Dental Implants Cost in Charlottesville, VA in 2026?",
  description:
    "Complete guide to dental implant costs in Charlottesville. Learn about single implants, All-on-4, financing options, insurance coverage, and Virginia Dental Club savings.",
  openGraph: {
    title: "How Much Do Dental Implants Cost in Charlottesville, VA in 2026?",
    description:
      "Complete guide to dental implant costs in Charlottesville. Learn about single implants, All-on-4, financing options, insurance coverage, and Virginia Dental Club savings.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/blog/dental-implants-cost-charlottesville",
  },
};

export default function BlogImplantsCost() {
  return (
    <>
      <BlogImplantsCostContent />
      <SchemaMarkup
        description="Guide to dental implant costs in Charlottesville, including single implants, All-on-4, and financing options."
      />
    </>
  );
}
