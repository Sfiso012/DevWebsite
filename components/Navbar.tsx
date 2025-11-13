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

                {/* Logo */}
                <motion.div whileHover={{ scale: 1.1 }} className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_10px_#00eaff]">
                        <Code2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 text-lg tracking-wide">
                        SN
                    </span>
                </motion.div>

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

                {/* Theme Toggle */}
                <motion.button
                    whileTap={{ rotate: 180 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={toggleTheme}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 hover:border-cyan-400 shadow-sm hover:shadow-[0_0_10px_#00eaff] transition-all"
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-cyan-500" />
                    ) : (
                        <Moon className="w-5 h-5 text-cyan-500" />
                    )}
                </motion.button>
            </div>
        </motion.nav>
    )
}
