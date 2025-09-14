import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      // Cores otimizadas para o tema
      colors: {
        // Cores principais da marca
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6A00', // Cor principal
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407'
        },
        
        // Sistema de cores neutras otimizado
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          850: '#1f1f1f', // Tom intermediário personalizado
          900: '#171717',
          925: '#0f0f0f', // Tom mais escuro personalizado
          950: '#0a0a0a'
        },

        // Cores de estado/feedback
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a'
        },
        
        warning: {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04'
        },
        
        error: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626'
        },

        // Cores específicas do projeto
        sunfer: {
          primary: '#FF6A00',
          secondary: '#1a1a1a',
          accent: '#FFA24D'
        }
      },

      // Tipografia customizada
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },

      // Espaçamentos customizados
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '112': '28rem',
        '128': '32rem'
      },

      // Bordas e raio
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },

      // Sombras customizadas
      boxShadow: {
        'glow': '0 10px 24px rgba(255, 106, 0, 0.35)',
        'glow-lg': '0 20px 40px rgba(255, 106, 0, 0.3)',
        'glow-xl': '0 30px 60px rgba(255, 106, 0, 0.25)',
        'inner-glow': 'inset 0 2px 4px 0 rgba(255, 106, 0, 0.1)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.08)'
      },

      // Gradientes customizados
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sunfer': 'linear-gradient(135deg, #FF6A00 0%, #FFA24D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #171717 100%)',
        'hero-pattern': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        'dot-pattern': 'radial-gradient(circle, rgba(255,106,0,0.1) 1px, transparent 1px)'
      },

      // Tamanhos de background
      backgroundSize: {
        'pattern': '20px 20px',
        'dot': '24px 24px'
      },

      // Animações customizadas
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'
      },

      // Keyframes das animações
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 106, 0, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 106, 0, 0.6)' 
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        gradientXY: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },

      // Durações e timings
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms'
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },

      // Filtros customizados
      blur: {
        '4xl': '72px',
        '5xl': '96px'
      },

      // Backdrop blur
      backdropBlur: {
        '4xl': '72px'
      },

      // Z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100'
      },

      // Aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16'
      },

      // Grid
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))'
      }
    }
  },

  // Plugins úteis
  plugins: [
    // Plugin para variantes hover em touch devices
    function({ addVariant }: any) {
      addVariant('hover-hover', '@media (hover: hover)')
    },

    // Plugin para container queries (experimental)
    function({ addUtilities }: any) {
      addUtilities({
        '.container-query': {
          'container-type': 'inline-size'
        }
      })
    },

    // Plugin para gradientes animados
    function({ addUtilities }: any) {
      addUtilities({
        '.bg-animated-gradient': {
          'background': 'linear-gradient(-45deg, #FF6A00, #FFA24D, #FF6A00, #ea580c)',
          'background-size': '400% 400%',
          'animation': 'gradientXY 15s ease infinite'
        }
      })
    }
  ]
} satisfies Config