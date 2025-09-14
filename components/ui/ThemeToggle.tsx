'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    const initial = saved ? saved === 'dark' : window.matchMedia?.('(prefers-color-scheme: dark)').matches
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={dark ? 'Tema claro' : 'Tema escuro'}
      aria-pressed={dark}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-700 hover:bg-neutral-900"
    >
      {/* Ícone apenas (sem texto) */}
      <span aria-hidden="true" className="text-lg leading-none">
        {dark ? '☀️' : '🌙'}
      </span>
      <span className="sr-only">{dark ? 'Claro' : 'Escuro'}</span>
    </button>
  )
}

