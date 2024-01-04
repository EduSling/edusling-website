"use client";

import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
      question: 'Is it really free?',
      answer:
        'Yup! EduSling is entirely free for students of all ages to use. We are able to do this because of our generous sponsors, who believe in our mission that education is a right, not a privilege.',
    },
    {
        question: 'Can I help?',
        answer:
          'EduSling is always looking for volunteers to help us create content, software and more. If you\'re interested in helping us don\'t hesitate to contact us at hello@edusling.com',
      },
    {
        question: 'How can I support EduSling?',
        answer: 'EduSling is a non-profit organisation, meaning we rely on donations to keep us running. If you\'re interested in supporting us, please consider purchasing optional addons on the site.'
    },
  ]


export default function FAQ() {
  return (
    <div id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <div>
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Can’t find the answer you’re looking for? Reach out to our{' '}
          <Link href="#" className="font-semibold text-blue-500 hover:text-blue-400">
            customer support
          </Link>{' '}
          team.
        </p>
        </div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
