import { Metadata } from "next";
import DentalImplantsContent from "@/components/DentalImplantsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Dental Implants Charlottesville VA | In-House, No Referral",
  description:
    "Get dental implants in Charlottesville without the referral runaround. Dr. Karamcheti places and restores implants in-house. Free consultation available.",
  openGraph: {
    title: "Dental Implants Charlottesville VA | In-House, No Referral",
    description:
      "Get dental implants in Charlottesville without the referral runaround. Dr. Karamcheti places and restores implants in-house. Free consultation available.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/dental-implants-charlottesville",
  },
};

export default function DentalImplants() {
  return (
    <>
      <DentalImplantsContent />
      <SchemaMarkup
        description="Dental implants placed and restored in-house by Dr. Sowmya Karamcheti in Charlottesville. No referrals needed. Free consultations available."
        customData={{
          "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
          areaServed: {
            "@type": "City",
            name: "Charlottesville",
            state: "Virginia",
          },
          serviceType: "Dental Implant Placement and Restoration",
          availability: "By Appointment",
        }}
      />
    </>
  );
}
