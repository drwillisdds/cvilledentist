import { Metadata } from "next";
import OralCancerScreeningContent from "@/components/OralCancerScreeningContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Oral Cancer Screening in Charlottesville | Cville Dentist",
  description:
    "Comprehensive oral cancer screenings at Cville Dentist. Dr. Karamcheti uses advanced technology to detect early signs. Included in every exam.",
  openGraph: {
    title: "Oral Cancer Screening in Charlottesville | Cville Dentist",
    description:
      "Comprehensive oral cancer screenings at Cville Dentist. Dr. Karamcheti uses advanced technology to detect early signs. Included in every exam.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/oral-cancer-screening",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/general-dentistry-charlottesville/oral-cancer-screening",
  },
};

export default function OralCancerScreeningPage() {
  return (
    <>
      <SchemaMarkup description="Oral cancer screening in Charlottesville with VelScope technology and comprehensive examination by Dr. Karamcheti. Early detection saves lives. Included in every dental exam." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Why is oral cancer screening important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Early detection of oral cancer significantly improves survival rates. When caught early, oral cancer has a 90% five-year survival rate. When detected late, this drops to 30%. Regular screenings by Dr. Karamcheti catch precancerous lesions before they become cancer.",
                },
              },
              {
                "@type": "Question",
                name: "Who is at risk for oral cancer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Anyone can develop oral cancer, but risk increases with tobacco use (smoking or chewing), heavy alcohol consumption, HPV infection, sun exposure to the lips, and poor oral hygiene. Age 50+ is a risk factor. Charlottesville residents with risk factors should be especially vigilant.",
                },
              },
              {
                "@type": "Question",
                name: "What does an oral cancer screening involve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Karamcheti visually examines your mouth, checks for lumps or abnormal tissue, palpates your jaw and neck, and may use VelScope technology to detect changes not visible to the naked eye. The entire screening takes 5-10 minutes and is completely painless.",
                },
              },
              {
                "@type": "Question",
                name: "What is VelScope technology?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "VelScope is a handheld device that uses specialized light to visualize oral tissue changes. It helps Dr. Karamcheti identify precancerous lesions that might not be visible under normal examination. It's non-invasive and takes seconds.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if something suspicious is found?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Karamcheti will explain what she found and may recommend a biopsy to confirm. A biopsy involves removing a small tissue sample for laboratory analysis. Early-stage lesions are often easily treated with high success rates.",
                },
              },
            ],
          }),
        }}
      />
      <OralCancerScreeningContent />
    </>
  );
}
