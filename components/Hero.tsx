// components/HeroOrbital.tsx
'use client'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const dataStreams = [
    "01101000 01100101 01101100 01101100 01101111",
    "01000100 01100001 01110100 01100001 00100000 01010011 01100011 01101001 01100101 01101110 01110100 01101001 01110011 01110100",
    "01000001 01001001 00100000 01000101 01101110 01100111 01101001 01101110 01100101 01100101 01110010",
    "01001101 01100001 01100011 01101000 01101001 01101110 01100101 00100000 01001100 01100101 01100001 01110010 01101110 01101001 01101110 01100111",
]

const professions = [
    "Data Scientist",
    "AI/ML Engineer",
    "Software Developer"
]

export default function HeroOrbital() {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [currentProfession, setCurrentProfession] = useState(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / rect.width - 0.5
        const yPct = mouseY / rect.height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    // Auto-rotate professions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProfession((prev) => (prev + 1) % professions.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const handleExploreWork = () => {
        const projectsSection = document.getElementById('projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.warn('Projects section not found - make sure you have an element with id="projects"')
            // Fallback: scroll to next section
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
        }
    }

    const handleViewJourney = () => {
        const experienceSection = document.getElementById('experience')
        if (experienceSection) {
            experienceSection.scrollIntoView({ behavior: 'smooth' })
        } else {
            console.warn('Experience section not found - make sure you have an element with id="experience"')
            // Fallback: scroll further down
            window.scrollBy({ top: window.innerHeight * 1.5, behavior: 'smooth' })
        }
    }

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
        >
            {/* Binary Data Streams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {dataStreams.map((stream, index) => (
                    <motion.div
                        key={index}
                        className="absolute font-mono text-xs text-blue-400/20"
                        animate={{ y: ["100vh", "-100vh"] }}
                        transition={{ duration: 20 + index * 3, repeat: Infinity, delay: index * 2, ease: "linear" }}
                        style={{ left: `${10 + index * 12}%` }}
                    >
                        {stream}
                    </motion.div>
                ))}
            </div>

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Enhanced Orbital Profile System */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center lg:justify-end"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <div className="relative">
                            {/* Main Profile Image with Watercolor Effect */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 1.2, type: "spring" }}
                                className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                            >
                                {/* Watercolor Background Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-cyan-50/60 opacity-90">
                                    {/* Watercolor texture effect */}
                                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/40 rounded-full blur-xl"></div>
                                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-200/30 rounded-full blur-xl"></div>
                                        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-lg"></div>
                                    </div>
                                </div>

                                <Image
                                    src="/WIC_staff-62-removebg-preview.png"
                                    alt="Emmanuel Sfiso Nkosi"
                                    fill
                                    className="object-cover relative z-10"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                {/* Subtle Glow Effect */}
                                <motion.div
                                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Enhanced Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="space-y-8"
                        style={{ transform: "translateZ(30px)" }}
                    >
                        <div className="space-y-6">
                            <motion.h1
                                className="text-5xl lg:text-6xl font-light text-gray-900"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                Emmanuel <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Sfiso Nkosi</span>
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 120 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                            />

                            <div className="h-16">
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={currentProfession}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-2xl text-gray-700 font-medium"
                                    >
                                        {professions[currentProfession]}
                                    </motion.h2>
                                </AnimatePresence>
                            </div>

                            <motion.p
                                className="text-gray-600 text-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.3 }}
                            >
                                Creating intelligent solutions through data science, machine learning,
                                and software development. Turning complex challenges into elegant,
                                scalable applications.
                            </motion.p>
                        </div>

                        {/* Enhanced Skills Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            className="grid grid-cols-3 gap-4"
                        >
                            {[
                                { label: 'Data Science', sub: 'practitioner' },
                                { label: 'AI/ML', sub: 'Engineer' },
                                { label: 'Software', sub: 'Developer' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 hover:border-blue-300 transition-all shadow-sm hover:shadow-md group"
                                >
                                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1 group-hover:text-blue-500 transition-colors">
                                        {item.sub}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            className="flex gap-4 pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleExploreWork}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg flex-1 group"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Explore Work
                                    <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleViewJourney}
                                className="border border-gray-300 text-gray-700 px-8 py-3 font-medium text-sm hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 rounded-lg flex-1 group"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    View Journey
                                    <motion.span
                                        animate={{ y: [0, 2, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="group-hover:translate-y-0.5 transition-transform"
                                    >
                                        ↓
                                    </motion.span>
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-16 left-[45%]"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer flex justify-center"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="text-gray-400 text-xs mt-2 text-center"
                    >
                        Scroll to explore
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    )
}