"use client"
import { useEffect } from 'react'

export function RippleScript() {
  useEffect(() => {
    function handler(e: Event) {
      const target = e.currentTarget as HTMLElement
      target.classList.remove('ripple-active')
      void target.offsetWidth // reflow
      const evt = e as MouseEvent
      const rect = target.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = evt.clientX - rect.left - size / 2
      const y = evt.clientY - rect.top - size / 2
      target.style.setProperty('--ripple-x', `${x}px`)
      target.style.setProperty('--ripple-y', `${y}px`)
      target.style.setProperty('--ripple-size', `${size}px`)
      target.classList.add('ripple-active')
      setTimeout(() => target.classList.remove('ripple-active'), 700)
    }
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.ripple-container'))
    nodes.forEach(n => n.addEventListener('click', handler))
    return () => nodes.forEach(n => n.removeEventListener('click', handler))
  }, [])
  return null
}

