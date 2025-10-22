"use client"
import Link from 'next/link'
import { useCartStore } from '@/store/cart'

export function ShoppingCart() {
  const count = useCartStore(s => s.items.reduce((a, b) => a + b.quantity, 0))
  return (
    <Link href="/cart" className="relative h-9 w-9 grid place-items-center rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
      🛒
      {count > 0 && (
        <span className="absolute -top-1 -right-1 text-xs bg-brand text-white rounded-full px-1.5 py-0.5">{count}</span>
      )}
    </Link>
  )
}

