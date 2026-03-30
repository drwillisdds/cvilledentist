import { Metadata } from "next";
import BlogChoosingDentistContent from "@/components/blog/BlogChoosingDentistContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "How to Choose the Right Dentist in Charlottesville for Your Family",
  description:
    "Guide to choosing a family dentist in Charlottesville. Learn what to look for, questions to ask, credentials, technology, and location advantages.",
  openGraph: {
    title: "How to Choose the Right Dentist in Charlottesville for Your Family",
    description:
      "Guide to choosing a family dentist in Charlottesville. Learn what to look for, questions to ask, credentials, technology, and location advantages.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/blog/choosing-dentist-charlottesville",
  },
};

export default function BlogChoosingDentist() {
  return (
    <>
      <BlogChoosingDentistContent />
      <SchemaMarkup
        description="Guide to finding the right family dentist in Charlottesville, including credentials, technology, and patient experience."
      />
    </>
  );
}
