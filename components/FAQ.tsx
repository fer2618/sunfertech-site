export default function FAQ(){
const faqs = [
{ q: 'Vocês têm leva e traz?', a: 'Sim. Buscamos e entregamos seu celular em Rio Claro/SP. Combine pelo WhatsApp.' },
{ q: 'Qual o prazo médio de reparo?', a: 'Muitos reparos no mesmo dia. Informamos o prazo conforme avaliação do aparelho.' },
{ q: 'Tem garantia?', a: 'Sim, 90 dias de garantia em nossos serviços, conforme o tipo de reparo.' },
]
return (
<section id="faq" className="py-16" aria-labelledby="faq-title">
<div className="container">
<h2 id="faq-title" className="text-2xl md:text-3xl font-semibold">Dúvidas frequentes</h2>
<div className="mt-4">
{faqs.map((f, i) => (
<details key={i} className="bg-card border border-neutral-800 rounded-xl mb-2">
<summary className="cursor-pointer px-4 py-3 font-semibold">{f.q}</summary>
<div className="px-4 pb-4 text-neutral-300">{f.a}</div>
</details>
))}
</div>
</div>
</section>
)
}