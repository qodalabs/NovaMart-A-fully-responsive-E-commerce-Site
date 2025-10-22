"use client"
import { motion, type HTMLMotionProps } from 'framer-motion'

export function AnimatedH1({
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: HTMLMotionProps<'h1'>) {
  return (
    <motion.h1
      initial={initial ?? { opacity: 0, y: 10 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true }}
      transition={transition ?? { duration: 0.3 }}
      {...rest}
    />
  )
}

export function AnimatedP({
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: HTMLMotionProps<'p'>) {
  return (
    <motion.p
      initial={initial ?? { opacity: 0, y: 6 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true }}
      transition={transition ?? { duration: 0.3, delay: 0.1 }}
      {...rest}
    />
  )
}

