"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const tabs = [
  { key: 'orders', label: 'Orders' },
  { key: 'favorites', label: 'Favorites' },
  { key: 'settings', label: 'Settings' }
]

export function ProfileTabs() {
  const [active, setActive] = useState('orders')

  return (
    <div>
      <div className="flex gap-3 mb-4">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-md border transition-colors ${active === t.key ? 'bg-brand text-white border-brand' : 'border-gray-300 dark:border-gray-700 hover:border-brand'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: .25 }}
            className="card p-6"
          >
            {active === 'orders' && <p>You have no recent orders.</p>}
            {active === 'favorites' && <p>Saved items will appear here.</p>}
            {active === 'settings' && <p>Profile settings and preferences.</p>}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

