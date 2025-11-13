// components/AnimatedProfile.tsx
'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AnimatedProfile() {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-green-400 via-purple-500 to-blue-500 p-1"
        >
            {/* Hexagon Shape */}
            <div className="w-full h-full clip-hexagon bg-black relative overflow-hidden">
                <Image
                    src="/WIC_staff-62-removebg-preview.png"
                    alt="The GOAT"
                    fill
                    className="object-cover scale-110"
                    style={{
                        transform: "translateZ(50px)",
                    }}
                />

                {/* Animated Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-purple-500 to-blue-500 opacity-20 animate-pulse rounded-2xl" />

                {/* Floating Particles */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-green-400 rounded-full animate-float" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
        </motion.div>
    )
}