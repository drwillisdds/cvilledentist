import { Metadata } from "next";
import RootCanalContent from "@/components/RootCanalContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Root Canal Treatment in Charlottesville VA | Cville Dentist",
  description:
    "Root canal treatment by Dr. Karamcheti in Charlottesville. Modern, comfortable procedure to save your tooth. Digital imaging and pain-free treatment.",
  openGraph: {
    title: "Root Canal Treatment in Charlottesville VA | Cville Dentist",
    description:
      "Root canal treatment by Dr. Karamcheti in Charlottesville. Modern, comfortable procedure to save your tooth. Digital imaging and pain-free treatment.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/root-canal",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/general-dentistry-charlottesville/root-canal",
  },
};

export default function RootCanalPage() {
  return (
    <>
      <SchemaMarkup description="Root canal treatment in Charlottesville with Dr. Karamcheti. Using digital imaging and modern techniques to save infected teeth. Painless endodontic therapy." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is a root canal procedure painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Modern root canal treatment is no more uncomfortable than getting a filling. Local anesthesia numbs the tooth completely. You'll feel pressure and vibration but no pain. Many patients describe the experience as painless. Dr. Karamcheti's technique prioritizes comfort.",
                },
              },
              {
                "@type": "Question",
                name: "Why does a tooth need a root canal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A tooth needs a root canal when the pulp (nerve tissue inside the tooth) becomes infected or inflamed. This happens from deep decay, repeated procedures, trauma, cracks, or chips that expose the pulp. Pain, swelling, and infection are signs the pulp is dying.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I delay root canal treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you delay, the infection worsens and spreads to the bone supporting your tooth. This causes severe pain, swelling, and possible abscess formation. The tooth eventually dies and must be extracted. Infection can also spread to other areas. It's best to treat promptly.",
                },
              },
              {
                "@type": "Question",
                name: "Will my tooth be as strong after a root canal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. While a root canal removes the nerve, the tooth remains intact and strong. It functions normally. However, teeth after root canal become slightly more brittle over time, so a crown is recommended to protect and extend longevity. A crowned tooth lasts decades.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a root canal take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical root canal takes 45 minutes to 2 hours depending on the tooth and number of roots. Front teeth with one root are faster. Molars with multiple roots take longer. Dr. Karamcheti schedules adequate time to ensure thorough, careful treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a crown after a root canal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a crown is strongly recommended after root canal. It protects the treated tooth, prevents re-infection, and extends longevity. A root canal tooth without a crown is like a car without shock absorbers—vulnerable to fracture under normal chewing pressure.",
                },
              },
            ],
          }),
        }}
      />
      <RootCanalContent />
    </>
  );
}
