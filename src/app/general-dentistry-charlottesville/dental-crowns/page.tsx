import { Metadata } from "next";
import DentalCrownsContent from "@/components/general-dentistry/DentalCrownsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Crowns in Charlottesville VA | Willis & Associates",
  description: "Restore damaged teeth with durable porcelain and zirconia crowns. Same-day crown technology available. Expert dental crown work by Dr. Sowmya Karamcheti in Charlottesville.",
  openGraph: {
    title: "Dental Crowns in Charlottesville VA | Willis & Associates",
    description: "Restore damaged teeth with durable porcelain and zirconia crowns. Same-day crown technology available. Expert dental crown work by Dr. Sowmya Karamcheti in Charlottesville.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/dental-crowns",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/dental-crowns",
  },
};

export default function DentalCrownsPage() {
  return (
    <>
      <SchemaMarkup description="Professional dental crown placement in Charlottesville VA. Porcelain, zirconia, and same-day crowns available." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a dental crown?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dental crown is a tooth-shaped cap that covers a damaged, weakened, or decayed tooth. It restores the tooth's strength, shape, and appearance. Crowns are made from materials like porcelain, zirconia, or porcelain-fused-to-metal.",
                },
              },
              {
                "@type": "Question",
                name: "When do I need a crown?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A crown may be needed after a large cavity, root canal, broken tooth, tooth with a large filling, or to strengthen a weak tooth. Dr. Karamcheti will examine your tooth and discuss whether a crown is the best option.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a dental crown last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With proper care, a well-made crown typically lasts 10-15 years or longer. The lifespan depends on the material, your bite, and your oral hygiene habits.",
                },
              },
              {
                "@type": "Question",
                name: "Does Willis & Associates offer same-day crowns?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we have same-day crown technology available for many cases. This allows us to prepare your tooth and place a finished crown in a single appointment.",
                },
              },
            ],
          }),
        }}
      />
      <DentalCrownsContent />
    </>
  );
}
