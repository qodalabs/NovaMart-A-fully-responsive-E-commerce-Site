"use client"
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { CartStoreProvider } from '@/store/cart'
import { ClientTransition } from '@/components/route-transition'
import { RippleScript } from '@/components/ripple-script'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartStoreProvider>
        <AnimatePresence mode="wait">
          <ClientTransition>{children}</ClientTransition>
        </AnimatePresence>
        <RippleScript />
      </CartStoreProvider>
    </ThemeProvider>
  )
}
