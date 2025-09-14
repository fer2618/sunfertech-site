// components/ExperienceBar.tsx
'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  label: string
  value: number
  suffix?: string
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

function AnimatedNumber({ value, duration = 1600 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    startRef.current = start

    let raf = 0
    const tick = (now: number) => {
      const elapsed = now - (startRef.current ?? now)
      const t = Math.min(1, elapsed / duration)
      setDisplay(Math.round(value * easeOutCubic(t)))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])

  return <span>{display.toLocaleString('pt-BR')}</span>
}

export default function ExperienceBar() {
  const stats: Stat[] = [
    { label: 'Anos de experiência', value: 20, suffix: '+' },
    { label: 'Celulares reparados', value: 80000, suffix: '+' },
    { label: 'Garantia (dias)', value: 90 },
    { label: 'Atendimento leva e traz', value: 1, suffix: ' dia' }, // ajuste se quiser
  ]

  return (
    <section
      aria-label="Nossas credenciais"
      className="rounded-2xl border border-neutral-800 bg-neutral-950/60 px-6 py-6 md:px-8 md:py-8"
    >
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s) => (
          <li key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-orange-500">
              <AnimatedNumber value={s.value} />
              {typeof s.suffix === 'string' ? <span>{s.suffix}</span> : null}
            </div>
            <p className="mt-1 text-sm text-neutral-400">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
