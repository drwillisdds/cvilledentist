import { Metadata } from "next";
import EmergencyDentistryContent from "@/components/EmergencyDentistryContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Emergency Dentist Charlottesville VA | Same-Day Appointments",
  description:
    "Tooth pain or dental emergency in Charlottesville? Dr. Karamcheti offers same-day emergency appointments. Call now — don't wait.",
  openGraph: {
    title: "Emergency Dentist Charlottesville VA | Same-Day Appointments",
    description:
      "Same-day emergency dental care in Charlottesville. Dr. Karamcheti handles toothaches, broken teeth, knocked-out teeth, and more.",
    type: "website",
    url: "https://cvilledentist.com/emergency-dentist-charlottesville",
  },
  alternates: {
    canonical: "https://cvilledentist.com/emergency-dentist-charlottesville",
  },
};

export default function EmergencyDentistPage() {
  return (
    <>
      <SchemaMarkup description="Emergency dental care in Charlottesville. Dr. Karamcheti offers same-day appointments for dental emergencies." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What should I do if I have a knocked-out tooth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pick up the tooth by the crown, not the root. Place it in milk or hold it between your cheek and gum. Call us immediately at (434) 973-5873. Reimplantation is possible within 1-2 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Should I go to the ER for a dental emergency?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The emergency room can manage pain and prescribe antibiotics, but they don't fix teeth. Call Willis & Associates Family Dentistry first at (434) 973-5873 for same-day emergency appointments.",
                },
              },
              {
                "@type": "Question",
                name: "What does Dr. Karamcheti treat in emergency appointments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dr. Karamcheti treats severe toothaches, broken or cracked teeth, knocked-out teeth, lost crowns or fillings, dental abscesses, and soft tissue injuries.",
                },
              },
            ],
          }),
        }}
      />
      <EmergencyDentistryContent />
    </>
  );
}
