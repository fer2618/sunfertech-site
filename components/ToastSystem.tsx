'use client'
import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  success: (title: string, message?: string) => void
  error: (title: string, message?: string) => void
  warning: (title: string, message?: string) => void
  info: (title: string, message?: string) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const toastIcons: Record<ToastType, string> = {
  success: '✅',
  error: '❌',
  warning: '⚠️',
  info: 'ℹ️'
}

const toastColors: Record<ToastType, { bg: string; border: string; text: string }> = {
  success: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400'
  },
  error: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400'
  },
  warning: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
    text: 'text-yellow-400'
  },
  info: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400'
  }
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const colors = toastColors[toast.type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      layout
      className={`
        relative w-full max-w-sm p-4 rounded-2xl border backdrop-blur-sm
        ${colors.bg} ${colors.border}
        shadow-lg hover:shadow-xl transition-all duration-300
      `}
    >
      {/* Progress bar para duração */}
      {toast.duration && toast.duration > 0 && (
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: toast.duration / 1000, ease: 'linear' }}
          className={`absolute bottom-0 left-0 h-1 rounded-b-2xl origin-left ${colors.text.replace('text-', 'bg-')}`}
        />
      )}

      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 text-lg">
          {toastIcons[toast.type]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold ${colors.text}`}>
            {toast.title}
          </h4>
          {toast.message && (
            <p className="text-sm text-neutral-300 mt-1">
              {toast.message}
            </p>
          )}

          {/* Action button */}
          {toast.action && (
            <button
              onClick={toast.action.onClick}
              className={`
                mt-2 text-sm font-medium ${colors.text} 
                hover:underline focus:outline-none
              `}
            >
              {toast.action.label}
            </button>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={() => onRemove(toast.id)}
          className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          aria-label="Fechar notificação"
        >
          <span className="text-neutral-400 text-sm">✕</span>
        </button>
      </div>
    </motion.div>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const generateId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = generateId()
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000
    }

    setToasts(prev => [...prev, newToast])

    // Auto remove after duration
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }, [])

  const success = useCallback((title: string, message?: string) => {
    addToast({ type: 'success', title, message })
  }, [addToast])

  const error = useCallback((title: string, message?: string) => {
    addToast({ type: 'error', title, message })
  }, [addToast])

  const warning = useCallback((title: string, message?: string) => {
    addToast({ type: 'warning', title, message })
  }, [addToast])

  const info = useCallback((title: string, message?: string) => {
    addToast({ type: 'info', title, message })
  }, [addToast])

  return (
    <ToastContext.Provider value={{
      toasts,
      addToast,
      removeToast,
      success,
      error,
      warning,
      info
    }}>
      {children}
      
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <ToastItem
                toast={toast}
                onRemove={removeToast}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// Hook helper para casos específicos comuns
export const useToastActions = () => {
  const { success, error, warning, info, addToast } = useToast()

  return {
    // Notificações de formulário
    formSuccess: (message = 'Dados salvos com sucesso!') => {
      success('Sucesso', message)
    },
    
    formError: (message = 'Erro ao processar formulário. Tente novamente.') => {
      error('Erro', message)
    },

    // Notificações de agendamento
    scheduleSuccess: () => {
      success(
        'Agendamento realizado!', 
        'Em breve entraremos em contato para confirmar.'
      )
    },

    scheduleError: () => {
      error(
        'Erro no agendamento',
        'Não foi possível processar seu agendamento. Tente novamente.'
      )
    },

    // Notificações de orçamento
    quoteCalculated: (value: number) => {
      info(
        'Orçamento calculado',
        `Valor estimado: R$ ${value}`
      )
    },

    quoteCopied: () => {
      success('Copiado!', 'Orçamento copiado para a área de transferência.')
    },

    // Notificações de contato
    contactSent: () => {
      success(
        'Mensagem enviada!',
        'Recebemos sua mensagem e responderemos em breve.'
      )
    },

    whatsappRedirect: () => {
      info(
        'Redirecionando...',
        'Você será direcionado para o WhatsApp.'
      )
    },

    // Notificações de erro de conexão
    connectionError: () => {
      error(
        'Erro de conexão',
        'Verifique sua internet e tente novamente.'
      )
    },

    // Notificações personalizadas com ação
    customWithAction: (title: string, message: string, actionLabel: string, action: () => void) => {
      addToast({
        type: 'info',
        title,
        message,
        action: {
          label: actionLabel,
          onClick: action
        },
        duration: 8000 // Mais tempo para ações
      })
    }
  }
}

// Exemplo de uso em componentes:
export function ExampleUsage() {
  const { success, error, warning, info } = useToast()
  const actions = useToastActions()

  return (
    <div className="space-y-4 p-6">
      <h3 className="text-xl font-bold">Teste de Notificações</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => success('Sucesso!', 'Operação realizada com sucesso.')}
          className="btn bg-green-600 hover:bg-green-500"
        >
          Sucesso
        </button>
        
        <button
          onClick={() => error('Erro!', 'Algo deu errado.')}
          className="btn bg-red-600 hover:bg-red-500"
        >
          Erro
        </button>
        
        <button
          onClick={() => warning('Atenção!', 'Verifique os dados antes de continuar.')}
          className="btn bg-yellow-600 hover:bg-yellow-500"
        >
          Aviso
        </button>
        
        <button
          onClick={() => info('Informação', 'Aqui está uma informação importante.')}
          className="btn bg-blue-600 hover:bg-blue-500"
        >
          Info
        </button>
      </div>

      <div className="border-t border-neutral-700 pt-4">
        <h4 className="font-semibold mb-2">Ações específicas:</h4>
        <div className="space-y-2">
          <button
            onClick={() => actions.formSuccess()}
            className="btn btn-outline w-full"
          >
            Sucesso do Formulário
          </button>
          
          <button
            onClick={() => actions.scheduleSuccess()}
            className="btn btn-outline w-full"
          >
            Agendamento Realizado
          </button>
          
          <button
            onClick={() => actions.quoteCalculated(250)}
            className="btn btn-outline w-full"
          >
            Orçamento Calculado
          </button>
          
          <button
            onClick={() => actions.customWithAction(
              'Ação necessária',
              'Você tem uma notificação pendente.',
              'Ver detalhes',
              () => alert('Detalhes da ação!')
            )}
            className="btn btn-outline w-full"
          >
            Notificação com Ação
          </button>
        </div>
      </div>
    </div>
  )
}