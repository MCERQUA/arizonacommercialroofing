import { COMPANY_INFO, SERVICES } from "@/lib/constants";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": COMPANY_INFO.name,
    "image": "https://arizonacommercialroofing.com/logo.png", // Placeholder
    "@id": "https://arizonacommercialroofing.com",
    "url": "https://arizonacommercialroofing.com",
    "telephone": COMPANY_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Park Dr",
      "addressLocality": "Phoenix",
      "addressRegion": "AZ",
      "postalCode": "85001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4484,
      "longitude": -112.0740
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/arizonacommercialroofing",
      "https://www.linkedin.com/company/arizonacommercialroofing"
    ],
    "areaServed": ["Phoenix", "Scottsdale", "Mesa", "Tucson", "Chandler"],
    "priceRange": "$$",
    "serviceArea": {
        "@type": "State",
        "name": "Arizona"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Roofing Services",
      "itemListElement": SERVICES.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.description
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
