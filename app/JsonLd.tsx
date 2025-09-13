import { business } from '../lib/seo'


export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": business.name,
          "url": business.url,
          "telephone": business.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": business.city,
            "addressRegion": business.state,
          },
          "image": `${business.url}/og-sunfertech.jpg`,
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-22.417215",
            "longitude": "-47.561571"
          },
          "hasMap": "https://www.google.com/maps/place/Sunfertech/@-22.417215,-47.561571,15z"
        })
      }}
    />
  );
}