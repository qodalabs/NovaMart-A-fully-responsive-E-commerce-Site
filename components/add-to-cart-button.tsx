"use client"
import { useCartStore } from '@/store/cart'
import type { Product } from '@/types/product'
import { motion } from 'framer-motion'

export function AddToCartButton({ product }: { product: Product }) {
  const add = useCartStore(s => s.add)

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => add(product)}
      className="btn btn-primary ripple-container"
      initial={false}
    >
      Add to Cart
    </motion.button>
  )
}

