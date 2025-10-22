"use client"
import { usePathname } from 'next/navigation'

export function ClientTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div key={pathname}>{children}</div>
}

