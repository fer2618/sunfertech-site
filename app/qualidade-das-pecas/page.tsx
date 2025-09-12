import type { Metadata } from 'next'


export const metadata: Metadata = {
title: 'Qualidade das Peças • Sunfertech',
description: 'Peças originais e A+ testadas em bancada, com garantia. Conheça nossa política de procedência e testes.',
alternates: { canonical: '/qualidade-das-pecas' }
}


export default function QualidadeDasPecas(){
return (
<section className="py-16">
<div className="container grid gap-6">
<header>
<h1 className="text-3xl md:text-4xl font-semibold">Qualidade das Peças & Equipamentos</h1>
<p className="mt-2 text-neutral-300">Trabalhamos com fornecedores de confiança, peças originais e A+ (first‑line), testadas com padrões de bancada.</p>
</header>


<div className="grid md:grid-cols-3 gap-4">
<div className="card">
<h2 className="font-semibold">Procedência</h2>
<p className="text-neutral-300 mt-2">Selecionamos fornecedores com histórico consistente. Cada lote é conferido por número de lote e especificação técnica.</p>
</div>
<div className="card">
<h2 className="font-semibold">Testes em bancada</h2>
<p className="text-neutral-300 mt-2">Uso de microscópio, estação de retrabalho BGA e fonte assimétrica. Testes de touch, brilho, contraste, áudio e sensores.</p>
</div>
<div className="card">
<h2 className="font-semibold">Montagem limpa</h2>
<p className="text-neutral-300 mt-2">Boas práticas ESD, limpeza de flat cables, vedação correta (cola/adesivo OCA) e checagem de parafusos/selos.</p>
</div>
</div>


<figure className="card">
<img src="/qualidade-bancada.jpg" alt="Bancada Sunfertech com microscópio e estação de retrabalho" className="rounded-xl" />
<figcaption className="text-neutral-400 mt-2">Nossa bancada e instrumentos de medição asseguram padrões altos de reparo.</figcaption>
</figure>


<div className="card">
<h2 className="font-semibold">Por que isso importa?</h2>
<ul className="list-disc list-inside text-neutral-300 mt-2">
<li>Reduz chance de retorno pós‑reparo;</li>
<li>Assegura fidelidade de cores e sensibilidade do touch;</li>
<li>Prolonga vida útil do conserto.</li>
</ul>
</div>


<div className="mt-4">
<a className="btn" href="https://wa.me/5519971344065?text=Quero%20um%20or%C3%A7amento%20com%20pe%C3%A7as%20de%20qualidade" target="_blank" rel="noopener" data-analytics="whatsapp_click">Pedir orçamento</a>
</div>
</div>
</section>
)
}