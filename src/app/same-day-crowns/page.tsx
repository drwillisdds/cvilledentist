import { Metadata } from "next";
import SameDayCrownsContent from "@/components/SameDayCrownsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Same-Day Dental Crowns in Charlottesville | CEREC Technology",
  description:
    "Complete dental crown restoration in one visit using CEREC technology. No temporary crown, no second appointment. Willis & Associates in Charlottesville.",
  openGraph: {
    title: "Same-Day Dental Crowns in Charlottesville | CEREC Technology",
    description:
      "Get a permanent dental crown the same day it's prepared. Digital design, milled in-office at Willis & Associates Family Dentistry.",
    type: "website",
    url: "https://cvilledentist.com/same-day-crowns",
  },
  alternates: {
    canonical: "https://cvilledentist.com/same-day-crowns",
  },
};

export default function SameDayCrownsPage() {
  return (
    <>
      <SchemaMarkup description="Same-day CEREC crowns in Charlottesville. Complete restoration in one appointment with Dr. Karamcheti at Willis & Associates Family Dentistry." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does a same-day crown take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A same-day CEREC crown typically takes 1-2 hours total from preparation to placement. This includes tooth preparation (15-20 minutes), digital scanning and design (10-15 minutes), and milling in the office (15-20 minutes). Faster than a traditional crown process spanning two appointments.",
                },
              },
              {
                "@type": "Question",
                name: "Are same-day crowns as strong as traditional crowns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. CEREC crowns use high-quality ceramic or composite materials that are durable and long-lasting. They're milled to precise specifications for a perfect fit. Many crowns last 10-15 years or longer with proper care.",
                },
              },
              {
                "@type": "Question",
                name: "What materials are used for same-day crowns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CEREC crowns can be made from high-strength ceramic (for front teeth), zirconia (extremely durable for back teeth), or hybrid materials. Dr. Karamcheti selects the best material for your tooth's location and function.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a temporary crown with CEREC?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Because the permanent crown is placed the same day, there's no need for an uncomfortable temporary crown. Your tooth is protected immediately with the final restoration.",
                },
              },
            ],
          }),
        }}
      />
      <SameDayCrownsContent />
    </>
  );
}
