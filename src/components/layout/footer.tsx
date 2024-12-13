'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Document Processing', href: '#solutions' },
    { name: 'AI Customer Service', href: '#solutions' },
    { name: 'Process Automation', href: '#solutions' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Methodology', href: '#methodology' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ],
  social: [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#F2F2F7]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/transparent.svg"
                alt="Kyto Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#002e88]/70 text-sm">
              Transform your business with AI solutions that are 10x faster and more affordable.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#002e88]/60 hover:text-[#002e88] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-[#002e88] mb-4">Solutions</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#002e88]/70 hover:text-[#002e88] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#002e88] mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#002e88]/70 hover:text-[#002e88] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#002e88] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@kyto.ai"
                  className="text-sm text-[#002e88]/70 hover:text-[#002e88] transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@kyto.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-[#002e88]/70 hover:text-[#002e88] transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  (123) 456-7890
                </a>
              </li>
            </ul>

            <button className="btn-primary mt-6">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D1D1D6]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#002e88]/50">
              © {new Date().getFullYear()} Kyto. All rights reserved.
            </p>
            <div className="flex gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#002e88]/50 hover:text-[#002e88] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}