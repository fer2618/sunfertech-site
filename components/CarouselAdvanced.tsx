'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { track } from '../lib/analytics'

const slides = [
  { title: 'Troca de Tela', img: '/carrossel-tela.jpg', alt: 'Tela sendo substituída' },
  { title: 'Bateria Nova', img: '/carrossel-bateria.jpg', alt: 'Bateria sendo testada' },
  { title: 'Conector de Carga', img: '/carrossel-conector.jpg', alt: 'Conector em reparo' },
  { title: 'Limpeza Microscópio', img: '/carrossel-micro.jpg', alt: 'Limpeza em microscópio' },
]

export default function CarouselAdvanced(){
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const timer = useRef<number | null>(null)
  const regionRef = useRef<HTMLDivElement>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    regionRef.current && (regionRef.current.textContent = `Slide ${emblaApi.selectedScrollSnap()+1} de ${slides.length}`)
  }, [emblaApi])

  const scrollPrev = useCallback(() => { emblaApi?.scrollPrev(); track?.('carousel_nav', { dir: 'prev' }) }, [emblaApi])
  const scrollNext = useCallback(() => { emblaApi?.scrollNext(); track?.('carousel_nav', { dir: 'next' }) }, [emblaApi])
  const scrollTo = useCallback((i: number) => { emblaApi?.scrollTo(i); track?.('carousel_dot', { index: i }) }, [emblaApi])

  const startAutoplay = useCallback(() => { stopAutoplay(); timer.current = window.setInterval(() => emblaApi?.scrollNext(), 4000) }, [emblaApi])
  const stopAutoplay = useCallback(() => { if (timer.current) { window.clearInterval(timer.current); timer.current = null } }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    startAutoplay()
    return () => { stopAutoplay(); emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay])

  return (
    <section className="py-16" aria-labelledby="car-adv-title">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 id="car-adv-title" className="text-2xl md:text-3xl font-semibold">Veja nosso trabalho</h2>
          <div className="flex gap-2" role="group" aria-label="Controles do carrossel">
            <button className="btn btn-outline disabled:opacity-50" disabled={!canScrollPrev} onClick={scrollPrev} aria-label="Anterior">◀</button>
            <button className="btn disabled:opacity-50" disabled={!canScrollNext} onClick={scrollNext} aria-label="Próximo">▶</button>
          </div>
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true" ref={regionRef} />

        <div className="mt-4 overflow-hidden" ref={emblaRef} aria-roledescription="carrossel"
             onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay} onTouchStart={stopAutoplay} onTouchEnd={startAutoplay}>
          <div className="flex gap-4">
            {slides.map((it, i) => (
              <figure key={i} className="card min-w-[300px]">
                <img src={it.img} alt={it.alt} className="rounded-xl" />
                <figcaption className="mt-2 text-neutral-300">{it.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-3 flex gap-2" role="tablist" aria-label="Navegação por slides">
          {slides.map((_, i) => (
            <button key={i} role="tab" aria-selected={selectedIndex === i}
                    aria-controls={`slide-${i}`} className={`h-2 w-6 rounded-full ${selectedIndex === i ? 'bg-orange' : 'bg-neutral-700'}`}
                    onClick={() => scrollTo(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
