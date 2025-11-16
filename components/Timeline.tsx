'use client'
import { motion } from 'framer-motion'
import { Calendar, Target, Award, TrendingUp, BookOpen, Briefcase, Code } from 'lucide-react'

const experienceData = [
    {
        year: "2024 – Present",
        title: "Wits Enterprise",
        subtitle: "Data Scientist",
        status: "professional",
        icon: <Briefcase className="w-6 h-6" />,
        iconPath: "/icons/wits-bm.png",
        logoSize: "w-8 h-8",
        description:
            "Analysed over a million social-media records using advanced NLP and unsupervised learning (UMAP, HDBSCAN, topic modelling, NER, ABSA, and LLM-based labeling) to build a structured theme and sentiment codebook. Produced insights through pattern analysis and automated labeling, and helped productize the work by building Angular frontend, integrating backend APIs, and deploying models on Azure. My role blends data science, AI engineering, and hands-on software delivery."
    },
    {
        year: "2024",
        title: "Telkom Corporate Centre",
        subtitle: "Junior Data Scientist (IoT & Digital Twin Focus)",
        status: "professional",
        icon: <Briefcase className="w-6 h-6" />,
        iconPath: "/icons/telkom-blue-1.png",
        logoSize: "w-8 h-8",
        description:
            "Contributed to predictive maintenance prototypes using simulated IoT data. Deployed ML models via SageMaker and EC2. Mentored interns in acoustic ML."
    },
    {
        year: "2023",
        title: "BCX (Business Connexion)",
        subtitle: "Data Scientist Intern",
        status: "specialization",
        icon: <Award className="w-6 h-6" />,
        iconPath: "/icons/bcx.png",
        logoSize: "w-6 h-6",
        description:
            "Built an end-to-end Speech Sentiment Analysis system for call-center customer satisfaction monitoring. Performed data labeling, EDA, and audio preprocessing (MFCCs, spectrograms, augmentation), and trained deep learning models using CNNs, RNNs, and Transformers. Delivered and deployed the final prototype."
    },
    {
        year: "2022",
        title: "BP Printing",
        subtitle: "Graphic Designer / Production Operator",
        status: "growth",
        icon: <TrendingUp className="w-6 h-6" />,
        iconPath: "/icons/bp.png",
        logoSize: "w-6 h-6",
        description:
            "Produced custom print designs and operated vinyl cutters, sublimation, and heat press machines for production workflows."
    },
    {
        year: "2021",
        title: "IEG Davis & Dean",
        subtitle: "End User Learnership",
        status: "learning",
        icon: <Target className="w-6 h-6" />,
        iconPath: "/icons/davis.png",
        logoSize: "w-6 h-6",
        description:
            "Provided technical support to end-users, resolving hardware and software issues. Assisted in the installation, configuration, maintenance of IT equipment and systems."
    }
]

const educationData = [
    {
        year: "2026 (Upcoming)",
        title: "UNISA",
        subtitle: "Higher Certificate in Mathematics & Statistics",
        status: "future",
        icon: <Calendar className="w-6 h-6" />,
        iconPath: "/icons/unisa.png",
        logoSize: "w-8 h-8",
        description:
            "Accepted to build the academic background required to pursue my future degree in the tech and data fields."
    },
    {
        year: "2025",
        title: "IT Varsity",
        subtitle: "National Certificate in Fullstack Development",
        status: "current",
        icon: <Code className="w-6 h-6" />,
        iconPath: "/icons/ITv-Logo.png",
        logoSize: "w-8 h-8",
        description:
            "Covered app strategies, APIs, UX, backend fundamentals, and AI in web development."
    },
    {
        year: "2023",
        title: "Explore AI",
        subtitle: "HCert in Information Technology: Systems Development (Data Science)",
        status: "specialization",
        icon: <Award className="w-6 h-6" />,
        iconPath: "/icons/explore.jpg",
        logoSize: "w-10 h-10",
        description:
            "Specialized in data science through scholarship-based program in system development."
    },
    {
        year: "2019",
        title: "Vukuzame MST School",
        subtitle: "Matriculated – Science Stream",
        status: "foundation",
        icon: <BookOpen className="w-6 h-6" />,
        description:
            "Completed Physical Science, Mathematics, and Life Sciences, CAT(Computer Application Technology)."
    }
]

function TimelineSection({ data, heading }: { data: any[], heading: string }) {
    return (
        <section className="py-16 bg-gray-50 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
                        {heading}
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-cyan-300 via-blue-300 to-green-300 rounded-full transform -translate-x-1/2 opacity-40" />

                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-start mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                                <div
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 shadow-sm text-sm font-semibold ${item.status === 'foundation'
                                        ? 'bg-blue-100 text-blue-600'
                                        : item.status === 'learning'
                                            ? 'bg-purple-100 text-purple-600'
                                            : item.status === 'growth'
                                                ? 'bg-yellow-100 text-yellow-600'
                                                : item.status === 'specialization'
                                                    ? 'bg-green-100 text-green-600'
                                                    : item.status === 'professional'
                                                        ? 'bg-emerald-100 text-emerald-600'
                                                        : item.status === 'current'
                                                            ? 'bg-cyan-100 text-cyan-600'
                                                            : 'bg-orange-100 text-orange-600'
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.year}</span>
                                </div>

                                <div className="flex items-center gap-2 mb-2">
                                    {item.iconPath && (
                                        <img
                                            src={item.iconPath}
                                            alt={item.title}
                                            className={`${item.logoSize || 'w-6 h-6'} object-contain rounded-sm`}
                                        />
                                    )}
                                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                                </div>

                                <p className="text-cyan-600 font-medium mb-2">{item.subtitle}</p>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>

                            <div className="flex flex-col items-center mx-4">
                                <div
                                    className={`w-5 h-5 rounded-full border-4 border-white shadow-md ${item.status === 'foundation'
                                        ? 'bg-blue-500'
                                        : item.status === 'learning'
                                            ? 'bg-purple-500'
                                            : item.status === 'growth'
                                                ? 'bg-yellow-500'
                                                : item.status === 'specialization'
                                                    ? 'bg-green-500'
                                                    : item.status === 'professional'
                                                        ? 'bg-emerald-500'
                                                        : item.status === 'current'
                                                            ? 'bg-cyan-500'
                                                            : 'bg-orange-500'
                                        }`}
                                ></div>
                                {index !== data.length - 1 && (
                                    <div className="w-1 h-24 bg-gray-200 mt-2 rounded-full"></div>
                                )}
                            </div>

                            <div className="flex-1"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default function Timeline() {
    return (
        <>
            <TimelineSection heading="Professional Experience" data={experienceData} />
            <TimelineSection heading="Education" data={educationData} />
        </>
    )
}
