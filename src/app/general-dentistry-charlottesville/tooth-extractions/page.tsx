import { Metadata } from "next";
import ToothExtractionsContent from "@/components/ToothExtractionsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Tooth Extractions in Charlottesville VA | Willis & Associates",
  description:
    "Gentle tooth extractions in Charlottesville. Dr. Karamcheti handles simple and surgical extractions with expertise and care. Sedation options available.",
  openGraph: {
    title: "Tooth Extractions in Charlottesville VA | Willis & Associates",
    description:
      "Gentle tooth extractions in Charlottesville. Dr. Karamcheti handles simple and surgical extractions with expertise and care. Sedation options available.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/tooth-extractions",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/general-dentistry-charlottesville/tooth-extractions",
  },
};

export default function ToothExtractionsPage() {
  return (
    <>
      <SchemaMarkup description="Gentle tooth extraction services in Charlottesville VA, including simple extractions, surgical extractions, and wisdom teeth removal. Dr. Karamcheti specializes in comfortable extractions with sedation options." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "When is a tooth extraction necessary?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tooth extraction may be necessary for severely decayed teeth, infected teeth with failed root canal treatment, advanced gum disease, impacted wisdom teeth, teeth with root fractures, or overcrowding before orthodontics. Dr. Karamcheti always explores saving the tooth first.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between simple and surgical extraction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simple extraction is used when the tooth is visible above the gum line and can be removed with forceps. Surgical extraction is needed for impacted teeth (like wisdom teeth below the gum), teeth that have broken, or teeth with curved roots. Dr. Karamcheti determines which approach suits your tooth.",
                },
              },
              {
                "@type": "Question",
                name: "Will extraction hurt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Local anesthesia numbs the area completely. You'll feel pressure and vibration, but no pain. If you're anxious, Dr. Karamcheti offers nitrous oxide, oral sedation, or IV sedation for relaxation.",
                },
              },
              {
                "@type": "Question",
                name: "What should I expect after extraction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some swelling and discomfort is normal for 3-5 days. You'll receive detailed aftercare instructions including when to resume normal activity, what to eat, and how to care for the extraction site. Most patients return to work within 1-2 days.",
                },
              },
              {
                "@type": "Question",
                name: "What are my tooth replacement options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Options include dental implants (the most permanent solution), dental bridges, or partial dentures. Dr. Karamcheti recommends implants when possible because they preserve bone and function like natural teeth. Discuss costs and timelines during your consultation.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to recover from an extraction?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Initial healing takes 1-2 weeks (socket closes). Complete bone healing takes 3-6 months. You can resume light activities after a few days and return to exercise within 1 week. Full recovery time depends on the complexity of the extraction.",
                },
              },
            ],
          }),
        }}
      />
      <ToothExtractionsContent />
    </>
  );
}
