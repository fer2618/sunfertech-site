'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const certifications = [
  {
    title: "20+ Anos de Experiência",
    description: "Desde 2003 reparando celulares em Rio Claro",
    icon: "🏆",
    stat: "20+",
    label: "Anos"
  },
  {
    title: "80.000+ Reparos Realizados",
    description: "Histórico comprovado de qualidade e confiança",
    icon: "📱",
    stat: "80k+",
    label: "Reparos"
  },
  {
    title: "95% de Aprovação",
    description: "Clientes satisfeitos recomendam nosso trabalho",
    icon: "⭐",
    stat: "95%",
    label: "Satisfação"
  },
  {
    title: "Garantia Real de 90 Dias",
    description: "Comprometimento com a qualidade pós-reparo",
    icon: "🛡️",
    stat: "90",
    label: "Dias"
  }
]

const testimonials = [
  {
    name: "Ana Silva",
    location: "Centro, Rio Claro",
    review: "Atendimento impecável! Buscaram meu iPhone em casa e entregaram no mesmo dia funcionando perfeitamente. Recomendo muito!",
    rating: 5,
    service: "Troca de tela iPhone",
    image: "/cliente-1.jpg"
  },
  {
    name: "Carlos Mendes",
    location: "Vila Paulista, Rio Claro",
    review: "Meu Samsung estava com a bateria viciada. O técnico foi super profissional e explicou todo o processo. Ficou como novo!",
    rating: 5,
    service: "Troca de bateria",
    image: "/cliente-2.jpg"
  },
  {
    name: "Marina Costa",
    location: "Jardim Claret, Rio Claro",
    review: "Celular caiu na água e achei que tinha perdido tudo. A Sunfertech salvou meu aparelho e todos os dados. Muito obrigada!",
    rating: 5,
    service: "Limpeza e recuperação",
    image: "/cliente-3.jpg"
  }
]

const differentials = [
  {
    title: "Diagnóstico Honesto",
    description: "Avaliação transparente do problema real, sem venda de serviços desnecessários",
    icon: "🔍"
  },
  {
    title: "Peças de Qualidade",
    description: "Trabalhamos apenas com peças originais e A+ (first-line) testadas",
    icon: "✅"
  },
  {
    title: "Leva e Traz Grátis",
    description: "Buscamos e entregamos seu aparelho sem custo adicional em Rio Claro",
    icon: "🚗"
  },
  {
    title: "Técnicos Especialistas",
    description: "Equipe certificada com equipamentos profissionais (microscópio, BGA)",
    icon: "👨‍🔧"
  }
]

export default function TrustSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            🏆 Confiança e qualidade
          </span>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="block">Por que escolher a</span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Sunfertech
            </span>
          </h2>
          
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Mais de duas décadas de experiência, milhares de clientes satisfeitos 
            e o compromisso de entregar o melhor reparo para seu celular.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-400">
                    {cert.stat}
                  </div>
                  <div className="text-sm text-orange-300 font-medium">
                    {cert.label}
                  </div>
                  <h3 className="font-semibold text-white text-sm lg:text-base">
                    {cert.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-neutral-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((diff, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {diff.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">
              O que nossos clientes dizem
            </h3>
            <p className="text-neutral-300">
              Depoimentos reais de quem confia na Sunfertech
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/30 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-neutral-200 mb-4 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>

                {/* Customer info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-black font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-neutral-400 text-xs">
                      {testimonial.location} • {testimonial.service}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20"
        >
          <h3 className="text-2xl font-bold mb-4">
            Pronto para confiar na nossa experiência?
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Faça como milhares de clientes satisfeitos. Receba um orçamento 
            personalizado e descubra por que somos a assistência técnica 
            de referência em Rio Claro.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/wpp?utm_source=site&utm_medium=trust&utm_campaign=orcamento"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold hover:from-orange-400 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              💬 Pedir Orçamento Grátis
            </a>
            
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-orange-500/50 text-orange-400 font-semibold hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
            >
              📋 Ver Todos os Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}