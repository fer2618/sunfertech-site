'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'


export default function ThemeToggle(){
const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()


// useEffect só será executado no lado do cliente, após a montagem do componente.
useEffect(() => {
setMounted(true)
}, [])


// Não renderiza nada no servidor para evitar a incompatibilidade
if (!mounted) {
return null
}


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