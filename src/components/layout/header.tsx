import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed w-full border-b bg-white/50 backdrop-blur-xl z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-secondary">Kyto</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#solutions" 
            className="text-sm font-medium text-neutral-700 hover:text-secondary"
          >
            Solutions
          </Link>
          <Link 
            href="#case-studies" 
            className="text-sm font-medium text-neutral-700 hover:text-secondary"
          >
            Case Studies
          </Link>
          <Link 
            href="#methodology" 
            className="text-sm font-medium text-neutral-700 hover:text-secondary"
          >
            Methodology
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium text-neutral-700 hover:text-secondary"
          >
            About
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button>
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}