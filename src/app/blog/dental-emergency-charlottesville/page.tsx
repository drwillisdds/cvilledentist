import { Metadata } from "next";
import BlogDentalEmergencyContent from "@/components/blog/BlogDentalEmergencyContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "What to Do When You Have a Dental Emergency in Charlottesville",
  description:
    "Guide to handling dental emergencies in Charlottesville. Learn common emergencies, first aid tips, when to call vs ER, and how to get same-day care.",
  openGraph: {
    title: "What to Do When You Have a Dental Emergency in Charlottesville",
    description:
      "Guide to handling dental emergencies in Charlottesville. Learn common emergencies, first aid tips, when to call vs ER, and how to get same-day care.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/blog/dental-emergency-charlottesville",
  },
};

export default function BlogDentalEmergency() {
  return (
    <>
      <BlogDentalEmergencyContent />
      <SchemaMarkup
        description="Charlottesville dental emergency guide with first aid tips, when to call, and same-day emergency dentistry."
      />
    </>
  );
}
