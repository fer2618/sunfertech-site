import Image from 'next/image'

export default function WhatsAppFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-50" aria-hidden={false} aria-label="WhatsApp flutuante">
      <a
        href="https://wa.me/5519971344065?text=Ol%C3%A1%20Sunfertech!%20Vim%20do%20site%20e%20quero%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener"
        className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
        title="Falar no WhatsApp"
        aria-label="Falar no WhatsApp"
      >
        <Image
          src="/whatsapp-icon.svg"  // icone do WhatsApp
          alt="WhatsApp"
          width={28}
          height={28}
         // className="filter brightness-0 invert"  // deixa o ícone branco
        />
        
        {/* Animação de pulse */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-0"></div>
      </a>
    </div>
  )
}