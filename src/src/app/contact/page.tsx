import { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us | Charlottesville Dentist | cvilledentist.com",
  description:
    "Contact Willis & Associates Family Dentistry in Charlottesville, VA. Call, book online, or stop by — we're accepting new patients with same-day availability.",
  openGraph: {
    title: "Contact Us | Charlottesville Dentist | cvilledentist.com",
    description:
      "Contact Willis & Associates Family Dentistry in Charlottesville, VA. Call, book online, or stop by — we're accepting new patients with same-day availability.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <ContactContent />
      <SchemaMarkup
        description="Contact Willis & Associates Family Dentistry in Charlottesville, VA. Schedule an appointment online, call, or visit our office at 2375 Commonwealth Drive."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            telephone: "(434) 973-5873",
          },
          areaServed: "Charlottesville, VA",
        }}
      />
    </>
  );
}
