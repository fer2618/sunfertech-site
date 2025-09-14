// components/Footer.tsx
import Link from 'next/link'

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M13 20v-6h2l.8-3H13v-1c0-.6.4-1 1-1h1V6h-2c-2 0-3 1.5-3 3.2V11H8v3h2v6h3Z"
        fill="currentColor"
      />
    </svg>
  )
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M20.5 12a8.5 8.5 0 0 1-12 7.5L4 20l.6-4.5A8.5 8.5 0 1 1 20.5 12Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M15.6 14.7c-.3.5-1.2.9-1.8.8-1.6-.3-3.6-2.2-4.1-3.6-.2-.6.2-1.4.7-1.7l.7-.5 1.8 1.8-.6.6c.2.6.9 1.2 1.5 1.4l.6-.6 1.8 1.8-.6.6Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-900">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="font-semibold">Sunfertech</h3>
          <p className="text-neutral-400">
            Assistência técnica de celulares em Rio Claro (SP).
            Leva e traz, peças de qualidade e garantia de 90 dias.
          </p>

          {/* Ícones sociais */}
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/sunfertech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 hover:bg-neutral-900"
              aria-label="Instagram da Sunfertech"
              title="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>

            <a
              href="https://facebook.com/sunfertech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 hover:bg-neutral-900"
              aria-label="Facebook da Sunfertech"
              title="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>

            <Link
              href="/wpp?utm_source=site&utm_medium=footer_social&utm_campaign=orcamento"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 hover:bg-neutral-900"
              aria-label="WhatsApp da Sunfertech"
              title="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <ul className="text-neutral-400">
            <li>Seg a Sex: 10h–18h</li>
            <li>Sábado: 10h–16h</li>
            <li>
              WhatsApp:{' '}
              <Link
                href="/wpp?utm_source=site&utm_medium=footer&utm_campaign=orcamento"
                className="text-orange-400 hover:underline"
              >
                +55 19 97134-4065
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="text-neutral-400">
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#como-funciona" className="hover:underline">Leva e Traz</a></li>
            <li><a href="#faq" className="hover:underline">Dúvidas</a></li>
            <li><a href="https://www.instagram.com/sunfertech/" target="_blank" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-900 py-4 text-center text-neutral-500">
        © {new Date().getFullYear()} Sunfertech — Rio Claro, SP
      </div>
    </footer>
  )
}
