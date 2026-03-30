import { Metadata } from "next";
import GeneralDentistryContent from "@/components/GeneralDentistryContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Family Dentist Charlottesville VA | Cleanings, Exams & Care",
  description:
    "Comprehensive family dental care in Charlottesville. Dr. Karamcheti and team offer cleanings, exams, fillings, crowns & more. Accepting new patients.",
  openGraph: {
    title: "Family Dentist Charlottesville VA | Cleanings, Exams & Care",
    description:
      "General dentistry for the whole family. Dr. Karamcheti provides preventive care, restorations, and oral cancer screenings in Charlottesville.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville",
  },
};

export default function GeneralDentistryPage() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: "Dr. Sowmya Karamcheti, DDS, MHA",
      jobTitle: "Dentist",
      worksFor: {
        "@type": "MedicalBusiness",
        name: "Willis & Associates Family Dentistry",
        telephone: "(434) 973-5873",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How often should I visit the dentist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend visiting every six months for a cleaning and exam. Dr. Karamcheti will recommend the right schedule for you.",
          },
        },
        {
          "@type": "Question",
          name: "What is included in a comprehensive exam?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dr. Karamcheti performs digital X-rays, examines your teeth and gums, checks your bite and jaw alignment, screens for oral cancer, and assesses your overall oral health.",
          },
        },
        {
          "@type": "Question",
          name: "Are you accepting new patients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we welcome new patients of all ages. Call (434) 973-5873 to schedule your first appointment.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <SchemaMarkup description="Family and general dentistry in Charlottesville. Dr. Karamcheti provides cleanings, exams, fillings, crowns, bridges, and preventive care." />
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <GeneralDentistryContent />
    </>
  );
}
