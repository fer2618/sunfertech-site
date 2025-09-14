'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16"
      aria-label="Seção principal com chamada para ação"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(255,106,0,.22),transparent_60%),radial-gradient(900px_500px_at_-10%_0%,rgba(255,106,0,.14),transparent_55%)]"
      />

      <div className="container relative grid md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge com prova de autoridade */}
          <span className="badge" aria-label="Experiência e logística">
            ⭐ 20 anos de experiência • 📱 +80.000 reparos • 🛵 Leva e traz
          </span>

          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold">
            Assistência técnica de celulares em <span className="text-orange">Rio Claro/SP</span>
          </h1>

          <p className="mt-3 text-neutral-300">
            Diagnóstico honesto, peças de qualidade e <strong>90 dias de garantia</strong>.
            Serviço rápido com leva e traz para sua comodidade.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            {/* Usa o redirect /wpp para rastrear cliques */}
            <a
              className="btn"
              href="/wpp?utm_source=site&utm_medium=hero&utm_campaign=orcamento"
            >
              💬 Pedir orçamento
            </a>
            <a className="btn btn-outline" href="#servicos">Ver serviços</a>
          </div>

          {/* Métricas como prova social */}
          <ul className="mt-4 grid sm:grid-cols-3 gap-2 text-sm text-neutral-300" aria-label="Provas e métricas">
            <li className="card">🗓️ 20 anos no mercado</li>
            <li className="card">📱 +80.000 reparos</li>
            <li className="card">✅ 90 dias de garantia</li>
          </ul>
        </motion.div>

        <motion.figure
          className="card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* next/image para otimização automática */}
          <Image
            src="/hero-sunfertech.webp"
            alt="Técnico Sunfertech em bancada com microscópio"
            width={800}
            height={600}
            priority
            className="rounded-xl"
            sizes="(min-width: 768px) 48rem, 100vw"
          />
          <figcaption className="sr-only">Bancada de reparos Sunfertech</figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
