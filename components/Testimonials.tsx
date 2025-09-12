export default function Testimonials(){
return (
<section id="depoimentos" className="py-16" aria-labelledby="depo-title">
<div className="container grid md:grid-cols-2 gap-4">
<div className="card">
<h2 id="depo-title" className="text-2xl md:text-3xl font-semibold">Clientes recomendam</h2>
<p className="mt-2 text-[1.05rem] text-neutral-100">“Atendimento impecável e super rápido. Em poucas horas meu celular estava novo. O leva e traz salvou meu dia!”</p>
<p className="mt-2 text-yellow-300" aria-label="Avaliação 5 estrelas">★★★★★</p>
<p className="mt-1 text-neutral-400">Mais avaliações no nosso <a className="underline" href="https://www.instagram.com/sunfertech/" target="_blank" rel="noopener">Instagram</a>.</p>
</div>
<div className="card">
<h3 className="font-semibold">Selo de qualidade</h3>
<ul className="mt-2 list-disc list-inside text-neutral-300">
<li>Peças com procedência</li>
<li>Testes pós‑reparo</li>
<li>Garantia de 90 dias</li>
<li>Conserto limpo e seguro</li>
</ul>
</div>
</div>
</section>
)
}