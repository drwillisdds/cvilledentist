import { Metadata } from "next";
import DentalBridgesContent from "@/components/general-dentistry/DentalBridgesContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Bridges in Charlottesville VA | Cville Dentist",
  description: "Replace missing teeth with fixed dental bridges. Traditional, cantilever, Maryland, and implant-supported options. Expert care by Dr. Sowmya Karamcheti in Charlottesville.",
  openGraph: {
    title: "Dental Bridges in Charlottesville VA | Cville Dentist",
    description: "Replace missing teeth with fixed dental bridges. Traditional, cantilever, Maryland, and implant-supported options. Expert care by Dr. Sowmya Karamcheti in Charlottesville.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/dental-bridges",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/dental-bridges",
  },
};

export default function DentalBridgesPage() {
  return (
    <>
      <SchemaMarkup description="Professional dental bridge placement in Charlottesville VA for replacing missing teeth." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a dental bridge?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dental bridge is a fixed prosthesis that replaces one or more missing teeth by anchoring to adjacent teeth or implants. A bridge restores your ability to chew, speak, and smile while preventing remaining teeth from shifting.",
                },
              },
              {
                "@type": "Question",
                name: "What types of bridges does Cville Dentist offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer traditional bridges (held by crowns on neighboring teeth), cantilever bridges (supported on one side), Maryland bridges (bonded to the back of adjacent teeth), and implant-supported bridges (anchored by dental implants).",
                },
              },
              {
                "@type": "Question",
                name: "Is a bridge or an implant better?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Both are effective. Implants preserve bone and don't affect adjacent teeth, but cost more and take longer. Bridges are faster and more affordable but require shaping of healthy neighboring teeth and don't preserve bone beneath the missing tooth.",
                },
              },
              {
                "@type": "Question",
                name: "How long do dental bridges last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A well-maintained bridge typically lasts 7-10 years. Some bridges last much longer with excellent oral care and regular checkups.",
                },
              },
            ],
          }),
        }}
      />
      <DentalBridgesContent />
    </>
  );
}
