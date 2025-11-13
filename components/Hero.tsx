// components/HeroFloatingAvatar.tsx
'use client'
import { motion } from 'framer-motion'
import { ChevronDown, Code2, Database, Cpu, Award } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-3xl shadow-2xl transform rotate-12 opacity-60 animate-float"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-3xl shadow-2xl transform -rotate-12 opacity-60 animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full shadow-2xl opacity-40 animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            {/* Profile Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="flex justify-center"
                            >
                                <div className="relative">
                                    {/* Floating Profile Container */}
                                    <div className="relative w-48 h-48 rounded-2xl bg-white shadow-2xl border border-white/50 overflow-hidden">
                                        <Image
                                            src="/WIC_staff-62-removebg-preview.png"
                                            alt="Sfiso Nkosi"
                                            fill
                                            className="object-cover"
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    {/* Floating Badges */}
                                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                        <Cpu className="w-6 h-6" />
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                        <Database className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="lg:col-span-2 text-center lg:text-left"
                            >
                                <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                                    EMMANUEL SFISO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">NKOSI</span>
                                </h1>

                                <div className="mb-6">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                                        Data Scientist | Software & AI Engineer
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Building intelligent solutions that transform complex data challenges into actionable insights and scalable applications.
                                    </p>
                                </div>

                                {/* Stats with Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
                                >
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 bg-green-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Database className="w-6 h-6" />
                                        </div>
                                        <div className="text-lg font-bold text-gray-800">2x</div>
                                        <div className="text-gray-600 text-sm">Data Roles</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Code2 className="w-6 h-6" />
                                        </div>
                                        <div className="text-lg font-bold text-gray-800">5+</div>
                                        <div className="text-gray-600 text-sm">Tech Stacks</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 bg-purple-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Cpu className="w-6 h-6" />
                                        </div>
                                        <div className="text-lg font-bold text-gray-800">AI/ML</div>
                                        <div className="text-gray-600 text-sm">Specialist</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 bg-pink-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <div className="text-lg font-bold text-gray-800">UNISA</div>
                                        <div className="text-gray-600 text-sm">Mathematics</div>
                                    </div>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="flex gap-4 justify-center lg:justify-start"
                                >
                                    <button
                                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        View Work
                                    </button>
                                    <button
                                        onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
                                    >
                                        My Journey
                                    </button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}