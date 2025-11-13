'use client'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'

const projects = [
    {
        title: "InsightX: Enterprise Knowledge RAG System",
        description: "A Retrieval-Augmented Generation platform that allows employees to query internal documents (policies, reports, SharePoint files) using natural language. Designed as a private ChatGPT for internal knowledge discovery and decision support.",
        status: "Prototype",
        impact: "Empowered smarter, faster decision-making across departments",
        tech: ["FastAPI", "LangChain", "Pinecone", "GPT-4 Turbo", "React", "Azure AD"],
        category: "AI / NLP / LLM",
    },
    {
        title: "Legal CRM & Analytics Platform",
        description: "A client and case management system for law firms, integrating real-time analytics, custom reporting, and predictive lead scoring. Combines backend architecture with AI-powered case tracking insights.",
        status: "Prototype",
        impact: "Streamlined legal workflows + boosted client follow-up rates",
        tech: ["FastAPI", "PostgreSQL", "React", "Tailwind", "OpenAI"],
        category: "CRM + Applied AI",
    },
    {
        title: "ModelOps Central: MLOps Control Center",
        description: "A unified web interface for managing the full ML lifecycle, from dataset versioning and experiment tracking to model deployment and monitoring. Enables teams to push models to staging/prod and observe drift over time.",
        status: "PoC",
        impact: "Centralized collaboration across DS and DevOps teams",
        tech: ["FastAPI", "MLflow", "Angular", "Evidently AI", "Docker", "GitHub Actions"],
        category: "MLOps / Engineering",
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-800">
                        FROM CONCEPT <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">TO PRODUCTION</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A journey of practical innovation and measurable outcomes
                    </p>
                </motion.div>

                {/* Timeline layout */}
                <div className="relative max-w-5xl mx-auto before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-gray-200 before:transform before:-translate-x-1/2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`mb-16 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Card */}
                            <div className={`md:w-1/2 p-6 bg-white shadow-md border border-gray-200 rounded-2xl backdrop-blur-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                                    <span className="text-sm text-gray-500">{project.category}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-green-600 font-semibold">{project.status}</span>
                                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                                        Link coming soon <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all shadow-md flex items-center gap-2 mx-auto">
                        <Zap className="w-4 h-4" />
                        Start a Project
                    </button>
                </div>
            </div>
        </section>
    )
}
