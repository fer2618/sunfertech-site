'use client'
import { useState } from 'react'
// import { track } from 'lib/analytics'


export default function Contato(){
const [form, setForm] = useState({ nome:'', modelo:'', problema:'', whatsapp:'', consent:false })
const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
const target = e.target as HTMLInputElement
const { name, value, type, checked } = target
setForm(f => ({ ...f, [name]: type==='checkbox'?checked:value }))
}
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault()
if(!form.consent) return alert('É necessário aceitar a política de privacidade.')
// track('form_submit', { ...form })
window.open(`https://wa.me/5519971344065?text=Olá,%20sou%20${encodeURIComponent(form.nome)}.%20Tenho%20um%20${encodeURIComponent(form.modelo)}%20com%20${encodeURIComponent(form.problema)}.%20Meu%20WhatsApp:%20${encodeURIComponent(form.whatsapp)}`)
}
return (
<section className="py-16">
<div className="container max-w-xl">
<h1 className="text-3xl md:text-4xl font-semibold">Contato</h1>
<p className="mt-2 text-neutral-300">Preencha o formulário abaixo e fale direto conosco via WhatsApp.</p>
<form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
<input className="card p-3" name="nome" placeholder="Seu nome" value={form.nome} onChange={handleChange} required />
<input className="card p-3" name="modelo" placeholder="Modelo do celular" value={form.modelo} onChange={handleChange} required />
<textarea className="card p-3" name="problema" placeholder="Descreva o problema" value={form.problema} onChange={handleChange} required />
<input className="card p-3" name="whatsapp" placeholder="Seu WhatsApp" value={form.whatsapp} onChange={handleChange} required />
<label className="flex items-start gap-2 text-neutral-300">
<input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
<span>Autorizo o uso dos meus dados para contato conforme a <a href="/politica-privacidade" className="underline">Política de Privacidade</a>.</span>
</label>
<button type="submit" className="btn">Enviar</button>
</form>
</div>
</section>
)
}