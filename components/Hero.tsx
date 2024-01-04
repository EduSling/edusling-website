"use client";

import Link from 'next/link'

import { useState } from 'react'
import HeroNavbar from './HeroNavbar';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
        <HeroNavbar/>
      <div className="relative isolate pt-14">

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[rgb(59,130,246)] to-[rgb(239,68,68)] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}/>
        </div>

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Let's take your <span className="text-blue-500">learning</span> to the <span className='text-blue-500'> next level</span>.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Introducing EduSling, the platform designed to make your learning more efficient, without putting in any extra effort. Made for students, by students. 
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="#" className="rounded-md bg-blue-500 opacity-50 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400" >
                  Coming Soon
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
