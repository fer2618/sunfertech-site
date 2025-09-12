import type { Metadata } from 'next'


export const metadata: Metadata = {
title: 'Garantia • Sunfertech',
description: 'Garantia de 90 dias em nossos serviços. Veja condições e como acionar.',
alternates: { canonical: '/garantia' }
}


export default function Garantia(){
return (
<section className="py-16">
<div className="container grid gap-6">
<header>
<h1 className="text-3xl md:text-4xl font-semibold">Garantia Sunfertech</h1>
<p className="mt-2 text-neutral-300">Oferecemos <strong>90 dias de garantia</strong> em serviços, conforme legislação e boas práticas do setor.</p>
</header>


<div className="grid md:grid-cols-2 gap-4">
<div className="card">
<h2 className="font-semibold">Cobertura</h2>
<ul className="list-disc list-inside text-neutral-300 mt-2">
<li>Defeitos de fabricação da peça instalada;</li>
<li>Falhas de montagem (ajuste/encaixe, vedação, conectores);</li>
<li>Comprovação via testes de bancada.</li>
</ul>
</div>
<div className="card">
<h2 className="font-semibold">Não cobre</h2>
<ul className="list-disc list-inside text-neutral-300 mt-2">
<li>Queda, impacto, oxidação ou violação posterior;</li>
<li>Intervenções de terceiros no período de garantia;</li>
<li>Desgaste natural de componentes não substituídos.</li>
</ul>
</div>
</div>


<div className="card">
<h2 className="font-semibold">Como acionar</h2>
<ol className="list-decimal list-inside text-neutral-300 mt-2">
<li>Fale conosco pelo WhatsApp (descreva o ocorrido e modelo);</li>
<li>Agendamos avaliação para testes de bancada;</li>
<li>Confirmando cobertura, realizamos o reparo sem custo adicional.</li>
</ol>
</div>


<div className="mt-4">
<a className="btn" href="https://wa.me/5519971344065?text=Quero%20tirar%20d%C3%BAbidas%20sobre%20garantia" target="_blank" rel="noopener" data-analytics="whatsapp_click">Falar sobre garantia</a>
</div>
</div>
</section>
)
}