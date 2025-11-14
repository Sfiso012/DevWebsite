// components/Contact.tsx - LAYOUT 4: Minimal Dark
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, ArrowRight } from 'lucide-react'

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
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_makotzh',
                    template_id: 'template_kdwpjzi',
                    user_id: 'hgnzBjw48kq1cWWlW',
                    template_params: {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                        to_email: 'emmanuelnkossi@outlook.com',
                        subject: `New Portfolio Message from ${formData.name}`
                    }
                }),
            })

            if (response.ok) {
                setResult({
                    success: true,
                    message: "✅ Your message has been sent. I'll get back to you soon."
                })
                setFormData({ name: '', email: '', message: '' })
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            setResult({
                success: false,
                message: "❌ Please email me directly at: emmanuelnkossi@outlook.com"
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
            icon: <Linkedin className="w-4 h-4" />,
            href: "https://www.linkedin.com/in/emmanuel-nkosi",
            label: "LinkedIn"
        },
        {
            icon: <Github className="w-4 h-4" />,
            href: "https://github.com/Sfiso505",
            label: "GitHub"
        },
        {
            icon: <MessageCircle className="w-4 h-4" />,
            href: "https://wa.me/27691823052?text=Hi%20Emmanuel,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
            label: "WhatsApp"
        }
    ]

    return (
        <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Minimal Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        Get In <span className="font-semibold text-gray-100">Touch</span>
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-600 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Interested in working together? Let's start a conversation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 border-l-4 border-gray-600 hover:border-gray-400 transition-all duration-300"
                            >
                                <Mail className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a href="mailto:emmanuelnkossi@outlook.com" className="text-white hover:text-gray-300 transition-colors">
                                        emmanuelnkossi@outlook.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 border-l-4 border-gray-600 hover:border-gray-400 transition-all duration-300"
                            >
                                <Phone className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm">Phone</p>
                                    <a href="tel:+27691823052" className="text-white hover:text-gray-300 transition-colors">
                                        +27 69 182 3052
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 border-l-4 border-gray-600 hover:border-gray-400 transition-all duration-300"
                            >
                                <MapPin className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-gray-400 text-sm">Location</p>
                                    <p className="text-white">Pretoria, South Africa</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <div className="flex gap-3">
                                {socialLinks.map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-transparent border-b border-gray-600 px-2 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className="w-full bg-transparent border-b border-gray-600 px-2 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all disabled:opacity-50"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    rows={4}
                                    className="w-full bg-transparent border-b border-gray-600 px-2 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-all resize-none disabled:opacity-50"
                                    placeholder="Your Message"
                                />
                            </div>

                            {result && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-sm ${result.success ? 'text-gray-400' : 'text-gray-500'}`}
                                >
                                    {result.message}
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isLoading}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 text-white hover:text-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                    className="text-center mt-16 pt-8 border-t border-gray-800"
                >
                    <p className="text-gray-500 text-sm">
                        Crafted with 💚 and curiosity by <span className="text-white font-semibold">Emmanuel Sfiso Nkosi</span> • {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}