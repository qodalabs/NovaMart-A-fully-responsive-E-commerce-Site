export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} NovaMart. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand" href="#">Privacy</a>
          <a className="hover:text-brand" href="#">Terms</a>
          <a className="hover:text-brand" href="#">Support</a>
        </div>
      </div>
    </footer>
  )
}
