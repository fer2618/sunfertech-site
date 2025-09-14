'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Service {
  id: string
  name: string
  basePrice: number
  icon: string
  description: string
}

interface PriceFactors {
  brand: string
  model: string
  services: string[]
  urgency: 'normal' | 'urgent' | 'express'
  warranty: 'basic' | 'extended'
}

const services: Service[] = [
  {
    id: 'tela',
    name: 'Troca de Tela',
    basePrice: 120,
    icon: '📱',
    description: 'Substituição completa do display'
  },
  {
    id: 'bateria',
    name: 'Bateria',
    basePrice: 80,
    icon: '🔋',
    description: 'Bateria nova de alta qualidade'
  },
  {
    id: 'conector',
    name: 'Conector USB',
    basePrice: 90,
    icon: '🔌',
    description: 'Reparo do sistema de carregamento'
  },
  {
    id: 'limpeza',
    name: 'Limpeza',
    basePrice: 60,
    icon: '🔬',
    description: 'Limpeza profissional com microscópio'
  },
  {
    id: 'software',
    name: 'Software',
    basePrice: 50,
    icon: '🧠',
    description: 'Formatação e restauração'
  },
  {
    id: 'camera',
    name: 'Câmera',
    basePrice: 100,
    icon: '📸',
    description: 'Reparo de módulos e sensores'
  },
  {
    id: 'audio',
    name: 'Áudio',
    basePrice: 70,
    icon: '🔊',
    description: 'Alto-falante e microfone'
  },
  {
    id: 'botoes',
    name: 'Botões',
    basePrice: 65,
    icon: '🎛️',
    description: 'Volume, power e home'
  }
]

const brandMultipliers: Record<string, number> = {
  'Apple': 1.4,
  'Samsung': 1.2,
  'Motorola': 1.0,
  'Xiaomi': 1.0,
  'LG': 1.1,
  'Sony': 1.3,
  'Outro': 1.0
}

const urgencyMultipliers = {
  normal: { multiplier: 1.0, name: 'Normal (24-48h)', extra: 0 },
  urgent: { multiplier: 1.3, name: 'Urgente (12-24h)', extra: 30 },
  express: { multiplier: 1.8, name: 'Express (2-6h)', extra: 80 }
}

const warrantyOptions = {
  basic: { multiplier: 1.0, name: '90 dias', extra: 0 },
  extended: { multiplier: 1.15, name: '180 dias', extra: 25 }
}

