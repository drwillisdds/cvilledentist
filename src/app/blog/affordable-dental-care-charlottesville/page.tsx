import { Metadata } from "next";
import BlogAffordableCareContent from "@/components/blog/BlogAffordableCareContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How to Get Affordable Dental Care in Charlottesville Without Insurance",
  description:
    "Discover affordable dental care options in Charlottesville. Learn about Virginia Dental Club membership, payment plans, preventive care savings, and community resources.",
  openGraph: {
    title: "How to Get Affordable Dental Care in Charlottesville Without Insurance",
    description:
      "Discover affordable dental care options in Charlottesville. Learn about Virginia Dental Club membership, payment plans, preventive care savings, and community resources.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/blog/affordable-dental-care-charlottesville",
  },
};

export default function BlogAffordableDentalCare() {
  return (
    <>
      <BlogAffordableCareContent />
      <SchemaMarkup
        description="Guide to affordable dental care in Charlottesville including Virginia Dental Club membership plan, financing, and preventive care."
      />
    </>
  );
}
