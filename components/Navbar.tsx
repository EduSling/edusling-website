"use client";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, AcademicCapIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/#about' },
    { name: 'Contact', href: 'mailto:hello@edusling.com?subject=EduSling%20Enquiry&bcc=akash@edusling.com&body=Thanks%20for%20contacting%20EduSling.%20Please%20allow%2048%20hours%20for%20a%20response.' },
    { name: 'Login', href: '/login' },
  ]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EduSling</span>
                <AcademicCapIcon className="h-8 w-auto text-white hover:text-gray-300" aria-hidden="true" />
            </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-gray-300 text-sm font-semibold leading-6 text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Let's get started <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">EduSling</span>
                <AcademicCapIcon className="h-8 w-auto text-white hover:text-gray-300" aria-hidden="true" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className="-mx-3 hover:text-gray-300 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-300">
                  Let's get started
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
