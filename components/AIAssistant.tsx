// components/AIAssistant.tsx
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Brain, Zap, Send } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface Message {
    text: string
    isUser: boolean
    timestamp: Date
}

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            text: "Hello! I'm your dev partner. Ask me about The Grind, Tech Stack, Projects, Mindset, or Contact!",
            isUser: false,
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputMessage.trim() || isLoading) return

        const userMessage = inputMessage.trim()
        setInputMessage('')

        // Add user message
        setMessages(prev => [...prev, {
            text: userMessage,
            isUser: true,
            timestamp: new Date()
        }])

        setIsLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            })

            const data = await response.json()

            // Add AI response
            setMessages(prev => [...prev, {
                text: data.text,
                isUser: false,
                timestamp: new Date()
            }])
        } catch (error) {
            // Fallback response if API fails
            setMessages(prev => [...prev, {
                text: "I'm optimizing my AI capabilities right now! 🔧 Check out my projects below or try again in a moment.",
                isUser: false,
                timestamp: new Date()
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const quickQuestions = [
        "What's your tech stack?",
        "Tell me about your projects",
        "What's your mindset?",
        "How can I contact you?"
    ]

    const handleQuickQuestion = (question: string) => {
        setInputMessage(question)
        // Auto-submit after a brief delay for better UX
        setTimeout(() => {
            const fakeEvent = { preventDefault: () => { } } as React.FormEvent
            handleSubmit(fakeEvent)
        }, 100)
    }

    return (
        <>
            {/* Floating AI Trigger - Enhanced */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-50 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="relative">
                    {/* Orbital Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border-2 border-green-400 rounded-full opacity-50"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border border-purple-400 rounded-full opacity-30"
                    />

                    {/* Pulsing notification dot */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                    />

                    {/* Main Button */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/30">
                        <Brain className="w-8 h-8 text-white" />
                    </div>
                </div>
            </motion.button>

            {/* AI Assistant Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl h-[600px] border-2 border-green-400 shadow-2xl relative overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-green-400 to-purple-500 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-6 h-6" />
                                        <div>
                                            <h3 className="font-bold text-lg">DevG AI Assistant</h3>
                                            <p className="text-sm opacity-80">Always grinding</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 p-4 overflow-y-auto">
                                <div className="space-y-4">
                                    {messages.map((message, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex items-start gap-3 ${message.isUser ? 'flex-row-reverse' : ''}`}
                                        >
                                            {/* AI Avatar */}
                                            {!message.isUser && (
                                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Brain className="w-4 h-4 text-white" />
                                                </div>
                                            )}

                                            {/* User Avatar */}
                                            {message.isUser && (
                                                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-xs text-white">You</span>
                                                </div>
                                            )}

                                            {/* Message Bubble */}
                                            <div className={`rounded-2xl p-4 max-w-[80%] ${message.isUser
                                                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
                                                }`}>
                                                <p className="text-sm">{message.text}</p>
                                                <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'
                                                    }`}>
                                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Loading indicator */}
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-start gap-3"
                                        >
                                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center">
                                                <Brain className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                                                <div className="flex space-x-2">
                                                    <motion.div
                                                        animate={{ scale: [1, 1.5, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="w-2 h-2 bg-green-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.5, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                                        className="w-2 h-2 bg-green-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.5, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                                        className="w-2 h-2 bg-green-400 rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            </div>

                            {/* Quick Questions */}
                            {messages.length <= 2 && (
                                <div className="px-4 pb-2">
                                    <div className="flex flex-wrap gap-2">
                                        {quickQuestions.map((question, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => handleQuickQuestion(question)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            >
                                                {question}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input Area */}
                            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        placeholder="Ask about the hustle..."
                                        className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-green-400 outline-none"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !inputMessage.trim()}
                                        className="bg-gradient-to-r from-green-400 to-purple-500 text-white rounded-2xl px-6 py-3 font-bold hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2"
                                    >
                                        {isLoading ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                            />
                                        ) : (
                                            <Send className="w-4 h-4" />
                                        )}
                                        Send
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}