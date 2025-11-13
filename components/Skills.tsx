'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Cpu, Cloud, Brain, Database, Code, MessageCircle, Wifi, ChevronLeft, ChevronRight } from 'lucide-react'

const skills = [
    {
        name: "Advanced NLP & AI Engineering",
        icon: <Brain className="w-12 h-12 text-purple-500" />,
        gradient: "from-violet-100 via-purple-50 to-pink-50",
        description:
            "ABSAs, NER, Topic Modeling with Llama 2, RAG systems, Vector Databases (Pinecone), Advanced Prompt Engineering",
        projects: ["Speech Sentiment Analysis", "Document Intelligence", "AI Chatbots"]
    },
    {
        name: "Cloud & IoT Architecture",
        icon: <Wifi className="w-12 h-12 text-blue-500" />,
        gradient: "from-blue-100 via-cyan-50 to-teal-50",
        description:
            "AWS IoT TwinMaker, Digital Twins, SiteWise Telemetry, EC2 Deployment, Azure ML Studio, Real-time Data Pipelines",
        projects: ["Predictive Maintenance", "Digital Twin Systems", "Real-time Monitoring"]
    },
    {
        name: "Machine Learning & Deep Learning",
        icon: <Cpu className="w-12 h-12 text-indigo-500" />,
        gradient: "from-sky-100 via-indigo-50 to-blue-50",
        description:
            "Speech Sentiment Analysis, Emotion Detection, Predictive Maintenance, Model Training & Deployment, Generative AI",
        projects: ["ML Model Deployment", "AI Solutions", "Predictive Analytics"]
    },
    {
        name: "Full-Stack Engineering",
        icon: <Code className="w-12 h-12 text-emerald-500" />,
        gradient: "from-green-100 via-emerald-50 to-teal-50",
        description:
            "Angular with Dependency Injection, API Integration, Swagger, Web App Deployment, Frontend-Backend Integration",
        projects: ["Web Applications", "API Development", "System Integration"]
    },
    {
        name: "Data Engineering & Analytics",
        icon: <Database className="w-12 h-12 text-amber-500" />,
        gradient: "from-amber-50 via-yellow-50 to-orange-50",
        description:
            "Real-time Metrics (Grafana), Data Pipelines, Database Architecture, ETL Processes, Business Intelligence",
        projects: ["Data Pipelines", "Analytics Dashboards", "Database Design"]
    },
    {
        name: "Generative AI & LLM Systems",
        icon: <MessageCircle className="w-12 h-12 text-pink-500" />,
        gradient: "from-indigo-50 via-purple-50 to-pink-50",
        description:
            "OpenAI GPT, Google Gemini, Custom Chatbots, System Prompt Design, LLM Integration, AI-powered Solutions",
        projects: ["AI Assistants", "Content Generation", "LLM Integration"]
    }
]

export default function SkillsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSkill = () => setCurrentIndex((prev) => (prev + 1) % skills.length)
    const prevSkill = () => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-800">
                        TECHNICAL{" "}
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                            CAPABILITIES
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A refined overview of my specialized skill domains
                    </p>
                </motion.div>

                {/* Main Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation */}
                        <button
                            onClick={prevSkill}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:shadow-md transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSkill}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 hover:shadow-md transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Card */}
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white/80 backdrop-blur-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6 }}
                                    className={`absolute inset-0 flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br ${skills[currentIndex].gradient}`}
                                >
                                    <div className="w-20 h-20 bg-white/60 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm">
                                        {skills[currentIndex].icon}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                        {skills[currentIndex].name}
                                    </h3>

                                    <p className="text-gray-600 text-base max-w-2xl mb-6 leading-relaxed">
                                        {skills[currentIndex].description}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2">
                                        {skills[currentIndex].projects.map((project, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/50 rounded-full text-sm text-gray-700 border border-gray-200"
                                            >
                                                {project}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Skill Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8"
                    >
                        {skills.map((skill, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setCurrentIndex(i)}
                                className={`p-4 rounded-2xl border transition-all duration-300 ${i === currentIndex
                                        ? 'bg-white border-gray-300 shadow-md'
                                        : 'bg-white/80 border-gray-200 hover:bg-white'
                                    }`}
                            >
                                <div className="text-center text-gray-700">
                                    <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                                        {skill.icon}
                                    </div>
                                    <div className="text-xs font-medium">{skill.name.split(' ')[0]}</div>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
                >
                    {[
                        { label: "AI Domains", value: "6+" },
                        { label: "Tech Stacks", value: "15+" },
                        { label: "Projects", value: "20+" },
                        { label: "Years", value: "3+" }
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-4 bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-sm"
                        >
                            <div className="text-xl font-bold text-gray-800 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
