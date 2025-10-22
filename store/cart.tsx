"use client"
import { createContext, useContext, useRef } from 'react'
import { create } from 'zustand'
import type { Product } from '@/types/product'

type CartItem = Product & { quantity: number }

interface CartState {
  items: CartItem[]
  add: (p: Product) => void
  remove: (id: string) => void
  increment: (id: string) => void
  decrement: (id: string) => void
  clear: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (p) => set((s) => {
    const idx = s.items.findIndex(i => i.id === p.id)
    if (idx >= 0) {
      const items = [...s.items]
      items[idx] = { ...items[idx], quantity: items[idx].quantity + 1 }
      return { items }
    }
    return { items: [...s.items, { ...p, quantity: 1 }] }
  }),
  remove: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
  increment: (id) => set((s) => ({
    items: s.items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)
  })),
  decrement: (id) => set((s) => ({
    items: s.items.flatMap(i => i.id === id ? (i.quantity > 1 ? [{ ...i, quantity: i.quantity - 1 }] : []) : [i])
  })),
  clear: () => set({ items: [] })
}))

// Optional provider needed for potential future SSR integration
const CartStoreContext = createContext(true)
export function CartStoreProvider({ children }: { children: React.ReactNode }) {
  const provided = useRef(true)
  return (
    <CartStoreContext.Provider value={provided.current}>
      {children}
    </CartStoreContext.Provider>
  )
}
