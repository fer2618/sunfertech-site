'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingData {
  name: string
  phone: string
  email: string
  address: string
  device: string
  brand: string
  problem: string
  urgency: 'normal' | 'urgent' | 'express'
  timePreference: 'morning' | 'afternoon' | 'evening'
  date: string
}

const services = [
  { id: 'tela', name: 'Troca de Tela', icon: '📱', basePrice: 120 },
  { id: 'bateria', name: 'Troca de Bateria', icon: '🔋', basePrice: 80 },
  { id: 'conector', name: 'Conector de Carga', icon: '🔌', basePrice: 90 },
  { id: 'limpeza', name: 'Limpeza Profissional', icon: '🔬', basePrice: 60 },
  { id: 'software', name: 'Reparo de Software', icon: '🧠', basePrice: 50 },
  { id: 'camera', name: 'Câmera/Sensores', icon: '📸', basePrice: 100 },
]

const brands = ['Apple', 'Samsung', 'Motorola', 'Xiaomi', 'LG', 'Sony', 'Outro']

const urgencyOptions = [
  { id: 'normal', name: 'Normal (24-48h)', multiplier: 1 },
  { id: 'urgent', name: 'Urgente (12-24h)', multiplier: 1.3 },
  { id: 'express', name: 'Express (2-6h)', multiplier: 1.8 }
]

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState<Partial<BookingData>>({
    urgency: 'normal',
    timePreference: 'morning'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateFormData = (field: keyof BookingData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculatePrice = () => {
    const service = services.find(s => s.id === selectedService)
    if (!service) return 0
    
    const urgencyMultiplier = urgencyOptions.find(u => u.id === formData.urgency)?.multiplier || 1
    return Math.round(service.basePrice * urgencyMultiplier)
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const service = services.find(s => s.id === selectedService)
    const price = calculatePrice()
    const urgencyText = urgencyOptions.find(u => u.id === formData.urgency)?.name
    
    const message = `🔧 AGENDAMENTO SUNFERTECH

👤 *Cliente:* ${formData.name}
📱 *WhatsApp:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Endereço:* ${formData.address}

📱 *Aparelho:* ${formData.brand} ${formData.device}
🛠️ *Serviço:* ${service?.name}
❗ *Urgência:* ${urgencyText}
⏰ *Preferência:* ${formData.timePreference === 'morning' ? 'Manhã' : formData.timePreference === 'afternoon' ? 'Tarde' : 'Noite'}
📅 *Data preferida:* ${formData.date}

🔧 *Problema relatado:*
${formData.problem}

💰 *Valor estimado:* R$ ${price}

✅ Agendamento realizado pelo site!`

    const whatsappUrl = `https://wa.me/5519971344065?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitting(false)
    setStep(5) // Tela de sucesso
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <section className="py-16">
      <div className="container max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Agendar Leva e Traz</h2>
          <p className="text-neutral-300">
            Preencha os dados e receba um orçamento personalizado
          </p>
          
          {/* Progress bar */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                  ${step >= s ? 'bg-orange-500 text-black' : 'bg-neutral-800 text-neutral-400'}
                `}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`w-8 h-1 mx-2 rounded transition-all ${
                    step > s ? 'bg-orange-500' : 'bg-neutral-800'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <AnimatePresence mode="wait">
            {/* Step 1: Serviço */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold">Qual serviço você precisa?</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`
                        p-4 rounded-xl border-2 text-left transition-all
                        ${selectedService === service.id 
                          ? 'border-orange-500 bg-orange-500/10' 
                          : 'border-neutral-700 hover:border-neutral-600'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{service.icon}</span>
                        <div>
                          <div className="font-semibold">{service.name}</div>
                          <div className="text-sm text-neutral-400">
                            A partir de R$ {service.basePrice}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    disabled={!selectedService}
                    className="btn disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Aparelho */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold">Dados do aparelho</h3>
                
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Marca</label>
                    <select
                      value={formData.brand || ''}
                      onChange={(e) => updateFormData('brand', e.target.value)}
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    >
                      <option value="">Selecione a marca</option>
                      {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Modelo do aparelho</label>
                    <input
                      type="text"
                      value={formData.device || ''}
                      onChange={(e) => updateFormData('device', e.target.value)}
                      placeholder="Ex: iPhone 13, Galaxy S21, Moto G60..."
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Descreva o problema</label>
                    <textarea
                      value={formData.problem || ''}
                      onChange={(e) => updateFormData('problem', e.target.value)}
                      placeholder="Descreva detalhadamente o que está acontecendo com seu aparelho..."
                      rows={4}
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button onClick={prevStep} className="btn btn-outline">
                    Voltar
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.brand || !formData.device || !formData.problem}
                    className="btn disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Preferências */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold">Preferências de atendimento</h3>
                
                <div>
                  <label className="block text-sm font-medium mb-3">Urgência do reparo</label>
                  <div className="space-y-2">
                    {urgencyOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => updateFormData('urgency', option.id)}
                        className={`
                          w-full p-3 rounded-xl border-2 text-left transition-all
                          ${formData.urgency === option.id 
                            ? 'border-orange-500 bg-orange-500/10' 
                            : 'border-neutral-700 hover:border-neutral-600'
                          }
                        `}
                      >
                        <div className="font-medium">{option.name}</div>
                        {option.multiplier > 1 && (
                          <div className="text-sm text-orange-400">
                            Taxa adicional: +{Math.round((option.multiplier - 1) * 100)}%
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Período preferido</label>
                    <select
                      value={formData.timePreference || ''}
                      onChange={(e) => updateFormData('timePreference', e.target.value)}
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    >
                      <option value="morning">Manhã (8h-12h)</option>
                      <option value="afternoon">Tarde (12h-18h)</option>
                      <option value="evening">Noite (18h-20h)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Data preferida</label>
                    <input
                      type="date"
                      value={formData.date || ''}
                      onChange={(e) => updateFormData('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Estimativa de preço */}
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">
                      R$ {calculatePrice()}
                    </div>
                    <div className="text-sm text-neutral-300">
                      Valor estimado (sujeito a avaliação)
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button onClick={prevStep} className="btn btn-outline">
                    Voltar
                  </button>
                  <button onClick={nextStep} className="btn">
                    Continuar
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Dados pessoais */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold">Dados para leva e traz</h3>
                
                <div className="grid gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome completo</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        value={formData.phone || ''}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="(19) 99999-9999"
                        className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email || ''}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Endereço para coleta</label>
                    <input
                      type="text"
                      value={formData.address || ''}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      placeholder="Rua, número, bairro - Rio Claro/SP"
                      className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button onClick={prevStep} className="btn btn-outline">
                    Voltar
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.phone || !formData.address || isSubmitting}
                    className="btn disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </div>
                    ) : (
                      'Finalizar Agendamento'
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Sucesso */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="text-6xl">✅</div>
                <h3 className="text-2xl font-bold text-green-400">
                  Agendamento Realizado!
                </h3>
                <p className="text-neutral-300">
                  Seu agendamento foi enviado via WhatsApp. Nossa equipe entrará em contato 
                  em breve para confirmar os detalhes.
                </p>
                
                <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700">
                  <h4 className="font-semibold mb-2">Próximos passos:</h4>
                  <ul className="text-sm text-neutral-300 space-y-1">
                    <li>• Aguarde nosso contato para confirmação</li>
                    <li>• Mantenha o aparelho ligado se possível</li>
                    <li>• Tenha documento de identidade em mãos</li>
                    <li>• Faça backup dos dados importantes</li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setStep(1)
                    setSelectedService('')
                    setFormData({ urgency: 'normal', timePreference: 'morning' })
                  }}
                  className="btn btn-outline"
                >
                  Fazer Novo Agendamento
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}