import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Cville Dentist | cvilledentist.com",
  description:
    "Privacy policy for Cville Dentist in Charlottesville, VA. HIPAA-compliant protection of your dental health information.",
  openGraph: {
    title: "Privacy Policy | Cville Dentist | cvilledentist.com",
    description:
      "Privacy policy for Cville Dentist in Charlottesville, VA. HIPAA-compliant protection of your dental health information.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyContent />;
}
