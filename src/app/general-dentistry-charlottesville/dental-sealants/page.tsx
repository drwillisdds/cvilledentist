import { Metadata } from "next";
import DentalSealantsContent from "@/components/general-dentistry/DentalSealantsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Sealants in Charlottesville VA | Cville Dentist",
  description: "Dental sealants for kids and adults in Charlottesville. Quick, painless cavity prevention by Dr. Sowmya Karamcheti. Protect molars from decay.",
  openGraph: {
    title: "Dental Sealants in Charlottesville VA | Cville Dentist",
    description: "Dental sealants for kids and adults in Charlottesville. Quick, painless cavity prevention by Dr. Sowmya Karamcheti.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/dental-sealants",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/dental-sealants",
  },
};

export default function DentalSealantsPage() {
  return (
    <>
      <SchemaMarkup description="Dental sealants in Charlottesville VA - preventive treatment for cavity-prone teeth in children and adults." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are dental sealants?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dental sealants are a thin, protective plastic coating applied to the chewing surfaces of back teeth (molars and premolars). They create a barrier that prevents food particles and bacteria from settling into the deep grooves and pits where decay typically starts.",
                },
              },
              {
                "@type": "Question",
                name: "Are sealants only for children?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. While sealants are most commonly recommended for children, adults without decay or fillings on their molars can also benefit. Dr. Karamcheti assesses each patient's cavity risk and recommends sealants when appropriate.",
                },
              },
              {
                "@type": "Question",
                name: "How long do dental sealants last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sealants typically last 5-10 years with proper care. Dr. Karamcheti checks them at regular cleaning appointments and reapplies them if they wear down or become damaged.",
                },
              },
              {
                "@type": "Question",
                name: "Does the application hurt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not at all. Sealants are painless and don't require drilling or anesthesia. Dr. Karamcheti simply cleans the tooth surface, applies the sealant material, and hardens it with a special light. The entire process takes just minutes.",
                },
              },
              {
                "@type": "Question",
                name: "Are sealants safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Sealants are FDA-approved and have been safely used for decades. The materials are biocompatible and pose no health risks. They're routinely recommended by the American Dental Association and pediatric dental organizations.",
                },
              },
            ],
          }),
        }}
      />
      <DentalSealantsContent />
    </>
  );
}
