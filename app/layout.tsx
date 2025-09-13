import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata, Viewport } from 'next'


const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })


export const metadata: Metadata = {
metadataBase: new URL('https://sunfertech.vercel.app'),
title: 'Conserto de Celular em Rio Claro/SP | Sunfertech Leva e Traz',
description: 'Assistência técnica de celulares em Rio Claro com leva e traz. Reparos de tela, bateria, conector e software para iPhone e Android. Orçamento rápido pelo WhatsApp.',
openGraph: {
type: 'website',
title: 'Assistência Técnica de Celulares | Sunfertech',
description: 'Leva e traz, reparo rápido e garantia. Fale agora pelo WhatsApp.',
url: '/',
siteName: 'Sunfertech',
images: [{ url: '/og-sunfertech.jpg', width: 1200, height: 630 }]
},
twitter: {
card: 'summary_large_image',
title: 'Assistência Técnica Sunfertech',
description: 'Reparo de celulares com leva e traz em Rio Claro/SP.',
images: ['/og-sunfertech.jpg']
},
alternates: { canonical: '/' }
}


export const viewport: Viewport = {
themeColor: '#FF6A00'
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR" suppressHydrationWarning>
<body className={poppins.className}>
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
<Header />
<main>{children}</main>
<Footer />
</ThemeProvider>
</body>
</html>
)
}