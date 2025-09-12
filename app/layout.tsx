import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { Metadata } from 'next'


const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] })


export const metadata: Metadata = {
metadataBase: new URL('https://sunfertech.vercel.app'),
title: 'Sunfertech • Assistência Técnica de Celulares em Rio Claro/SP | Leva e Traz',
description: 'Reparo de celulares com leva e traz em Rio Claro/SP. Troca de tela, bateria, conector, limpeza e software. Orçamento imediato pelo WhatsApp.',
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
alternates: { canonical: '/' },
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