import { ProductCard } from './product-card'
import type { Product } from '@/types/product'

export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

