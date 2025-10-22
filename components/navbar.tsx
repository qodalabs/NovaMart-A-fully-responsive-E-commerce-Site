"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { motion, useScroll, useTransform, useMotionTemplate, AnimatePresence } from 'framer-motion'
import { ShoppingCart } from './shopping-cart'
import { useState } from 'react'

export function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85])
  const bg = useMotionTemplate`rgba(17, 24, 39, ${bgOpacity})`
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/' as const, label: 'Home' },
    { href: '/products' as const, label: 'Products' },
    { href: '/about' as const, label: 'About' },
    { href: '/contact' as const, label: 'Contact' },
  ] as const

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 h-[var(--header-height)]"
      style={{ backgroundColor: bg }}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Nova<span className="text-brand">Mart</span></Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`transition-colors hover:text-brand ${pathname === l.href ? 'text-brand' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ShoppingCart />
          <ThemeToggle />
          <Link className="hidden sm:inline-flex btn btn-primary" href="/login">Login</Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden h-9 w-9 grid place-items-center rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-[var(--header-height)] bg-black"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed left-0 right-0 top-[var(--header-height)] bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800"
            >
              <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
                {links.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`py-2 ${pathname === l.href ? 'text-brand font-medium' : 'hover:text-brand'}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/login" className="btn btn-primary w-full mt-2" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-5">
      <span
        className={`absolute inset-x-0 top-1 block h-0.5 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
      />
      <span
        className={`absolute inset-x-0 top-2.5 block h-0.5 bg-current transition-opacity ${open ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute inset-x-0 bottom-1 block h-0.5 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
      />
    </div>
  )
}
