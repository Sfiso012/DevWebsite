// app/page.tsx
import Navbar from '@/components/Navbar'
// import Hero from '@/components/HeroFloatingAvatar'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Mindset from '@/components/Mindset'
import Contact from '@/components/Contact'
import AIAssistant from '@/components/AIAssistant'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <AIAssistant />
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