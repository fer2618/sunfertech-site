'use client'
import Link from 'next/link'
import ThemeToggle from './ui/ThemeToggle'
import Logo from '../public/logo.jpg' 

export default function Header(){
return (
<header className="sticky top-0 z-50 backdrop-blur border-b border-neutral-900 bg-black/60">
<div className="container h-16 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2 font-extrabold" aria-label="Sunfertech Home">
<img src={Logo.src} alt="Sunfertech Logo" className="h-7 w-7" />
<span>Sunfertech</span>
</Link>
<nav aria-label="Menu principal" className="hidden md:flex items-center gap-2 text-neutral-300">
<a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#servicos">Serviços</a>
<a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#como-funciona">Leva e Traz</a>
<a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#depoimentos">Depoimentos</a>
<a className="px-3 py-2 rounded-md hover:bg-neutral-900 hover:text-white" href="#faq">Dúvidas</a>
<a className="btn btn-outline" href="https://wa.me/5519971344065?text=Ol%C3%A1%20Sunfertech!%20Quero%20um%20or%C3%A7amento." target="_blank" rel="noopener">Orçamento</a>
<ThemeToggle />
</nav>
<div className="md:hidden">
<ThemeToggle />
</div>
</div>
</header>
)
}