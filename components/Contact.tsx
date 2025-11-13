'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setResult(null)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                setResult({ success: true, message: data.message || "Message sent successfully! I'll get back to you soon." })
                setFormData({ name: '', email: '', message: '' }) // Reset form
            } else {
                setResult({ success: false, message: data.error || 'Failed to send message. Please try again.' })
            }
        } catch (error) {
            setResult({
                success: false,
                message: 'Network error. Please try again.'
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const socialLinks = [
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/emmanuel-nkosi",
            label: "LinkedIn",
            color: 'hover:bg-blue-500'
        },
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/Sfiso505",
            label: "GitHub",
            color: 'hover:bg-gray-700'
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            href: "https://wa.me/27691823052?text=Hi%20Emmanuel,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
            label: "WhatsApp",
            color: 'hover:bg-green-500'
        }
    ]

    return (
        <section
            id="contact"
            className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 relative overflow-hidden"
        >
            {/* Soft Gradient Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-white">
                        LET'S <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">BUILD</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Got a revolutionary idea? Need a tech partner? Let's create something innovative together.
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">GET IN TOUCH</h3>

                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-green-400 transition-all"
                            >
                                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <p className="text-white font-semibold">emmanuelhkossi@outlook.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all"
                            >
                                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <p className="text-white font-semibold">+27 69 182 3052</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 p-4 bg-gray-800/60 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all"
                            >
                                <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-black" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white font-semibold">Pretoria, South Africa</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Socials - UPDATED WITH WORKING LINKS */}
                        <div className="pt-8">
                            <h4 className="text-xl font-bold text-white mb-6">FOLLOW THE GRIND</h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white border border-gray-700 ${social.color} transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form - UPDATED WITH REAL FUNCTIONALITY */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-800/40 backdrop-blur-lg rounded-3xl p-8 border border-gray-700 shadow-xl shadow-black/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-gray-900/60 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all disabled:opacity-50"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-gray-900/60 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all disabled:opacity-50"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    rows={5}
                                    className="w-full bg-gray-900/60 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/30 transition-all resize-none disabled:opacity-50"
                                    placeholder="What revolutionary idea do you want to build?"
                                />
                            </div>

                            {/* Result Message */}
                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-2xl ${result.success
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                        }`}
                                >
                                    {result.message}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                                className="w-full bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        SENDING...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        SEND MESSAGE
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16 pt-8 border-t border-gray-700"
                >
                    <p className="text-gray-400">
                        Crafted with 💚 and curiosity by <span className="text-white font-semibold">Emmanuel Sfiso Nkosi</span> • {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}