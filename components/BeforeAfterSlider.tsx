'use client'
import { useId, useState } from 'react'


export default function BeforeAfterSlider(){
const id = useId()
const [value, setValue] = useState(50)
return (
<section className="py-16" aria-labelledby={`before-after-${id}`}>
<div className="container">
<h2 id={`before-after-${id}`} className="text-2xl md:text-3xl font-semibold">Antes e Depois</h2>
<p className="mt-2 text-neutral-300">Arraste para comparar o resultado do reparo.</p>
<div className="relative mt-4 max-w-3xl">
<div className="relative overflow-hidden rounded-xl border border-neutral-800">
<img src="/antes.jpg" alt="Aparelho antes do reparo" className="block w-full" />
<img
src="/depois.jpg"
alt="Aparelho depois do reparo"
className="absolute inset-0 h-full w-full"
style={{ clipPath: `inset(0 ${(100 - value)}% 0 0)` }}
/>
</div>
<input
aria-label="Controle de comparação antes/depois"
className="w-full mt-3"
type="range"
min={0}
max={100}
step={1}
value={value}
onChange={(e) => setValue(Number(e.target.value))}
/>
</div>
</div>
</section>
)
}