"use client"
import { motion } from 'framer-motion'

const fakeReviews = [
  { id: 1, name: 'Alex', text: 'Beautiful product and super smooth experience!', rating: 5 },
  { id: 2, name: 'Sam', text: 'Animations are delightful. Highly recommend.', rating: 4 },
]

export function Reviews({ productId }: { productId: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-3">Reviews</h3>
      <div className="space-y-3">
        {fakeReviews.map(r => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-4">
            <div className="font-medium">{r.name}</div>
            <div className="text-yellow-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

