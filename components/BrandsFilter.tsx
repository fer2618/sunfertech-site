'use client'
import { useMemo, useState } from 'react'


const CATALOG = [
{ brand: 'Apple', name: 'iPhone 11', service: 'Troca de Tela', slug: 'iphone-11-tela' },
{ brand: 'Apple', name: 'iPhone XR', service: 'Bateria', slug: 'iphone-xr-bateria' },
{ brand: 'Samsung', name: 'A52', service: 'Conector de Carga', slug: 'a52-conector' },
{ brand: 'Motorola', name: 'Moto G60', service: 'Software', slug: 'moto-g60-software' },
{ brand: 'Xiaomi', name: 'Redmi Note 10', service: 'Câmera', slug: 'redmi-note-10-camera' },
]


const BRANDS = ['Apple', 'Samsung', 'Motorola', 'Xiaomi'] as const


type Brand = typeof BRANDS[number]


export default function BrandsFilter(){
const [brand, setBrand] = useState<Brand>('Apple')
const items = useMemo(() => CATALOG.filter(i => i.brand === brand), [brand])
return (
<section className="py-16" aria-labelledby="brands-title">
<div className="container">
<h2 id="brands-title" className="text-2xl md:text-3xl font-semibold">Marcas e Problemas</h2>
<div role="tablist" aria-label="Seleção de marcas" className="mt-3 flex flex-wrap gap-2">
{BRANDS.map(b => (
<button
key={b}
role="tab"
aria-selected={brand === b}
className={`btn ${brand === b ? '' : 'btn-outline'}`}
onClick={() => setBrand(b)}
>{b}</button>
))}
</div>
<div className="mt-6 grid md:grid-cols-3 gap-4">
{items.map((it, i) => (
<div key={i} className="card">
<h3 className="font-semibold">{it.name}</h3>
<p className="text-neutral-300">{it.service}</p>
<a className="btn mt-3" href={`https://wa.me/5519971344065?text=Quero%20${encodeURIComponent(it.service)}%20para%20${encodeURIComponent(it.name)}`} target="_blank" rel="noopener">Pedir orçamento</a>
</div>
))}
</div>
</div>
</section>
)
}