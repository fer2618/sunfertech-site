// components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ui/ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-900 bg-black/60">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold" aria-label="Sunfertech Home">
          <Image
            src="/logo.jpg"
            alt="Sunfertech — Assistência Técnica de Celulares"
            width={28}
            height={28}
            priority
            className="rounded"
          />
          <span>Sunfertech</span>
        </Link>

        <nav aria-label="Menu principal" className="hidden md:flex items-center gap-2 text-neutral-300">
          <a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#servicos">Serviços</a>
          <a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#como-funciona">Leva e Traz</a>
          <a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#depoimentos">Depoimentos</a>
          <a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#faq">Dúvidas</a>

          <Link
            href="/wpp?utm_source=site&utm_medium=header&utm_campaign=orcamento"
            className="ml-2 px-4 py-2 rounded-xl border border-orange-700 text-orange-400 hover:bg-orange-600/10"
          >
            Orçamento
          </Link>

          <ThemeToggle />
        </nav>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
