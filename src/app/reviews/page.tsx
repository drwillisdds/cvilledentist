import { Metadata } from "next";
import ReviewsContent from "@/components/ReviewsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Patient Reviews | Charlottesville Dentist | cvilledentist.com",
  description:
    "Read real patient reviews for Cville Dentist in Charlottesville. See why patients trust us for general, cosmetic, implant, and emergency dental care.",
  openGraph: {
    title: "Patient Reviews | Charlottesville Dentist | cvilledentist.com",
    description:
      "Read real patient reviews for Cville Dentist in Charlottesville. See why patients trust us for general, cosmetic, implant, and emergency dental care.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/reviews",
  },
};

export default function Reviews() {
  return (
    <>
      <ReviewsContent />
      <SchemaMarkup
        description="Patient reviews for Cville Dentist in Charlottesville, VA. Trusted dentist for family dental care, implants, Invisalign, and cosmetic dentistry."
        customData={{
          "@type": ["LocalBusiness", "Dentist", "MedicalBusiness"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "147",
          },
          areaServed: "Charlottesville, VA",
        }}
      />
    </>
  );
}
