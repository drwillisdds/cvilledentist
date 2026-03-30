import { Metadata } from "next";
import DigitalXraysContent from "@/components/DigitalXraysContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Digital X-Rays in Charlottesville VA | Low Radiation Imaging",
  description:
    "Digital X-rays at Willis & Associates use 90% less radiation than traditional film. Fast, accurate, and patient-safe. Learn how Dr. Karamcheti uses them for precise diagnosis.",
  openGraph: {
    title: "Digital X-Rays in Charlottesville VA | Low Radiation Imaging",
    description:
      "Digital dental x-rays in Charlottesville with 90% less radiation exposure. Same-day results for better diagnosis and treatment planning.",
    type: "website",
    url: "https://cvilledentist.com/technology/digital-xrays",
  },
  alternates: {
    canonical: "https://cvilledentist.com/technology/digital-xrays",
  },
};

export default function DigitalXraysPage() {
  return (
    <>
      <SchemaMarkup description="Digital X-ray technology in Charlottesville. Dr. Karamcheti uses advanced imaging with 90% less radiation for accurate dental diagnosis." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much radiation do digital x-rays use compared to film?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Digital x-rays use approximately 90% less radiation than traditional film x-rays. This makes them one of the safest imaging tools in dentistry. The radiation dose is comparable to a few days of natural background radiation exposure.",
                },
              },
              {
                "@type": "Question",
                name: "Why does Dr. Karamcheti use digital x-rays?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Digital x-rays provide instant high-resolution images, better visualization of early decay, bone loss, and abnormalities. They help Dr. Karamcheti detect problems earlier and develop more precise treatment plans. The images can also be enlarged and enhanced for better patient education.",
                },
              },
              {
                "@type": "Question",
                name: "What types of digital x-rays does Willis & Associates offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer bitewing x-rays (show upper and lower back teeth), panoramic x-rays (full-mouth overview), and periapical x-rays (show individual teeth from root to crown). Dr. Karamcheti selects the appropriate type based on your specific needs.",
                },
              },
              {
                "@type": "Question",
                name: "Is digital x-ray safe during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Digital x-rays are very safe during pregnancy due to the minimal radiation exposure. However, we typically delay routine x-rays until after the first trimester unless there's an emergency. Always inform Dr. Karamcheti if you're pregnant or think you might be.",
                },
              },
            ],
          }),
        }}
      />
      <DigitalXraysContent />
    </>
  );
}
