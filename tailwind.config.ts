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
bg: '#0f0f0f',
card: '#171717',
muted: '#bdbdbd'
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