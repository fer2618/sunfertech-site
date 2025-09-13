import type { Metadata } from 'next'
import { notFound } from 'next/navigation'


type Post = { title: string; content: string; }


const DB: Record<string, Post> = {
'troca-de-conector-iphone-11-preco-rio-claro': {
title: 'Quanto custa trocar conector do iPhone 11 em Rio Claro?',
content: `
**Resumo rápido:**
Preço local costuma variar conforme peça e diagnóstico. Em geral, o serviço inclui desmontagem, limpeza do flex e testes de carga/USB.


**Sinais do problema:** cabo falha, só carrega em certa posição, não reconhece PC.


**Quando vale reparar:** quando há mau-contato e desgaste natural. Se houver oxidação severa por líquido, o tratamento é diferente e pode incluir limpeza profunda.
`
},
'celular-caiu-na-agua-o-que-fazer': {
title: 'Celular caiu na água: o que fazer imediatamente?',
content: `
**Pare agora:** desligue o aparelho, não carregue e não tente secar com calor.
Leve para limpeza em microscópio o quanto antes para minimizar oxidação.
`
},
'bateria-descarrega-rapido-causas-e-solucoes': {
title: 'Bateria descarregando rápido? Causas e soluções',
content: `
Checagens: apps em segundo plano, saúde da bateria, conector e ciclos.
Quando trocar: queda de autonomia, desligamentos repentinos, inchaço.
`
}
}


export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
const post = DB[params.slug]
if (!post) return { title: 'Artigo não encontrado • Sunfertech' }
return { title: `${post.title} • Sunfertech`, description: post.content.slice(0, 140) }
}

export async function generateStaticParams() {
  return Object.keys(DB).map((slug) => ({
    slug,
  }));
}


export default function PostPage({ params }: { params: { slug: string } }){
const post = DB[params.slug]
if (!post) return notFound()
return (
<section className="py-16">
<div className="container prose prose-invert max-w-none">
<h1 className="text-3xl md:text-4xl font-semibold">{post.title}</h1>
<article className="mt-4 text-neutral-200 whitespace-pre-line">{post.content}</article>
</div>
</section>
)
}