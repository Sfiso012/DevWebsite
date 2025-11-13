// app/layout.tsx
import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'My Journey into Data Science',
    description: 'A journey of perseverance, curiosity, and continuous learning in tech.',
    keywords: 'data science, portfolio, learning, south africa',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} bg-white dark:bg-black text-black dark:text-white transition-colors duration-500`}
            >
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}
