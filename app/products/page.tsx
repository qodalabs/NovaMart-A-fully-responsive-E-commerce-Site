import { ProductGrid } from '@/components/product-grid'
import { products } from '@/data/products'
import { MotionPage } from '@/components/page-transition'

export const metadata = {
  title: 'Products',
  description: 'Explore our full product catalog.'
}

export default function ProductsPage() {
  return (
    <MotionPage>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">All Products</h1>
        <ProductGrid items={products} />
      </section>
    </MotionPage>
  )
}

