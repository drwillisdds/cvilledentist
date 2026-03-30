import { Metadata } from "next";
import NightGuardsContent from "@/components/NightGuardsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Custom Night Guards in Charlottesville | Teeth Grinding Guard",
  description:
    "Custom night guards for teeth grinding (bruxism) in Charlottesville. Dr. Karamcheti creates personalized guards using digital impressions. Protect your teeth and jaw.",
  openGraph: {
    title: "Custom Night Guards in Charlottesville | Teeth Grinding Guard",
    description:
      "Custom night guards for teeth grinding (bruxism) in Charlottesville. Dr. Karamcheti creates personalized guards using digital impressions. Protect your teeth and jaw.",
    type: "website",
    url: "https://cvilledentist.com/general-dentistry-charlottesville/night-guards",
  },
  alternates: {
    canonical:
      "https://cvilledentist.com/general-dentistry-charlottesville/night-guards",
  },
};

export default function NightGuardsPage() {
  return (
    <>
      <SchemaMarkup description="Custom night guards for teeth grinding and TMJ protection in Charlottesville. Dr. Karamcheti designs personalized guards using digital impressions technology." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are the signs I'm grinding my teeth at night?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Morning jaw pain, headaches, worn tooth surfaces, loose or fractured teeth, and TMJ pain are common signs. You might wake with a sore mouth or your partner may notice grinding sounds. Dr. Karamcheti can identify grinding damage during your exam.",
                },
              },
              {
                "@type": "Question",
                name: "How is bruxism (teeth grinding) connected to stress?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Stress and anxiety trigger muscle tension, including in the jaw. Many people clench or grind their teeth more during stressful periods. While a night guard doesn't cure bruxism, it protects your teeth from damage while you address stress through sleep, exercise, or relaxation.",
                },
              },
              {
                "@type": "Question",
                name: "What's the difference between a custom guard and over-the-counter options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Over-the-counter guards are one-size-fits-all and often uncomfortable. Custom guards made by Dr. Karamcheti using digital impressions fit perfectly, distribute bite force evenly, and are more durable. They cost more upfront but last longer and work better.",
                },
              },
              {
                "@type": "Question",
                name: "Will a night guard help with TMJ pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Night guards reduce the force placed on your jaw joints while sleeping. By stabilizing your bite and reducing grinding, they decrease TMJ pain and tension. Many patients with TMJ dysfunction benefit significantly from custom guards.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a custom night guard last?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A high-quality custom guard typically lasts 5-10 years depending on how heavily you grind. Dr. Karamcheti will monitor it at your checkups and let you know if replacement is needed. Over-the-counter guards often wear out within 1-2 years.",
                },
              },
              {
                "@type": "Question",
                name: "Can I sleep normally with a night guard in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most patients adjust within a few nights. Custom guards are designed to be comfortable and non-invasive. You might be slightly aware of it initially, but it shouldn't interfere with sleep quality.",
                },
              },
            ],
          }),
        }}
      />
      <NightGuardsContent />
    </>
  );
}
