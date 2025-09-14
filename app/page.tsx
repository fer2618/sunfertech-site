import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Componentes críticos (carregamento prioritário)
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import { JsonLd } from './JsonLd'

// Componentes não-críticos (lazy loading)
const Steps = dynamic(() => import('../components/Steps'), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-900 rounded-xl" />
})

const TrustSection = dynamic(() => import('../components/TrustSection'), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-900 rounded-xl" />
})

const Testimonials = dynamic(() => import('../components/Testimonials'), {
  loading: () => <div className="h-64 animate-pulse bg-neutral-900 rounded-xl" />
})

const FAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-900 rounded-xl" />
})

const BeforeAfterSlider = dynamic(() => import('../components/BeforeAfterSlider'), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-900 rounded-xl" />
})

const CarouselAdvanced = dynamic(() => import('../components/CarouselAdvanced'), {
  loading: () => <div className="h-96 animate-pulse bg-neutral-900 rounded-xl" />
})

const BrandsFilter = dynamic(() => import('../components/BrandsFilter'), {
  loading: () => <div className="h-64 animate-pulse bg-neutral-900 rounded-xl" />
})

const StickyCTA = dynamic(() => import('../components/StickyCTA'), {
  ssr: false // Componente que depende de scroll
})

const WhatsAppFloat = dynamic(() => import('../components/WhatsAppFloat'), {
  ssr: false // Componente flutuante não precisa de SSR
})

// Metadados otimizados para SEO
export const metadata: Metadata = {
  title: 'Conserto de Celular Rio Claro SP | Sunfertech - Leva e Traz',
  description: 'Assistência técnica especializada em celulares em Rio Claro SP. Leva e traz grátis, reparos de tela, bateria, conector. 20 anos de experiência, 90 dias de garantia. Orçamento pelo WhatsApp.',
  
  keywords: [
    'conserto celular rio claro',
    'assistência técnica celular rio claro sp', 
    'reparo smartphone rio claro',
    'troca tela celular rio claro',
    'consertar iphone rio claro',
    'assistência samsung rio claro',
    'leva e traz celular',
    'sunfertech',
    'bateria celular rio claro',
    'conector carga celular'
  ],
  
  openGraph: {
    title: 'Assistência Técnica de Celulares Rio Claro | Leva e Traz Grátis',
    description: 'Reparo especializado com 20 anos de experiência. Diagnóstico honesto, peças de qualidade, garantia de 90 dias.',
    images: [
      {
        url: '/og-sunfertech.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunfertech - Assistência Técnica de Celulares Rio Claro SP'
      }
    ],
    type: 'website',
    locale: 'pt_BR'
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Conserto de Celular Rio Claro | Sunfertech',
    description: 'Assistência técnica especializada. Leva e traz grátis, 90 dias garantia.',
    images: ['/og-sunfertech.jpg']
  },
  
  alternates: {
    canonical: 'https://sunfertech.com.br'
  },
  
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'Rio Claro',
    'geo.position': '-22.4112;-47.5649',
    'ICBM': '-22.4112, -47.5649'
  }
}

// Componente de loading para seções lazy
function SectionSkeleton({ height = 'h-96' }: { height?: string }) {
  return (
    <div className={`${height} animate-pulse bg-neutral-900/50 rounded-xl mx-4 mb-8`}>
      <div className="container h-full flex items-center justify-center">
        <div className="text-neutral-400">Carregando seção...</div>
      </div>
    </div>
  )
}

// Componente de seção com error boundary
function SectionWrapper({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode 
}) {
  return (
    <Suspense fallback={fallback || <SectionSkeleton />}>
      {children}
    </Suspense>
  )
}

export default function Home() {
  return (
    <>
      {/* Schema.org estruturado */}
      <JsonLd />
      
      {/* Seções críticas - carregamento prioritário */}
      <Hero />
      <ServicesGrid />
      
      {/* Seções não-críticas - lazy loading */}
      <SectionWrapper fallback={<SectionSkeleton height="h-64" />}>
        <Steps />
      </SectionWrapper>
      
      <SectionWrapper>
        <TrustSection />
      </SectionWrapper>
      
      <SectionWrapper fallback={<SectionSkeleton height="h-96" />}>
        <BeforeAfterSlider />
      </SectionWrapper>
      
      <SectionWrapper fallback={<SectionSkeleton height="h-64" />}>
        <Testimonials />
      </SectionWrapper>
      
      <SectionWrapper>
        <CarouselAdvanced />
      </SectionWrapper>
      
      <SectionWrapper fallback={<SectionSkeleton height="h-64" />}>
        <BrandsFilter />
      </SectionWrapper>
      
      <SectionWrapper>
        <FAQ />
      </SectionWrapper>
      
      {/* Componentes flutuantes - sem SSR */}
      <SectionWrapper>
        <StickyCTA />
      </SectionWrapper>
      
      <SectionWrapper>
        <WhatsAppFloat />
      </SectionWrapper>
      
      {/* Preload de recursos importantes */}
      <link rel="preload" href="/hero-sunfertech.webp" as="image" />
      <link rel="preload" href="/antes.jpg" as="image" />
      <link rel="preload" href="/depois.jpg" as="image" />
      
      {/* Structured Data adicional para serviços */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Conserto de Celular",
            "description": "Assistência técnica especializada em smartphones e celulares",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Sunfertech",
              "telephone": "+5519971344065",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rio Claro",
                "addressRegion": "SP"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Rio Claro"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Reparo",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Troca de Tela",
                    "description": "Substituição de display quebrado ou com defeito"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "120",
                    "priceCurrency": "BRL"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Troca de Bateria",
                    "description": "Substituição de bateria viciada"
                  },
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "80",
                    "priceCurrency": "BRL"
                  }
                }
              ]
            },
            "warranty": "P90D"
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Vocês têm leva e traz?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Sim. Buscamos e entregamos seu celular em Rio Claro/SP. Combine pelo WhatsApp."
                }
              },
              {
                "@type": "Question",
                "name": "Qual o prazo médio de reparo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Muitos reparos no mesmo dia. Informamos o prazo conforme avaliação do aparelho."
                }
              },
              {
                "@type": "Question",
                "name": "Tem garantia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, 90 dias de garantia em nossos serviços, conforme o tipo de reparo."
                }
              }
            ]
          })
        }}
      />
    </>
  )
}