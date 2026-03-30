import { Metadata } from "next";
import DenturesContent from "@/components/general-dentistry/DenturesContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dentures in Charlottesville VA | Willis & Associates Family Dentistry",
  description: "Complete and partial dentures in Charlottesville. Custom-fit, modern materials, digital impressions. Dr. Sowmya Karamcheti offers natural-looking restoration.",
  openGraph: {
    title: "Dentures in Charlottesville VA | Willis & Associates Family Dentistry",
    description: "Custom dentures in Charlottesville - full and partial dentures with modern materials and fitting.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/dentures",
  },
  alternates: {
    canonical: "https://cvilledentist.com/general-dentistry-charlottesville/dentures",
  },
};

export default function DenturesPage() {
  return (
    <>
      <SchemaMarkup description="Dentures in Charlottesville VA - full and partial dentures, implant-supported options, and custom fitting by Dr. Sowmya Karamcheti." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's the difference between full and partial dentures?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Full dentures replace all teeth in the upper or lower arch when no natural teeth remain. Partial dentures replace only some missing teeth, anchoring to remaining natural teeth and filling the gaps.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to get dentures?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The process typically takes 4-6 weeks from initial impression to final denture. Dr. Karamcheti takes multiple appointments to ensure proper fit, occlusion (bite), and comfort.",
                },
              },
              {
                "@type": "Question",
                name: "How long do dentures last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With proper care, dentures typically last 5-8 years. They may need adjustments as your jaw shape changes, and over time the materials may need replacement or relines.",
                },
              },
              {
                "@type": "Question",
                name: "Are implant-supported dentures better than regular dentures?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Implant-supported dentures offer greater stability, better retention, and improved chewing function compared to traditional dentures. However, they're more expensive and require sufficient bone for implant placement.",
                },
              },
              {
                "@type": "Question",
                name: "Will dentures feel natural?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Modern dentures look very natural and feel increasingly natural as you adjust. There's an adaptation period of a few weeks to several months, but most patients adapt well with practice and patience.",
                },
              },
            ],
          }),
        }}
      />
      <DenturesContent />
    </>
  );
}
