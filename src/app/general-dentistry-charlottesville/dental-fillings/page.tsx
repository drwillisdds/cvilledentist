import { Metadata } from "next";
import DentalFillingsContent from "@/components/general-dentistry/DentalFillingsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Tooth-Colored Fillings in Charlottesville | Cville Dentist",
  description: "Natural-looking tooth-colored fillings for cavities. Composite resin vs amalgam explained. Expert cavity treatment by Dr. Sowmya Karamcheti in Charlottesville VA.",
  openGraph: {
    title: "Tooth-Colored Fillings in Charlottesville | Cville Dentist",
    description: "Natural-looking tooth-colored fillings for cavities. Composite resin vs amalgam explained. Expert cavity treatment by Dr. Sowmya Karamcheti in Charlottesville VA.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/dental-fillings",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/dental-fillings",
  },
};

export default function DentalFillingsPage() {
  return (
    <>
      <SchemaMarkup description="Professional tooth-colored dental fillings in Charlottesville VA for cavity treatment." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a tooth-colored filling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A tooth-colored filling is made from composite resin that is matched to the color of your natural tooth. It is bonded directly to the tooth, restoring its shape and function while maintaining a natural appearance.",
                },
              },
              {
                "@type": "Question",
                name: "Why does Cville Dentist use tooth-colored fillings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tooth-colored composite fillings are esthetic, durable, require less tooth removal than amalgam, and bond directly to the tooth for a strong repair. They are the standard of care for cavity treatment.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between composite and amalgam fillings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Composite fillings are tooth-colored and require less tooth removal. Amalgam fillings are silver-colored, visible, and require more tooth structure to be removed for retention. Most dentists today use composite fillings.",
                },
              },
              {
                "@type": "Question",
                name: "How long do tooth-colored fillings last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With proper care, a composite filling typically lasts 7-10 years. Longevity depends on the filling size, location, your oral hygiene, and your bite.",
                },
              },
            ],
          }),
        }}
      />
      <DentalFillingsContent />
    </>
  );
}
