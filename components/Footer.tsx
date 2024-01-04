'use client';

import Link from 'next/link'

const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About us', href: '/about' },
      { name: 'Contact', href: 'mailto:hello@edusling.com?subject=EduSling%20Enquiry&bcc=akash@edusling.com&body=Thanks%20for%20contacting%20EduSling.%20Please%20allow%2048%20hours%20for%20a%20response.' },
      { name: 'Privacy', href: '/legal/privacy' },
      { name: 'Terms', href: '/legal/terms' },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="pb-6">
                <Link href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-white">
            &copy; 2024 EduSling. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  