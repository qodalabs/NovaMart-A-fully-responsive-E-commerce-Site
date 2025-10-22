import { MotionPage } from '@/components/page-transition'
import { AnimatedH1, AnimatedP } from '@/components/animated'

export const metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <MotionPage>
      <section className="container mx-auto px-4 py-10 space-y-6">
        <AnimatedH1 className="text-3xl font-bold">About NovaMart</AnimatedH1>
        <AnimatedP className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">We craft delightful shopping experiences with beautiful UI, smooth animations, and a focus on performance.</AnimatedP>
      </section>
    </MotionPage>
  )
}
