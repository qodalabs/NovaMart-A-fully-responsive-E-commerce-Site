import { MotionPage } from '@/components/page-transition'
import { AnimatedH1 } from '@/components/animated'

export const metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <MotionPage>
      <section className="container mx-auto px-4 py-10 max-w-2xl">
        <AnimatedH1 className="text-3xl font-bold mb-6">Get in touch</AnimatedH1>
        <form className="card p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={4} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"></textarea>
          </div>
          <button className="btn btn-primary ripple-container">Send</button>
        </form>
      </section>
    </MotionPage>
  )
}
