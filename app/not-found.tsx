import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-2">Page not found</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary">Go Home</Link>
    </div>
  )
}

