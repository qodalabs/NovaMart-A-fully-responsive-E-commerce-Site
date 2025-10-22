"use client"
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const isDark = theme === 'dark'

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="h-9 w-9 grid place-items-center rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}

