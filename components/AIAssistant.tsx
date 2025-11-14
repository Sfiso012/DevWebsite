'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'
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
            text: "Hello! I'm here to help you learn more about Emmanuel. Ask me about his tech stack, projects, experience, or how to get in touch.",
            isUser: false,
            timestamp: new Date()
        }
    ])
    const [inputMessage, setInputMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputMessage.trim() || isLoading) return

        const userMessage = inputMessage.trim()
        setInputMessage('')

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

            setMessages(prev => [...prev, {
                text: data.text,
                isUser: false,
                timestamp: new Date()
            }])
        } catch (error) {
            setMessages(prev => [...prev, {
                text: "I'm currently optimizing my responses. Feel free to browse the portfolio below or try again shortly.",
                isUser: false,
                timestamp: new Date()
            }])
        } finally {
            setIsLoading(false)
        }
    }

    const quickQuestions = [
        "Tech stack?",
        "Recent projects?",
        "Work experience?",
        "Contact info?"
    ]

    const handleQuickQuestion = (question: string) => {
        setInputMessage(question)
        setTimeout(() => {
            const fakeEvent = { preventDefault: () => { } } as React.FormEvent
            handleSubmit(fakeEvent)
        }, 100)
    }

    return (
        <>
            {/* Floating Trigger - Dark Gray Theme */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-gray-600 rounded-full"
                    />
                    <div className="relative w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600 shadow-xl">
                        <motion.div
                            animate={{ rotate: [0, -5, 0, 5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <MessageCircle className="w-7 h-7 text-gray-300" />
                        </motion.div>
                    </div>
                </div>
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gray-800 rounded-xl w-full max-w-md h-[500px] border border-gray-700 shadow-2xl flex flex-col"
                        >
                            {/* Header - Dark Gray Theme */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-700/50 to-gray-800/50">
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-gray-300" />
                                    <h3 className="font-bold text-white">AI Assistant</h3>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-gray-700 rounded transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 p-4 overflow-y-auto">
                                <div className="space-y-3">
                                    {messages.map((message, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex gap-2 ${message.isUser ? 'flex-row-reverse' : ''}`}
                                        >
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${message.isUser
                                                ? 'bg-gray-600 text-white'
                                                : 'bg-gray-700 text-gray-300'
                                                }`}>
                                                {message.isUser ? 'Y' : 'AI'}
                                            </div>
                                            <div className={`max-w-[80%] rounded-lg px-3 py-2 ${message.isUser
                                                ? 'bg-gray-600 text-white'
                                                : 'bg-gray-700/50 text-gray-200 border border-gray-600'
                                                }`}>
                                                <p className="text-sm">{message.text}</p>
                                                <p className={`text-xs mt-1 ${message.isUser ? 'text-gray-400' : 'text-gray-500'
                                                    }`}>
                                                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex gap-2"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs text-gray-300">
                                                AI
                                            </div>
                                            <div className="bg-gray-700/50 rounded-lg px-3 py-2 border border-gray-600">
                                                <div className="flex space-x-1">
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                                                    />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
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
                                    <div className="flex flex-wrap gap-1">
                                        {quickQuestions.map((question, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => handleQuickQuestion(question)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded hover:bg-gray-600 transition-colors border border-gray-600"
                                            >
                                                {question}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Input */}
                            <div className="p-4 border-t border-gray-700">
                                <form onSubmit={handleSubmit} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        placeholder="Ask about Emmanuel..."
                                        className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-500 transition-colors text-white placeholder-gray-400"
                                        disabled={isLoading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={isLoading || !inputMessage.trim()}
                                        className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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