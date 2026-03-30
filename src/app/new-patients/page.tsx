import { Metadata } from "next";
import NewPatientsContent from "@/components/NewPatientsContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "New Patients | Charlottesville Dentist | cvilledentist.com",
  description:
    "New to Charlottesville or just looking for a better dentist? We welcome new patients with same-day availability and a team that makes your first visit easy.",
  openGraph: {
    title: "New Patients | Charlottesville Dentist | cvilledentist.com",
    description:
      "New to Charlottesville or just looking for a better dentist? We welcome new patients with same-day availability and a team that makes your first visit easy.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://cvilledentist.com/new-patients",
  },
};

export default function NewPatients() {
  return (
    <>
      <NewPatientsContent />
      <SchemaMarkup
        description="New patient dental care in Charlottesville, VA. Same-day appointments, no insurance required, and flexible payment plans available."
      />
    </>
  );
}
