export default function Steps(){
const steps = [
{ title: 'Você chama', desc: 'Fale pelo WhatsApp, informe o modelo e o problema. Enviamos o orçamento estimado.' },
{ title: 'Buscamos & avaliamos', desc: 'Retiramos no seu endereço em Rio Claro. Validamos o orçamento em bancada.' },
{ title: 'Reparamos & entregamos', desc: 'Serviço concluído com testes. Pagamento facilitado e garantia de 90 dias.' },
]
return (
<section id="como-funciona" className="py-16" aria-labelledby="como-title">
<div className="container">
<h2 id="como-title" className="text-2xl md:text-3xl font-semibold">Como funciona o leva e traz</h2>
<p className="mt-2 text-neutral-300">Prático, seguro e transparente. Você acompanha tudo pelo WhatsApp.</p>
<div className="mt-6 grid md:grid-cols-3 gap-4">
{steps.map((s, i) => (
<div key={i} className="card flex gap-3">
<div aria-hidden className="min-w-9 h-9 rounded-lg bg-gradient-to-br from-orange to-[#FFA24D] text-black font-extrabold grid place-items-center">{i+1}</div>
<div>
<h3 className="font-semibold">{s.title}</h3>
<p className="text-neutral-300 text-[0.97rem] mt-1">{s.desc}</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}