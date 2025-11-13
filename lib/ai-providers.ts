// lib/ai-providers.ts - ENHANCED WITH REAL APIS
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

// Primary: Gemini with real API
export async function tryGemini(message: string) {
    try {
        if (!process.env.GOOGLE_AI_API_KEY) {
            console.log('Gemini API key not found');
            return null;
        }

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent(`
      You are Emmanuel's AI portfolio assistant. Emmanuel is a passionate developer and data scientist from South Africa.
      
      About Emmanuel:
      - Skills: Python, TensorFlow, Next.js, React, TypeScript, Machine Learning
      - Projects: Various ML and full-stack applications
      - Mindset: GOAT mentality, continuous learning, building impactful projects
      - Contact: emmanuelhkossi@outlook.com, +27 69 182 3052
      
      User Question: ${message}
      
      Respond in a friendly, professional tone. Keep responses concise but helpful.
      If asked about projects, mention he has worked on machine learning and full-stack applications.
      If asked about contact, provide his email and phone.
      If asked about skills, mention his tech stack.
    `);

        const response = await result.response;
        const text = response.text();

        return { text, provider: 'gemini' };
    } catch (error) {
        console.log('Gemini failed:', error);
        return null;
    }
}

// Fallback 1: Groq (REAL API)
export async function tryGroq(message: string) {
    try {
        if (!process.env.GROQ_API_KEY) {
            console.log('Groq API key not found');
            return null;
        }

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    {
                        role: 'system',
                        content: `You are Emmanuel's AI portfolio assistant. He's a passionate developer from South Africa with skills in Python, ML, Next.js. Respond helpfully about his projects, skills, and contact info.`
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
                model: 'llama3-8b-8192',
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            throw new Error(`Groq API error: ${response.status}`);
        }

        const data = await response.json();
        return { text: data.choices[0].message.content, provider: 'groq' };
    } catch (error) {
        console.log('Groq failed:', error);
        return null;
    }
}

// Enhanced Local Model with more responses
export async function tryLocalModel(message: string) {
    const lowerMessage = message.toLowerCase();

    // Project questions
    if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
        return {
            text: "I've built several machine learning and full-stack projects including AI applications, web platforms, and data analysis tools. Check out my Projects section for details! I'm always working on something new.",
            provider: 'local'
        };
    }

    // Skill questions
    if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
        return {
            text: "My core stack includes Python, TensorFlow, Next.js, React, TypeScript, and cloud technologies. I'm passionate about machine learning and building scalable applications.",
            provider: 'local'
        };
    }

    // Contact questions
    if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('reach')) {
        return {
            text: "You can reach me at emmanuelhkossi@outlook.com or +27 69 182 3052. I'm always open to discussing new opportunities and collaborations!",
            provider: 'local'
        };
    }

    // Mindset/About questions
    if (lowerMessage.includes('mindset') || lowerMessage.includes('grind') || lowerMessage.includes('about')) {
        return {
            text: "I believe in the GOAT mindset - continuous learning, building impactful projects, and pushing boundaries. The grind never stops! 🚀",
            provider: 'local'
        };
    }

    // Experience questions
    if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
        return {
            text: "I have experience in data science, machine learning, and full-stack development. I've worked on various projects from AI models to web applications, always focused on solving real problems.",
            provider: 'local'
        };
    }

    // Default response for unknown questions
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return {
            text: "Hello! I'm Emmanuel's AI assistant. Ask me about his projects, skills, experience, or how to get in touch!",
            provider: 'local'
        };
    }

    return null;
}

// Final Fallback: Enhanced cached responses
export function getCachedResponse(message: string) {
    return {
        text: "Thanks for your message! I'm currently optimizing my AI systems. Feel free to explore my portfolio projects or check back soon for enhanced AI capabilities! You can also reach me directly at emmanuelhkossi@outlook.com",
        provider: 'cached'
    };
}

// TEMPORARY FIX - Removed duplicate implementation of tryGemini function

