import { BookOpenIcon, CalendarDaysIcon, BoltIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Track your progress',
    description: 'We\'ve turned each of the exam board\'s specifications into a digital checklist. Ensuring you know exactly what you need to learn.',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Schedule your learning',
    description: 'No more procrastinating. EduSling allows you to schedule your learning, ensuring you stay on track.',
    href: '#',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Learn more efficiently',
    description: 'Using our built-in pomodoro timer, you can learn more efficiently. EduSling schedules your breaks, ensuring you don\'t burn out.',
    href: '#',
    icon: BoltIcon,
  },

]

export default function Introduction() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 tracking-widest uppercase text-blue-400">Learn faster with EduSling</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="text-blue-500">EduSling</span> makes learning
            <br/>
            more <span className="text-blue-500">efficent</span>.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Learning is hard. Theres so much content to learn in so little time. EduSling aims to make learning easier by providing a platform that allows you to learn more efficiently, without putting in any extra effort. The best part is, it's all free!.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* Learn More
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-500 hover:text-blue-300">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                    */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
