import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold">eho99</Link>
        <nav>
          <Link href="/projects" className="mr-4 text-gray-600">Projects</Link>
          <Link href="/about" className="text-gray-600">About</Link>
        </nav>
      </div>
    </header>
  )
}
