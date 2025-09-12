export default function Footer(){
return (
<footer className="border-t border-neutral-900 bg-black">
<div className="container py-8 grid md:grid-cols-2 gap-6 text-neutral-300">
<div>
<div className="flex items-center gap-2 font-extrabold">
<span className="inline-grid place-items-center w-7 h-7 rounded-md bg-gradient-to-br from-orange to-[#FFA24D] text-black">S</span>
<span>Sunfertech</span>
</div>
<p className="mt-2">Assistência técnica de celulares em Rio Claro/SP com leva e traz, transparência e agilidade.</p>
<small className="opacity-70">© {new Date().getFullYear()} Sunfertech. Todos os direitos reservados.</small>
</div>
<div>
<p className="font-semibold">Contato</p>
<p>WhatsApp: <a className="underline" href="https://wa.me/5519971344065" target="_blank" rel="noopener">(19) 97134‑4065</a></p>
<p>Instagram: <a className="underline" href="https://www.instagram.com/sunfertech/" target="_blank" rel="noopener">@sunfertech</a></p>
</div>
</div>
</footer>
)
}