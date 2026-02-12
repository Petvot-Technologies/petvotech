export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Petvot Technologies",
    alternateName: "Petvot Tech",
    url: "https://www.petvottech.com",
    logo: "https://www.petvottech.com/logo.png",
    description:
      "Technology solutions company providing affordable digital transformation, cloud services, and custom software development",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+234-813-3527-701",
      contactType: "Customer Service",
      email: "info@petvotech.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/petvottech",
      "https://twitter.com/petvottech",
      "https://www.instagram.com/petvottech",
    ],
    founder: [
      { "@type": "Person", name: "Paul Awe", jobTitle: "Co-Founder & CRM Consultant" },
      { "@type": "Person", name: "Peter Awe", jobTitle: "Co-Founder & Senior Software Engineer" },
      { "@type": "Person", name: "Idris Lawal", jobTitle: "Co-Founder & Chief Technology Officer" },
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 3 },
    foundingDate: "2025",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
