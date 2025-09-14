import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import FacebookPixel from './FacebookPixel'


// Otimização de fonte
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sunfertech.com.br'),
  
  // SEO básico
  title: {
    default: 'Conserto de Celular Rio Claro SP | Sunfertech - Leva e Traz',
    template: '%s | Sunfertech - Assistência Técnica'
  },
  description: 'Assistência técnica especializada em celulares e smartphones em Rio Claro SP. Leva e traz grátis, reparos de tela, bateria, conector. 20 anos de experiência, 90 dias de garantia. Orçamento pelo WhatsApp.',
  
  // Palavras-chave para SEO local
  keywords: [
    'conserto celular rio claro',
    'assistência técnica celular rio claro sp',
    'reparo smartphone rio claro',
    'troca tela celular rio claro',
    'consertar iphone rio claro',
    'assistência samsung rio claro',
    'leva e traz celular',
    'sunfertech'
  ],
  
  // Dados estruturados
  authors: [{ name: 'Sunfertech' }],
  creator: 'Sunfertech',
  publisher: 'Sunfertech',
  
  // Open Graph otimizado
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sunfertech.com.br',
    siteName: 'Sunfertech - Assistência Técnica',
    title: 'Conserto de Celular Rio Claro SP | Leva e Traz Grátis',
    description: 'Assistência técnica especializada com 20 anos de experiência. Leva e traz grátis, garantia de 90 dias. Orçamento rápido pelo WhatsApp.',
    images: [
      {
        url: '/og-sunfertech.jpg',
        width: 1200,
        height: 630,
        alt: 'Sunfertech - Assistência Técnica de Celulares Rio Claro SP',
        type: 'image/jpeg'
      }
    ]
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@sunfertech',
    creator: '@sunfertech',
    title: 'Conserto de Celular Rio Claro SP | Sunfertech',
    description: 'Assistência técnica especializada. Leva e traz grátis, 90 dias garantia.',
    images: ['/og-sunfertech.jpg']
  },
  
  // Links canônicos
  alternates: {
    canonical: 'https://sunfertech.com.br',
    languages: {
      'pt-BR': 'https://sunfertech.com.br'
    }
  },
  
  // Configurações de robôs
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  
  // Verificação do Google
  verification: {
    google: 'seu-codigo-google-verification',
    other: {
      'facebook-domain-verification': 'seu-codigo-facebook'
    }
  },
  
  // Configurações de aplicativo
  manifest: '/manifest.json',
  
  // Outros metadados
  category: 'Assistência Técnica',
  classification: 'Reparo de Eletrônicos'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
    { media: '(prefers-color-scheme: dark)', color: '#f97316' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark light'
}

// Componente de carregamento para Suspense
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-neutral-300">Carregando...</span>
      </div>
    </div>
  )
}

// Schema.org para SEO local
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://sunfertech.com.br/#business",
    "name": "Sunfertech - Assistência Técnica",
    "alternateName": "Sunfertech",
    "description": "Assistência técnica especializada em celulares e smartphones em Rio Claro SP",
    "url": "https://sunfertech.com.br",
    "telephone": "+5519971344065",
    "email": "atendimento@sunfertech.com.br",
    "priceRange": "$$",
    
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio Claro",
      "addressRegion": "SP",
      "addressCountry": "BR",
      "postalCode": "13500-390"
    },
    
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.4112",
      "longitude": "-47.5649"
    },
    
    "areaServed": {
      "@type": "City",
      "name": "Rio Claro",
      "containedInPlace": {
        "@type": "State",
        "name": "São Paulo"
      }
    },
    
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    
    "image": [
      "https://sunfertech.com.br/og-sunfertech.jpg",
      "https://sunfertech.com.br/hero-sunfertech.webp"
    ],
    
    "logo": "https://sunfertech.com.br/logo.jpg",
    
    "sameAs": [
      "https://www.instagram.com/sunfertech/",
      "https://facebook.com/sunfertech"
    ],
    
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Reparo",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Troca de Tela de Celular",
            "description": "Substituição de tela quebrada ou com defeito"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Troca de Bateria",
            "description": "Substituição de bateria viciada ou com baixa autonomia"
          }
        }
      ]
    },
    
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ana Silva"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Atendimento impecável! Buscaram meu iPhone em casa e entregaram no mesmo dia funcionando perfeitamente."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        {/* Preconnect para otimização */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        
        {/* Favicon otimizado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org */}
        <LocalBusinessSchema />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        {/* Analytics com Suspense para evitar hydration mismatch */}
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>

        {/* Tema provider com configuração otimizada */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange={false}
          storageKey="sunfertech-theme"
        >
          {/* Layout principal */}
          <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
            <Header />
            
            <main className="flex-1">
              <Suspense fallback={<LoadingFallback />}>
                {children}
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>

        {/* Scripts de performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Otimização de scroll suave
              if ('scrollBehavior' in document.documentElement.style) {
                document.documentElement.style.scrollBehavior = 'smooth';
              }
              
              // Preload de recursos críticos
              const preloadLink = document.createElement('link');
              preloadLink.rel = 'preload';
              preloadLink.href = '/hero-sunfertech.webp';
              preloadLink.as = 'image';
              document.head.appendChild(preloadLink);
              
              // Lazy loading para imagens não críticas
              if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[data-src]');
                images.forEach(img => {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                });
              }
            `
          }}
        />
      </body>
    </html>
  )
}