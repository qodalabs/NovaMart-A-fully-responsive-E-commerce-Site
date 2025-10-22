import { MotionPage } from '@/components/page-transition'
import { CartClient } from '@/components/cart-client'

export const metadata = {
  title: 'Cart',
  description: 'Review your cart and checkout.'
}

export default function CartPage() {
  return (
    <MotionPage>
      <section className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <CartClient />
      </section>
    </MotionPage>
  )
}
