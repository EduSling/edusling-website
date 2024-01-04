import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduSling | Home',
  description: 'EduSling is an all-in-one learning platform that allows you to learn more efficiently. It\'s free, and always will be. Created by students, for students. Sign up today!',
  keywords: ["education", "revision", "GCSE", "gcse", "planning", "schedule", "timetable", "timetabling", "timetable", "pomodoro", "revision techniques", "aqa"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
