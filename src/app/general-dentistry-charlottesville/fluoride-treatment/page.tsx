import { Metadata } from "next";
import FluorideTreatmentContent from "@/components/general-dentistry/FluorideTreatmentContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Professional Fluoride Treatments in Charlottesville | Cville Dentist",
  description: "Professional fluoride treatments for cavity prevention in Charlottesville. Stronger than toothpaste, safe for all ages. Dr. Sowmya Karamcheti.",
  openGraph: {
    title: "Professional Fluoride Treatments in Charlottesville | Cville Dentist",
    description: "Professional fluoride treatments for cavity prevention. Safe for all ages, more effective than store-bought fluoride.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/fluoride-treatment",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/fluoride-treatment",
  },
};

export default function FluorideTreatmentPage() {
  return (
    <>
      <SchemaMarkup description="Professional fluoride treatments in Charlottesville VA - cavity prevention for children and adults with cavity-prone teeth." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is professional fluoride different from toothpaste fluoride?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Professional fluoride treatments contain significantly higher fluoride concentrations than over-the-counter toothpaste—often 5-10 times stronger. They're applied directly to teeth by a dental professional and are far more effective at strengthening enamel and preventing decay.",
                },
              },
              {
                "@type": "Question",
                name: "Is fluoride safe for children?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Professional fluoride treatments are FDA-approved and safe for children when applied by a trained dental professional. Dr. Karamcheti uses appropriate doses for each age and monitors swallowing to ensure safety.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs professional fluoride treatments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cavity-prone children, adults with a history of decay, seniors with dry mouth, and patients with exposed root surfaces benefit most. Dr. Karamcheti assesses your risk and recommends fluoride treatment when appropriate.",
                },
              },
              {
                "@type": "Question",
                name: "How often should fluoride treatments be done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most people benefit from fluoride treatments 1-4 times per year, depending on their cavity risk. Dr. Karamcheti typically recommends treatments every 6 months for high-risk patients and annually for lower-risk patients.",
                },
              },
              {
                "@type": "Question",
                name: "What does fluoride do to teeth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fluoride strengthens tooth enamel by making it more resistant to acid attacks from bacteria and sugars. It also helps reverse very early stages of decay before a cavity forms.",
                },
              },
            ],
          }),
        }}
      />
      <FluorideTreatmentContent />
    </>
  );
}
