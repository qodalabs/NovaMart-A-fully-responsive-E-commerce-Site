"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Product } from '@/types/product'

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="card overflow-hidden">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <motion.img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: .25 }}
          />
        </div>
        <div className="p-4">
          <div className="font-medium truncate">{product.title}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 h-10 overflow-hidden">{product.description}</div>
          <div className="mt-3 font-semibold">${product.price.toFixed(2)}</div>
        </div>
      </Link>
    </motion.div>
  )
}
