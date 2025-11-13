'use client'
import { motion } from 'framer-motion'
import { Brain, Target, Zap, Shield, Rocket, Cpu, Cloud } from 'lucide-react'

const principles = [
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "TECHNICAL EXCELLENCE",
        description:
            "Master the fundamentals. If you deeply understand how things work, you’ll naturally build systems that are scalable, secure, and adaptable.",
        color: "from-blue-400 to-cyan-400"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "CONTINUOUS EVOLUTION",
        description:
            "I learn by building. Every project is a chance to sharpen skills, question assumptions, and level up with context, not just content.",
        color: "from-purple-400 to-pink-400"
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "CLARITY OVER COMPLEXITY",
        description:
            "I value simplicity that scales. Complex solutions often fail not in design but in handoff. If it’s not clear, it’s not finished.",
        color: "from-green-400 to-emerald-400"
    },

    {
        icon: <Rocket className="w-8 h-8" />,
        title: "PROBLEM FRAMING FIRST",
        description:
            "Sometimes the problem isn’t the problem, it’s how we’re approaching it. I spend more time understanding the 'why' before touching the 'how'.",
        color: "from-orange-400 to-red-400"
    }
]

const quotes = [
    "Data is the new oil, but insight is the refinery.",
    "I spend 80% on the problem, 20% on the solution, it pays off.",
    "Working software is worth more than clever architecture no one understands."
]

export default function Mindset() {
    return (
        <section id="mindset" className="py-20 bg-gradient-to-br from-gray-100 via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Ambient Gradient Shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-green-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-800">
                        TECHNICAL{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            PHILOSOPHY
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Building solutions that matter through continuous learning and practical innovation
                    </p>
                </motion.div>

                {/* Principles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 hover:shadow-xl hover:border-cyan-400/40 transition-all duration-500"
                        >
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${principle.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {principle.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cyan-600 transition-colors">
                                {principle.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                                {principle.description}
                            </p>

                            {/* Subtle Hover Glow */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Technical Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <Brain className="w-8 h-8 text-cyan-500" />
                            <h3 className="text-2xl font-bold text-gray-800">TECHNICAL INSIGHTS</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {quotes.map((quote, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 border border-gray-200 rounded-2xl p-4 hover:border-cyan-400 hover:shadow-md transition-all"
                                >
                                    <p className="text-gray-700 font-medium text-center italic">
                                        “{quote}”
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Development Approach */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="max-w-4xl mx-auto mt-12"
                >
                    <div className="bg-gradient-to-r from-cyan-100/60 to-purple-100/60 backdrop-blur-sm rounded-3xl p-8 border border-cyan-200/40">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            DEVELOPMENT APPROACH
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Problem-First</h4>
                                <p className="text-gray-600 text-sm">Start with understanding the real challenge</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Iterative Development</h4>
                                <p className="text-gray-600 text-sm">Build, test, learn, and improve continuously</p>
                            </div>
                            <div>
                                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">Production Ready</h4>
                                <p className="text-gray-600 text-sm">Focus on scalability, maintenance, and reliability</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-center mt-16"
                >
                    <p className="text-2xl font-bold mb-6 text-gray-700">
                        Ready to solve complex challenges?
                    </p>
                    <button className="bg-gradient-to-r from-green-400 to-purple-500 hover:from-green-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-green-400/30">
                        START BUILDING
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
