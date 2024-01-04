import type { Metadata } from 'next'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CTA from '@/components/CTA';
import Terms from "@/components/legal/Terms";

export const metadata: Metadata = {
    title: 'EduSling | Terms of Service',
    description: 'EduSling is an all-in-one learning platform that allows you to learn more efficiently. It\'s free, and always will be. Created by students, for students. Sign up today!',
    keywords: ["education", "revision", "GCSE", "gcse", "planning", "schedule", "timetable", "timetabling", "timetable", "pomodoro", "revision techniques", "aqa"]
  }
  
export default function Page() {
    return (
        <div>
            <Navbar/>
            <Terms/>
            <CTA/>
            <Footer/>
        </div>
    )
}