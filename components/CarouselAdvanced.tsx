'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'


const slides = [
{ title: 'Troca de Tela', img: '/carrossel-tela.jpg', alt: 'Tela sendo substituída' },
{ title: 'Bateria Nova', img: '/carrossel-bateria.jpg', alt: 'Bateria sendo testada' },
{ title: 'Conector de Carga', img: '/carrossel-conector.jpg', alt: 'Conector em reparo' },
{ title: 'Limpeza Microscópio', img: '/carrossel-micro.jpg', alt: 'Limpeza em microscópio' },
]

export default function CarouselAdvanced(){
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
const [selected, setSelected] = useState(0)


const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])


// autoplay
useEffect(() => {
if(!emblaApi) return
const interval = setInterval(() => emblaApi.scrollNext(), 4000)
return () => clearInterval(interval)
}, [emblaApi])


// selected index for dots
useEffect(() => {
if(!emblaApi) return
const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
emblaApi.on('select', onSelect)
onSelect()
return () => emblaApi.off('select', onSelect)
}, [emblaApi])


return (
<section className="py-16" aria-labelledby="car-adv-title">
<div className="container">
<div className="flex items-center justify-between">
<h2 id="car-adv-title" className="text-2xl md:text-3xl font-semibold">Veja nosso trabalho</h2>
<div className="flex gap-2" role="group" aria-label="Controles do carrossel">
<button className="btn btn-outline" onClick={scrollPrev} aria-label="Anterior">◀</button>
<button className="btn" onClick={scrollNext} aria-label="Próximo">▶</button>
</div>
</div>
<div ref={emblaRef} className="mt-4 overflow-hidden" aria-roledescription="carrossel">
<div className="flex gap-4">
{slides.map((it, i) => (
<figure key={i} className="card min-w-[300px]">
<img src={it.img} alt={it.alt} className="rounded-xl" />
<figcaption className="mt-2 text-neutral-300">{it.title}</figcaption>
</figure>
))}
</div>
</div>
<div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Seleção de slide">
{slides.map((_, i) => (
<button
key={i}
role="tab"
aria-selected={selected === i}
className={`w-3 h-3 rounded-full ${selected===i?'bg-orange':'bg-neutral-700'}`}
onClick={() => emblaApi?.scrollTo(i)}
>
<span className="sr-only">Slide {i+1}</span>
</button>
))}
</div>
</div>
</section>
)
}