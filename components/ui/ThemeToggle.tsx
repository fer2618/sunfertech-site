'use client'
import { useTheme } from 'next-themes'


export default function ThemeToggle(){
const { theme, setTheme } = useTheme()
const isDark = theme === 'dark'
return (
<button
aria-label={isDark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
className="btn btn-outline"
onClick={() => setTheme(isDark ? 'light' : 'dark')}
>
{isDark ? '🌙 Escuro' : '☀️ Claro'}
</button>
)
}