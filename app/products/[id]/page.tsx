import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import { MotionPage } from '@/components/page-transition'
import { AddToCartButton } from '@/components/add-to-cart-button'
import { Reviews } from '@/components/reviews'
import { ImageGallery } from '@/components/image-gallery'

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }))
}

export function generateMetadata({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  if (!product) return {}
  return {
    title: product.title,
    description: product.description
  }
}

export default function ProductDetails({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  if (!product) return notFound()

  return (
    <MotionPage>
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        <ImageGallery images={product.images} />
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <div className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</div>
          <AddToCartButton product={product} />
          <div className="mt-10">
            <Reviews productId={product.id} />
          </div>
        </div>
      </div>
    </MotionPage>
  )
}

