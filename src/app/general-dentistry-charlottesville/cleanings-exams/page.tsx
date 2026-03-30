import { Metadata } from "next";
import CleaningsExamsContent from "@/components/general-dentistry/CleaningsExamsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Cleanings & Exams in Charlottesville | Willis & Associates",
  description: "Professional dental cleanings and comprehensive exams in Charlottesville. Digital X-rays, oral cancer screening, and personalized care by Dr. Sowmya Karamcheti.",
  openGraph: {
    title: "Dental Cleanings & Exams in Charlottesville | Willis & Associates",
    description: "Professional dental cleanings and comprehensive exams in Charlottesville. Digital X-rays, oral cancer screening, and personalized care by Dr. Sowmya Karamcheti.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/cleanings-exams",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/cleanings-exams",
  },
};

export default function CleaningsExamsPage() {
  return (
    <>
      <SchemaMarkup description="Professional dental cleanings and exams in Charlottesville VA, including digital X-rays and oral cancer screening." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How often should I have a dental cleaning and exam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The American Dental Association recommends a professional cleaning and exam every six months for most adults. Some patients with periodontal disease or other conditions may benefit from more frequent visits.",
                },
              },
              {
                "@type": "Question",
                name: "What is included in a comprehensive dental exam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A comprehensive exam includes visual inspection of teeth and gums, digital X-rays, oral cancer screening, periodontal assessment, examination of existing fillings and crowns, and discussion of any concerns with Dr. Karamcheti.",
                },
              },
              {
                "@type": "Question",
                name: "Are digital X-rays safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Digital X-rays use significantly less radiation than traditional film X-rays and allow Dr. Karamcheti to detect issues early while keeping radiation exposure minimal.",
                },
              },
              {
                "@type": "Question",
                name: "Does Willis & Associates offer cleanings for children?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We provide gentle cleanings and exams for children, with a focus on building healthy habits early and making the experience comfortable and positive.",
                },
              },
            ],
          }),
        }}
      />
      <CleaningsExamsContent />
    </>
  );
}
