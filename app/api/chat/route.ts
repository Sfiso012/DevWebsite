// app/api/chat/route.ts - ENHANCED WITH RATE LIMITING
import { NextRequest, NextResponse } from 'next/server';
import { tryGemini, tryGroq, tryLocalModel, getCachedResponse } from '@/lib/ai-providers';

// Simple in-memory rate limiting (for development)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 10; // 10 requests per minute

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW;

    const requests = rateLimitMap.get(ip) || [];
    const recentRequests = requests.filter((time: number) => time > windowStart);

    if (recentRequests.length >= MAX_REQUESTS) {
        return false;
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    return true;
}

export async function POST(request: NextRequest) {
    try {
        const ip = request.ip || 'unknown';

        // Rate limiting check
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                {
                    text: "Too many requests! Please wait a moment before sending another message.",
                    provider: 'rate_limit'
                },
                { status: 429 }
            );
        }

        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                { text: "Please provide a message!", provider: 'error' },
                { status: 400 }
            );
        }

        if (message.length > 500) {
            return NextResponse.json(
                { text: "Message too long. Please keep it under 500 characters.", provider: 'error' },
                { status: 400 }
            );
        }

        console.log('AI Assistant received:', message);

        // Try Primary (Gemini)
        let response = await tryGemini(message);
        if (response) {
            console.log('Responded via Gemini');
            return NextResponse.json(response);
        }

        // Try Fallback 1 (Groq - FREE & FAST)
        response = await tryGroq(message);
        if (response) {
            console.log('Responded via Groq');
            return NextResponse.json(response);
        }

        // Try Fallback 2 (Local/Offline)
        response = await tryLocalModel(message);
        if (response) {
            console.log('Responded via Local Model');
            return NextResponse.json(response);
        }

        // Final Fallback (Cached responses)
        response = getCachedResponse(message);
        console.log('Responded via Cached Response');
        return NextResponse.json(response);

    } catch (error) {
        console.error('AI Assistant error:', error);
        // Graceful degradation
        return NextResponse.json({
            text: "I'm optimizing my AI capabilities right now. Meanwhile, feel free to explore my projects below! 🔧",
            fallback: true,
            provider: 'error'
        });
    }
}

// Health check endpoint
export async function GET() {
    return NextResponse.json({
        status: 'AI Assistant is running!',
        timestamp: new Date().toISOString(),
        features: ['Gemini AI', 'Groq Fallback', 'Local Model', 'Rate Limiting']
    });
}