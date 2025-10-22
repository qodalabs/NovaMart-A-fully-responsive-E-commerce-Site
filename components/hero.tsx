"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 pt-28 pb-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          Elevate Your Shopping Experience
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
        >
          Discover curated products, smooth animations, and delightful micro‑interactions.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="mt-8 flex items-center justify-center gap-3">
          <Link href="/products" className="btn btn-primary ripple-container">Shop Now</Link>
          <Link href="/about" className="btn border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Learn More</Link>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute -inset-[10%] bg-gradient-to-tr from-brand/20 via-fuchsia-400/10 to-sky-400/10 blur-3xl" />
      <motion.div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[80vw] h-[40vw] rounded-full bg-brand/20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
    </div>
  )
}

