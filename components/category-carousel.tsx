"use client"
import { motion } from 'framer-motion'

const categories = ['Electronics', 'Fashion', 'Home', 'Beauty', 'Sports', 'Books', 'Toys']

export function CategoryCarousel() {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <div className="flex gap-4 min-w-max">
        {categories.map((c, i) => (
          <motion.button
            key={c}
            whileHover={{ y: -2, scale: 1.02 }}
            className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur hover:border-brand"
          >
            {c}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

