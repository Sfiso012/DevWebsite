'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code2, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Journey', href: '#timeline' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Philosophy', href: '#mindset' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <motion.nav
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
                : 'bg-white/40 backdrop-blur-xl'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-gray-700">


                {/* Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onHoverStart={() => setHovered(item.name)}
                            onHoverEnd={() => setHovered(null)}
                            className={`relative font-medium tracking-wide transition-colors duration-300 ${hovered === item.name
                                ? 'text-cyan-600'
                                : 'text-gray-700 hover:text-cyan-500'
                                }`}
                        >
                            {item.name}
                            {hovered === item.name && (
                                <motion.span
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500 rounded-full"
                                />
                            )}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}
