import type { Metadata } from 'next'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PrivacyPage from "@/components/legal/Privacy";
import CTA from '@/components/CTA';

export const metadata: Metadata = {
    title: 'EduSling | Privacy Policy',
    description: 'EduSling is an all-in-one learning platform that allows you to learn more efficiently. It\'s free, and always will be. Created by students, for students. Sign up today!',
    keywords: ["education", "revision", "GCSE", "gcse", "planning", "schedule", "timetable", "timetabling", "timetable", "pomodoro", "revision techniques", "aqa"]
  }

export default function Page() {
    return (
        <div>
            <Navbar/>
            <PrivacyPage/>
            <CTA/>
            <Footer/>
        </div>
    )
}