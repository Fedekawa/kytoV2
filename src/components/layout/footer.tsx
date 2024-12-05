import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Kyto</h2>
            <p className="text-neutral-300 text-sm">
              Transform your business with AI in days, not months
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#intelligent-processing" className="text-neutral-300 hover:text-primary text-sm">
                  Intelligent Processing
                </Link>
              </li>
              <li>
                <Link href="#ai-agents" className="text-neutral-300 hover:text-primary text-sm">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#process-automation" className="text-neutral-300 hover:text-primary text-sm">
                  Process Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-neutral-300 hover:text-primary text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-neutral-300 hover:text-primary text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-neutral-300 hover:text-primary text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-300 text-sm">
                <a href="mailto:info@grup.ai" className="hover:text-primary">
                  federico@grup.ai
                </a>
              </li>
              <li className="text-neutral-300 text-sm">
                <a href="tel:+573108704260" className="hover:text-primary">
                  +57 310 8704260
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Kyto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}