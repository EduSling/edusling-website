import Link from 'next/link'

export default function CTA() {
    return (
      <div className="bg-blue-500">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to <span className="text-blue-00">supercharge</span> your learning?
            <br/>
            Get started <span className=" text-blue-300">today</span>.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link href="#" className="rounded-md bg-blue-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
              Get started
            </Link>
            <Link href="/" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  