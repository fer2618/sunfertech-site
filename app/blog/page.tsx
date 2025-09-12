import type { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
title: 'Blog • Sunfertech',
description: 'Dicas práticas e preços locais de reparo em Rio Claro/SP para problemas comuns de smartphones.'
}


const posts = [
{ slug: 'troca-de-conector-iphone-11-preco-rio-claro', title: 'Quanto custa trocar conector do iPhone 11 em Rio Claro?', excerpt: 'Preço médio local, tempo de serviço e quando vale reparar.' },
{ slug: 'celular-caiu-na-agua-o-que-fazer', title: 'Celular caiu na água: o que fazer imediatamente?', excerpt: 'Passo a passo para minimizar danos antes da assistência.' },
{ slug: 'bateria-descarrega-rapido-causas-e-solucoes', title: 'Bateria descarregando rápido? Causas e soluções', excerpt: 'Dicas de diagnóstico e quando trocar a bateria.' }
]


export default function Blog(){
return (
<section className="py-16">
<div className="container">
<h1 className="text-3xl md:text-4xl font-semibold">Blog</h1>
<p className="text-neutral-300 mt-2">Conteúdo pensado para o dia a dia do usuário em Rio Claro/SP.</p>
<div className="grid md:grid-cols-3 gap-4 mt-6">
{posts.map(p => (
<article key={p.slug} className="card">
<h2 className="font-semibold text-xl"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
<p className="text-neutral-300 mt-1">{p.excerpt}</p>
<Link className="btn mt-3" href={`/blog/${p.slug}`}>Ler artigo</Link>
</article>
))}
</div>
</div>
</section>
)
}