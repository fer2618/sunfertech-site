import ServiceCard from './ServiceCard'


export default function ServicesGrid(){
return (
<section id="servicos" className="py-16" aria-labelledby="servicos-title">
<div className="container">
<h2 id="servicos-title" className="text-2xl md:text-3xl font-semibold">Serviços principais</h2>
<p className="mt-2 text-neutral-300">Trabalhamos com as principais marcas (Apple, Samsung, Motorola, Xiaomi e outras). Usamos peças de qualidade e testamos tudo com você.</p>
<div className="mt-6 grid md:grid-cols-3 gap-4" role="list">
<ServiceCard title="Troca de Tela e Display" icon={<span>📱</span>}>
Substituição rápida com alinhamento e colagem segura. Opções original e first‑line.
</ServiceCard>
<ServiceCard title="Troca de Bateria" icon={<span>🔋</span>}>
Recupere a autonomia do aparelho com baterias novas e testadas em bancada.
</ServiceCard>
<ServiceCard title="Conector de Carga & Áudio" icon={<span>🔌</span>}>
Reparo e substituição de USB‑C/Lightning, P2 e limpeza profissional.
</ServiceCard>
<ServiceCard title="Limpeza com Microscópio" icon={<span>🔬</span>}>
Remoção de oxidação e sujeira com estação de retrabalho e boas práticas ESD.
</ServiceCard>
<ServiceCard title="Software & Atualizações" icon={<span>🧠</span>}>
Backup, restauração, formatação segura, remoção de travas e otimizações.
</ServiceCard>
<ServiceCard title="Câmera, Alto‑falante & Sensores" icon={<span>🎥</span>}>
Diagnóstico preciso e substituição de módulos com garantia.
</ServiceCard>
</div>
<div className="mt-5">
<a className="btn" href="https://wa.me/5519971344065?text=Quero%20fazer%20um%20reparo%20no%20meu%20celular." target="_blank" rel="noopener">Agendar leva e traz</a>
</div>
</div>
</section>
)
}