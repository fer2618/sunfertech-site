// tailwind.config.ts

import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6A00',
          600: '#FF7A00',
          700: '#E86400'
        },
        // Remova a definição de 'bg' e 'card' aqui
      },
      boxShadow: {
        glow: '0 10px 24px rgba(255,106,0,.35)'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
    }
  },
  plugins: []
} satisfies Config