export default function PriceCalculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [factors, setFactors] = useState<PriceFactors>({
    brand: '',
    model: '',
    services: [],
    urgency: 'normal',
    warranty: 'basic'
  })

  const updateFactor = <K extends keyof PriceFactors>(key: K, value: PriceFactors[K]) => {
    setFactors(prev => ({ ...prev, [key]: value }))
  }

  const toggleService = (serviceId: string) => {
    setFactors(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const calculateTotal = () => {
    const selectedServices = services.filter(s => factors.services.includes(s.id))
    const subtotal = selectedServices.reduce((sum, service) => sum + service.basePrice, 0)
    
    const brandMultiplier = brandMultipliers[factors.brand] || 1
    const urgencyData = urgencyMultipliers[factors.urgency]
    const warrantyData = warrantyOptions[factors.warranty]
    
    const withBrand = subtotal * brandMultiplier
    const withUrgency = withBrand * urgencyData.multiplier
    const total = withUrgency * warrantyData.multiplier
    
    return {
      subtotal,
      brandMultiplier,
      urgencyExtra: urgencyData.extra,
      warrantyExtra: warrantyData.extra,
      total: Math.round(total)
    }
  }

  const calculation = calculateTotal()
  const selectedServices = services.filter(s => factors.services.includes(s.id))

  const generateWhatsAppMessage = () => {
    const { total } = calculation
    const urgencyText = urgencyMultipliers[factors.urgency].name
    const warrantyText = warrantyOptions[factors.warranty].name
    const servicesText = selectedServices.map(s => s.name).join(', ')

    return `💰 ORÇAMENTO SUNFERTECH

📱 *Aparelho:* ${factors.brand} ${factors.model}
🛠️ *Serviços:* ${servicesText}
⚡ *Urgência:* ${urgencyText}
🛡️ *Garantia:* ${warrantyText}

💰 *Valor estimado:* R$ ${total}

🔧 Gostaria de agendar o leva e traz!

*Calculado pelo site - sujeito a avaliação técnica`

    return `https://wa.me/5519971344065?text=${encodeURIComponent(generateWhatsAppMessage())}`
  }

  return (
    <>
      {/* Botão para abrir calculadora */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-20 z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Calculadora de Orçamento"
      >
        💰
      </motion.button>

      {/* Modal da calculadora */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-3xl border border-neutral-700 shadow-2xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Calculadora de Orçamento</h3>
                    <p className="text-neutral-300 text-sm">
                      Calcule o valor estimado dos seus reparos
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-6 grid lg:grid-cols-2 gap-8">
                {/* Formulário */}
                <div className="space-y-6">
                  {/* Aparelho */}
                  <div>
                    <h4 className="font-semibold mb-3">Dados do aparelho</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <select
                        value={factors.brand}
                        onChange={(e) => updateFactor('brand', e.target.value)}
                        className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                      >
                        <option value="">Marca</option>
                        {Object.keys(brandMultipliers).map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                      
                      <input
                        type="text"
                        value={factors.model}
                        onChange={(e) => updateFactor('model', e.target.value)}
                        placeholder="Modelo"
                        className="p-3 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Serviços */}
                  <div>
                    <h4 className="font-semibold mb-3">Serviços necessários</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`
                            p-3 rounded-xl border-2 text-left transition-all
                            ${factors.services.includes(service.id)
                              ? 'border-orange-500 bg-orange-500/10'
                              : 'border-neutral-700 hover:border-neutral-600'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2">
                            <span>{service.icon}</span>
                            <div>
                              <div className="font-medium text-sm">{service.name}</div>
                              <div className="text-xs text-neutral-400">R$ {service.basePrice}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Urgência */}
                  <div>
                    <h4 className="font-semibold mb-3">Urgência</h4>
                    <div className="space-y-2">
                      {Object.entries(urgencyMultipliers).map(([key, data]) => (
                        <button
                          key={key}
                          onClick={() => updateFactor('urgency', key as any)}
                          className={`
                            w-full p-3 rounded-xl border-2 text-left transition-all
                            ${factors.urgency === key
                              ? 'border-orange-500 bg-orange-500/10'
                              : 'border-neutral-700 hover:border-neutral-600'
                            }
                          `}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{data.name}</span>
                            {data.extra > 0 && (
                              <span className="text-orange-400 text-sm">+R$ {data.extra}</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Garantia */}
                  <div>
                    <h4 className="font-semibold mb-3">Garantia</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(warrantyOptions).map(([key, data]) => (
                        <button
                          key={key}
                          onClick={() => updateFactor('warranty', key as any)}
                          className={`
                            p-3 rounded-xl border-2 text-center transition-all
                            ${factors.warranty === key
                              ? 'border-orange-500 bg-orange-500/10'
                              : 'border-neutral-700 hover:border-neutral-600'
                            }
                          `}
                        >
                          <div className="font-medium">{data.name}</div>
                          {data.extra > 0 && (
                            <div className="text-orange-400 text-sm">+R$ {data.extra}</div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resultado */}
                <div className="space-y-6">
                  <div className="sticky top-0">
                    <h4 className="font-semibold mb-3">Resumo do orçamento</h4>
                    
                    {/* Aparelho selecionado */}
                    {factors.brand && (
                      <div className="p-3 rounded-xl bg-neutral-800 mb-3">
                        <div className="font-medium">
                          {factors.brand} {factors.model || '[Modelo]'}
                        </div>
                        {factors.brand !== 'Motorola' && factors.brand !== 'Xiaomi' && factors.brand !== 'Outro' && (
                          <div className="text-sm text-orange-400">
                            Fator marca: +{Math.round((brandMultipliers[factors.brand] - 1) * 100)}%
                          </div>
                        )}
                      </div>
                    )}

                    {/* Serviços selecionados */}
                    {selectedServices.length > 0 && (
                      <div className="space-y-2 mb-4">
                        {selectedServices.map((service) => (
                          <div key={service.id} className="flex justify-between items-center p-2 rounded-lg bg-neutral-800">
                            <span className="flex items-center gap-2">
                              <span>{service.icon}</span>
                              <span className="text-sm">{service.name}</span>
                            </span>
                            <span className="text-sm font-medium">R$ {service.basePrice}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Cálculo total */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal serviços:</span>
                          <span>R$ {calculation.subtotal}</span>
                        </div>
                        
                        {factors.brand && brandMultipliers[factors.brand] > 1 && (
                          <div className="flex justify-between text-orange-300">
                            <span>Fator marca ({factors.brand}):</span>
                            <span>+{Math.round((calculation.brandMultiplier - 1) * 100)}%</span>
                          </div>
                        )}
                        
                        {factors.urgency !== 'normal' && (
                          <div className="flex justify-between text-orange-300">
                            <span>Taxa urgência:</span>
                            <span>+{Math.round((urgencyMultipliers[factors.urgency].multiplier - 1) * 100)}%</span>
                          </div>
                        )}
                        
                        {factors.warranty === 'extended' && (
                          <div className="flex justify-between text-green-300">
                            <span>Garantia estendida:</span>
                            <span>+15%</span>
                          </div>
                        )}
                        
                        <div className="border-t border-orange-500/30 pt-2">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total estimado:</span>
                            <span className="text-2xl font-bold text-orange-400">
                              R$ {calculation.total}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    {calculation.total > 0 && (
                      <div className="space-y-3 mt-4">
                        <a
                          href={generateWhatsAppMessage()}
                          target="_blank"
                          rel="noopener"
                          className="btn w-full justify-center"
                        >
                          💬 Solicitar Agendamento
                        </a>
                        
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(`Orçamento Sunfertech: R$ ${calculation.total} para ${factors.brand} ${factors.model}`)
                            // Aqui você poderia adicionar um toast de confirmação
                          }}
                          className="btn btn-outline w-full justify-center"
                        >
                          📋 Copiar Orçamento
                        </button>
                      </div>
                    )}

                    {/* Disclaimer */}
                    <div className="text-xs text-neutral-400 mt-4 p-3 rounded-lg bg-neutral-800/50">
                      ⚠️ Valores estimados sujeitos a avaliação técnica. 
                      Orçamento final pode variar conforme complexidade e estado do aparelho.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}