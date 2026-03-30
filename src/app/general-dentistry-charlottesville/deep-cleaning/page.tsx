import { Metadata } from "next";
import DeepCleaningContent from "@/components/general-dentistry/DeepCleaningContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Deep Cleaning & Scaling in Charlottesville | Cville Dentist",
  description: "Scaling and root planing (deep cleaning) for gum disease in Charlottesville. Dr. Sowmya Karamcheti uses gentle techniques to restore gum health.",
  openGraph: {
    title: "Deep Cleaning & Scaling in Charlottesville | Cville Dentist",
    description: "Deep cleaning and scaling root planing for gum disease treatment in Charlottesville with Dr. Sowmya Karamcheti.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/deep-cleaning",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/deep-cleaning",
  },
};

export default function DeepCleaningPage() {
  return (
    <>
      <SchemaMarkup description="Deep cleaning and scaling root planing in Charlottesville VA - treatment for gum disease and periodontal health." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is scaling and root planing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Scaling and root planing is a non-surgical procedure that removes plaque and tartar from tooth surfaces and below the gumline. Scaling removes buildup from the tooth surface, while root planing smooths the root surface, helping gums reattach and halting gum disease progression.",
                },
              },
              {
                "@type": "Question",
                name: "Is deep cleaning painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deep cleaning can cause some sensitivity, but Dr. Karamcheti uses local anesthesia to numb the area, making the procedure much more comfortable. Some patients experience slight discomfort during healing, but most find it manageable.",
                },
              },
              {
                "@type": "Question",
                name: "How long does deep cleaning take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deep cleaning typically requires 2-4 appointments, usually scheduled 1-2 weeks apart. Each appointment handles a different area of the mouth. The entire mouth may be completed in 2-4 weeks.",
                },
              },
              {
                "@type": "Question",
                name: "When is deep cleaning necessary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deep cleaning is recommended when gum disease is present, typically indicated by measurements deeper than 3-4 mm between teeth and gums. Dr. Karamcheti diagnoses the need for deep cleaning based on clinical examination and periodontal measurements.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between regular and deep cleaning?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Regular cleaning removes plaque and tartar from above the gumline. Deep cleaning targets plaque and tartar below the gumline and on root surfaces, treating active gum disease. They're different procedures addressing different problems.",
                },
              },
            ],
          }),
        }}
      />
      <DeepCleaningContent />
    </>
  );
}
