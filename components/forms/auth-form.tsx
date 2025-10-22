"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card p-6">
      <h1 className="text-2xl font-bold mb-6">{mode === 'login' ? 'Welcome back' : 'Create account'}</h1>
      <form className="space-y-4">
        {mode === 'signup' && (
          <FloatingInput label="Name" type="text" />
        )}
        <FloatingInput label="Email" type="email" />
        <FloatingInput label="Password" type="password" />
        <button className="btn btn-primary w-full ripple-container">{mode === 'login' ? 'Login' : 'Sign Up'}</button>
      </form>
      <div className="mt-4 text-sm text-center">
        {mode === 'login' ? (
          <span>Don&apos;t have an account? <Link className="text-brand hover:underline" href="/signup">Sign up</Link></span>
        ) : (
          <span>Already have an account? <Link className="text-brand hover:underline" href="/login">Login</Link></span>
        )}
      </div>
    </motion.div>
  )
}

function FloatingInput({ label, type }: { label: string, type: string }) {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder=" "
        className="peer w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <label className="absolute left-2 top-2 px-1 text-gray-500 dark:text-gray-400 transition-all duration-200 bg-white dark:bg-gray-900 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs">
        {label}
      </label>
    </div>
  )
}

