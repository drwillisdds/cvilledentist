import { Metadata } from "next";
import IteroScannerContent from "@/components/IteroScannerContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "iTero Digital Scanner in Charlottesville | No-Gag Impressions",
  description:
    "iTero 3D scanner at Willis & Associates eliminates uncomfortable impression trays. Fast, accurate digital scans for crowns, bridges, and Invisalign in Charlottesville.",
  openGraph: {
    title: "iTero Digital Scanner in Charlottesville | No-Gag Impressions",
    description:
      "Digital dental impressions using iTero scanning technology. More comfortable than traditional trays, perfect for Invisalign, crowns, and bridges.",
    type: "website",
    url: "https://cvilledentist.com/technology/itero-scanner",
  },
  alternates: {
    canonical: "https://cvilledentist.com/technology/itero-scanner",
  },
};

export default function IteroScannerPage() {
  return (
    <>
      <SchemaMarkup description="iTero digital scanner at Willis & Associates Charlottesville. 3D dental impressions for Invisalign, crowns, bridges, and more with no gag reflex involved." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does the iTero scanner work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The iTero uses a handheld wand with a camera that captures thousands of precise 3D images of your teeth and gums. These images are stitched together to create an accurate digital model. The entire process takes 2-3 minutes and is completely comfortable.",
                },
              },
              {
                "@type": "Question",
                name: "Is iTero better than traditional impressions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. iTero is faster, more comfortable (no gag reflex), and more accurate. The digital model allows Dr. Karamcheti to show you exactly how your final restoration will look before it's made. Retakes are easier if a section isn't perfect.",
                },
              },
              {
                "@type": "Question",
                name: "What can the iTero scanner be used for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The iTero is used for Invisalign treatment, dental crowns, bridges, veneers, inlays, onlays, and other restorations that require precise tooth measurements. It's also useful for implant planning.",
                },
              },
              {
                "@type": "Question",
                name: "Will I need multiple scans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually one scan is enough. The iTero provides incredibly detailed 3D data in a single session. If Dr. Karamcheti needs to rescan a specific area, it only takes a few extra seconds.",
                },
              },
            ],
          }),
        }}
      />
      <IteroScannerContent />
    </>
  );
}
