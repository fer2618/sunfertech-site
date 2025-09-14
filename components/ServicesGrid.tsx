'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface Service {
  title: string
  description: string
  icon: string
  price: string
  duration: string
  warranty: string
  popular?: boolean
}

const services: Service[] = [
  {
    title: "Troca de Tela",
    description: "Display quebrado ou touch não funciona? Substituição completa com peças de qualidade e teste rigoroso.",
    icon: "📱",
    price: "A partir de R$ 120",
    duration: "2-4 horas",
    warranty: "90 dias",
    popular: true
  },
  {
    title: "Troca de Bateria",
    description: "Bateria viciada ou descarregando rápido? Baterias novas com maior autonomia e vida útil.",
    icon: "🔋",
    price: "A partir de R$ 80",
    duration: "1-2 horas",
    warranty: "90 dias"
  },
  {
    title: "Conector de Carga",
    description: "Cabo não encaixa ou só carrega em certas posições? Reparo completo do sistema de carregamento.",
    icon: "🔌",
    price: "A partir de R$ 90",
    duration: "2-3 horas",
    warranty: "90 dias"
  },
  {
    title: "Limpeza Profissional",
    description: "Celular molhado ou oxidado? Limpeza com microscópio e equipamentos profissionais.",
    icon: "🔬",
    price: "A partir de R$ 60",
    duration: "3-6 horas",
    warranty: "30 dias"
  },
  {
    title: "Reparo de Software",
    description: "Sistema travando ou lento? Formatação, backup e otimização completa do aparelho.",
    icon: "🧠",
    price: "A partir de R$ 50",
    duration: "1-2 horas",
    warranty: "30 dias"
  },
  {
    title: "Câmera e Sensores",
    description: "Câmera embaçada ou não funciona? Substituição de módulos com teste de qualidade.",
    icon: "📸",
    price: "A partir de R$ 100",
    duration: "2-4 horas",
    warranty: "90 dias"
  }
]

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-16 lg:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:20px_20px]" />
      </div>

      <div className="container relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              <span>🛠️</span>
              Serviços especializados
            </span>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              <span className="block">Todos os tipos de</span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                reparo para seu celular
              </span>
            </h2>
            
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Trabalhamos com todas as marcas principais: <strong>Apple, Samsung, Motorola, Xiaomi</strong> e outras. 
              Peças de qualidade, diagnóstico honesto e garantia real.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative group cursor-pointer rounded-3xl p-6 border transition-all duration-300
                ${selectedService === index 
                  ? 'border-orange-500 bg-orange-500/5 shadow-lg shadow-orange-500/20' 
                  : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80'
                }
                ${service.popular ? 'ring-2 ring-orange-500/20' : ''}
              `}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-black text-xs font-bold rounded-full">
                  🔥 Mais Procurado
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-2 pt-3 border-t border-neutral-800">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Preço:</span>
                    <span className="font-semibold text-orange-400">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Prazo:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">Garantia:</span>
                    <span className="font-medium text-green-400">{service.warranty}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.a
                  href={`/wpp?utm_source=site&utm_medium=services&utm_campaign=${service.title.toLowerCase().replace(/\s+/g, '_')}`}
                  className="block w-full mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold text-center hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pedir Orçamento
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Trust indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: '🏠', text: 'Leva e traz grátis' },
              { icon: '⚡', text: 'Reparo em 24h' },
              { icon: '🔒', text: 'Garantia de 90 dias' },
              { icon: '✅', text: 'Peças de qualidade' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-neutral-900/50 border border-neutral-800">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Não encontrou seu problema?</h3>
            <p className="text-neutral-300 max-w-lg mx-auto">
              Trabalhamos com qualquer tipo de reparo. Fale conosco e receba um diagnóstico personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/wpp?utm_source=site&utm_medium=services&utm_campaign=custom_repair"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>💬</span>
                Falar no WhatsApp
              </a>
              
              <a
                href="tel:+5519971344065"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-neutral-700 text-neutral-300 font-semibold hover:border-neutral-600 hover:text-white transition-all duration-300"
              >
                <span>📞</span>
                Ligar Agora
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}