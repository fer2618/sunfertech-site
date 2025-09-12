'use client'
import { useEffect, useState } from 'react'


export default function StickyCTA(){
const [visible, setVisible] = useState(false)
useEffect(() => {
const onScroll = () => setVisible(window.scrollY > 600)
onScroll()
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])
if(!visible) return null
return (
<div className="fixed inset-x-0 bottom-0 z-40">
<div className="container">
<div className="mb-4 rounded-2xl border border-neutral-800 bg-black/80 backdrop-blur p-3 flex flex-wrap gap-2 items-center justify-between">
<p className="text-neutral-200">Precisa do celular funcionando hoje? Fale agora no WhatsApp.</p>
<a className="btn" href="https://wa.me/5519971344065?text=Preciso%20de%20ajuda%20agora" target="_blank" rel="noopener">Falar no WhatsApp</a>
</div>
</div>
</div>
)
}