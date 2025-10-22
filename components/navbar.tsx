"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ShoppingCart } from './shopping-cart'

export function Navbar() {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.85])
  const bg = useMotionTemplate`rgba(17, 24, 39, ${bgOpacity})`

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

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
        </div>
      </div>
    </motion.header>
  )
}
