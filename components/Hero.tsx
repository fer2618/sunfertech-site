'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Background gradients com animação */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-orange-500/10 to-transparent opacity-60 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-500/8 to-transparent opacity-40" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 text-orange-400 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Especialistas há 20 anos • +80.000 reparos • Rio Claro/SP
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">Conserto de</span>
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  celular em casa
                </span>
                <span className="block text-3xl lg:text-4xl text-neutral-300 font-normal">
                  sem você sair de casa
                </span>
              </h1>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🏠', text: 'Leva e traz' },
                { icon: '⚡', text: 'Reparo em 24h' },
                { icon: '✅', text: '90 dias garantia' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-neutral-300 leading-relaxed max-w-lg">
              Diagnóstico honesto, peças de qualidade e técnicos especialistas. 
              <strong className="text-white"> Agendamento rápido pelo WhatsApp</strong> 
              e entrega no mesmo dia.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/wpp?utm_source=site&utm_medium=hero&utm_campaign=orcamento"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-2xl">💬</span>
                <span>Pedir orçamento grátis</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
              
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-neutral-700 text-neutral-300 font-semibold hover:border-neutral-600 hover:text-white hover:bg-neutral-900/50 transition-all duration-300"
              >
                <span>Ver serviços</span>
                <span className="text-lg">↓</span>
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-black flex items-center justify-center text-black font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-neutral-400">
                <div className="text-yellow-400">★★★★★</div>
                <div>+500 clientes satisfeitos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src="/hero-sunfertech.webp"
                alt="Técnico especialista Sunfertech reparando celular em bancada profissional"
                width={600}
                height={500}
                priority
                className="w-full h-auto object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              
              {/* Overlay com stats */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-orange-400 font-bold text-xl">20+</div>
                      <div className="text-xs text-neutral-300">Anos</div>
                    </div>
                    <div>
                      <div className="text-orange-400 font-bold text-xl">80k+</div>
                      <div className="text-xs text-neutral-300">Reparos</div>
                    </div>
                    <div>
                      <div className="text-orange-400 font-bold text-xl">24h</div>
                      <div className="text-xs text-neutral-300">Prazo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
            >
              🔧
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-xl shadow-lg"
            >
              ✅
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-6 rounded-3xl bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 border border-neutral-700"
        >
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">⚡ Atendimento Express Hoje</h3>
            <p className="text-neutral-300">
              Problemas urgentes? Fazemos diagnóstico e orçamento em 30 minutos
            </p>
            <a
              href="/wpp?utm_source=site&utm_medium=hero_urgent&utm_campaign=express"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-colors"
            >
              🚨 Urgente - Falar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}