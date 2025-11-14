// app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Mindset from '@/components/Mindset'
import Contact from '@/components/Contact'
import AIAssistant from '@/components/AIAssistant'
import { Download } from 'lucide-react'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AIAssistant />

            {/* GOATED Floating CV Download Button - MOVED TO LEFT */}
            <div className="fixed bottom-6 left-6 z-50">
                <a
                    href="/Emmanuel-Sifiso-Nkosi.pdf"
                    download
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
                >
                    <Download size={20} />
                    <span>Download CV</span>
                </a>
            </div>

            <section id="home">
                <Hero />
            </section>
            <Timeline />
            <Skills />
            <Projects />
            <Mindset />
            <Contact />
        </main>
    )
}