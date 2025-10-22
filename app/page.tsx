import { Hero } from '@/components/hero'
import { CategoryCarousel } from '@/components/category-carousel'
import { ProductGrid } from '@/components/product-grid'
import { products } from '@/data/products'
import { MotionPage } from '@/components/page-transition'

export default function HomePage() {
  return (
    <MotionPage>
      <Hero />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
        <CategoryCarousel />
      </section>
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductGrid items={products.slice(0, 8)} />
      </section>
    </MotionPage>
  )
}

