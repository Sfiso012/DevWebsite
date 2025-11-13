// app/api/debug/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const googleKey = process.env.GOOGLE_AI_API_KEY;
    const groqKey = process.env.GROQ_API_KEY;

    return NextResponse.json({
        googleKey: googleKey ? `✅ Set (${googleKey.substring(0, 10)}...)` : '❌ Missing',
        groqKey: groqKey ? `✅ Set (${groqKey.substring(0, 10)}...)` : '❌ Missing',
        nodeEnv: process.env.NODE_ENV,
        message: 'Visit http://localhost:3000/api/debug'
    });
}