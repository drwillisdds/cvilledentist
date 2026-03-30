interface SchemaMarkupProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  customData?: Record<string, unknown>;
}

export default function SchemaMarkup({
  name = "Cville Dentist",
  description,
  url = "https://www.cvilledentist.com",
  telephone = "(434) 973-5873",
  email = "info@cvilledentist.com",
  customData,
}: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
    name,
    url,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2375 Commonwealth Dr # A",
      addressLocality: "Charlottesville",
      addressRegion: "VA",
      postalCode: "22901",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    isAcceptingNewPatients: true,
    areaServed: {
      "@type": "City",
      name: "Charlottesville",
      sameAs: "https://en.wikipedia.org/wiki/Charlottesville,_Virginia",
    },
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Dental Implants",
        procedureType: "Surgical",
      },
      {
        "@type": "MedicalProcedure",
        name: "Invisalign Clear Aligners",
        procedureType: "Noninvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Porcelain Veneers",
        procedureType: "Noninvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Teeth Whitening",
        procedureType: "Noninvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Emergency Dental Care",
        procedureType: "Surgical",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Crowns and Bridges",
        procedureType: "Noninvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Cleanings and Exams",
        procedureType: "Noninvasive",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Implants",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Invisalign Clear Aligners",
            procedureType: "Noninvasive",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Porcelain Veneers",
            procedureType: "Noninvasive",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Teeth Whitening",
            procedureType: "Noninvasive",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Emergency Dental Care",
            procedureType: "Surgical",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Crowns and Bridges",
            procedureType: "Noninvasive",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Dental Cleanings and Exams",
            procedureType: "Noninvasive",
          },
        },
      ],
    },
    employee: {
      "@type": "Dentist",
      name: "Dr. Sowmya Karamcheti",
      jobTitle: "Lead Dentist",
      description:
        "DDS, MHA — family and cosmetic dentist specializing in in-house dental implants",
      medicalSpecialty: "Dentistry",
    },
    ...(description && { description }),
    ...customData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(baseSchema),
      }}
    />
  );
}
