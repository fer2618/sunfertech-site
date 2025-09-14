// components/TrustReasons.tsx
export default function TrustReasons() {
  const items = [
    {
      title: 'Especialista de verdade',
      desc: 'Técnico há 20 anos, mais de 80 mil reparos concluídos.',
    },
    {
      title: 'Qualidade e transparência',
      desc: 'Peças selecionadas, diagnóstico claro e aprovação prévia.',
    },
    {
      title: 'Garantia de 90 dias',
      desc: 'Compromisso com o pós-atendimento e sua tranquilidade.',
    },
    {
      title: 'Leva e traz',
      desc: 'Buscamos e entregamos seu aparelho com praticidade.',
    },
  ]

  return (
    <section className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">Por que escolher a Sunfertech</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {items.map((it) => (
          <li key={it.title} className="rounded-xl border border-neutral-800 p-4">
            <h3 className="font-semibold">{it.title}</h3>
            <p className="text-sm text-neutral-400">{it.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
