'use client'
import { motion } from 'framer-motion'


export default function Hero(){
return (
<section
className="relative overflow-hidden py-16"
aria-label="Seção principal com chamada para ação"
>
<div
aria-hidden
className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(255,106,0,.22),transparent_60%),radial-gradient(900px_500px_at_-10%_0%,rgba(255,106,0,.14),transparent_55%)]"
/>
<div className="container relative grid md:grid-cols-2 gap-6 items-center">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: .5 }}
>
<span className="badge" aria-label="Selo de serviço rápido">
🛠️ Reparo rápido • 🛵 Leva e traz
</span>
<h1 className="mt-3 text-3xl md:text-5xl font-semibold">
Assistência técnica de celulares em <span className="text-orange">Rio Claro/SP</span>
</h1>
<p className="mt-3 text-neutral-300">
Troca de tela, bateria, conector, limpeza e software. Atendimento profissional, peças de qualidade e <strong>90 dias de garantia</strong>.
</p>
<div className="mt-4 flex flex-wrap gap-3">
<a className="btn" href="https://wa.me/5519971344065?text=Ol%C3%A1%20Sunfertech!%20Quero%20um%20or%C3%A7amento." target="_blank" rel="noopener">💬 Orçamento imediato</a>
<a className="btn btn-outline" href="#servicos">Ver serviços</a>
</div>
<ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-neutral-300" aria-label="Provas sociais">
<li className="card">★★★★★ Avaliado por clientes</li>
<li className="card">⏱️ Muitos reparos no mesmo dia</li>
<li className="card">✅ 90 dias de garantia</li>
</ul>
</motion.div>


<motion.figure
className="card"
initial={{ opacity: 0, scale:.98 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: .5, delay: .1 }}
>
<picture>
<source srcSet="/hero-sunfertech.webp" type="image/webp" />
<img
src="/hero-sunfertech.jpg"
alt="Técnico Sunfertech em bancada com microscópio"
className="rounded-xl"
/>
</picture>
<figcaption className="sr-only">Bancada de reparos Sunfertech</figcaption>
</motion.figure>
</div>
</section>
)
}