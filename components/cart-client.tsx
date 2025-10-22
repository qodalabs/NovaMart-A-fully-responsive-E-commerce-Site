"use client"
import { useCartStore } from '@/store/cart'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function CartClient() {
  const { items, increment, decrement, remove } = useCartStore()
  const subtotal = items.reduce((a, b) => a + b.price * b.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="mb-4">Your cart is empty.</p>
        <Link href="/products" className="btn btn-primary">Browse products</Link>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        {items.map((item) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="card p-4 flex items-center gap-4">
            <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">${item.price.toFixed(2)}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decrement(item.id)} className="h-8 w-8 rounded border">-</button>
              <div>{item.quantity}</div>
              <button onClick={() => increment(item.id)} className="h-8 w-8 rounded border">+</button>
            </div>
            <button onClick={() => remove(item.id)} className="text-sm text-red-500 hover:underline">Remove</button>
          </motion.div>
        ))}
      </div>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-2">
          <div>Subtotal</div>
          <div className="font-semibold">${subtotal.toFixed(2)}</div>
        </div>
        <button className="btn btn-primary w-full mt-4 ripple-container">Proceed to Checkout</button>
      </div>
    </div>
  )
}

