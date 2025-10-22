"use client"
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-brand/30 border-t-brand"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  )
}

