'use client'

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sunfertech Assistência Técnica",
    image: "https://sunfertech.vercel.app/og-sunfertech.jpg",
    url: "https://sunfertech.vercel.app/",
    telephone: "+55 19 97134-4065",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio Claro",
      addressRegion: "SP",
      addressCountry: "BR"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
