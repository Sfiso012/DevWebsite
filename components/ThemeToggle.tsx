// components/ThemeToggle.tsx
'use client'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-8 right-8 z-50 w-12 h-12 rounded-full bg-gray-800 dark:bg-gray-200 backdrop-blur-sm border border-gray-700 dark:border-gray-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5 }}
            >
                {theme === 'dark' ? (
                    <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                    <Moon className="w-6 h-6 text-gray-800" />
                )}
            </motion.div>
        </motion.button>
    )
}