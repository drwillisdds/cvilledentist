import { Metadata } from "next";
import IntraoralCamerasContent from "@/components/IntraoralCamerasContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Intraoral Cameras in Charlottesville | See Your Teeth Up Close",
  description:
    "Intraoral cameras at Cville Dentist let you see exactly what Dr. Karamcheti sees. HD imaging for patient education and early problem detection in Charlottesville.",
  openGraph: {
    title: "Intraoral Cameras in Charlottesville | See Your Teeth Up Close",
    description:
      "Advanced intraoral camera technology for patient education. See cavity, decay, and gum health in high-definition during your exam.",
    type: "website",
    url: "https://cvilledentist.com/technology/intraoral-cameras",
  },
  alternates: {
    canonical: "https://cvilledentist.com/technology/intraoral-cameras",
  },
};

export default function IntraoralCamerasPage() {
  return (
    <>
      <SchemaMarkup description="Intraoral camera technology at Cville Dentist Charlottesville. Advanced imaging lets patients see their teeth in HD during exams." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does the intraoral camera work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A tiny camera (about the size of a pen) with an LED light and macro lens captures high-definition images of your teeth and gums from inside your mouth. Images display in real-time on a monitor so you can see them during the exam.",
                },
              },
              {
                "@type": "Question",
                name: "Why would Dr. Karamcheti use an intraoral camera?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Intraoral cameras help with patient education — you see exactly what the dentist sees. They're also useful for documenting tooth damage, decay, fractures, and gum issues. The images become part of your permanent dental record.",
                },
              },
              {
                "@type": "Question",
                name: "Can the camera detect problems I can't see?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. The camera magnifies your teeth 60-80 times normal size. Tiny cavities, hairline fractures, areas of decay under old fillings, and gum recession become visible. Early detection means easier treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Is the camera safe to use in my mouth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. The camera is disposable or autoclavable (sterilized), smooth, and small. It doesn't touch your teeth — just captures images. Many patients find it more comfortable than mirrors.",
                },
              },
            ],
          }),
        }}
      />
      <IntraoralCamerasContent />
    </>
  );
}
