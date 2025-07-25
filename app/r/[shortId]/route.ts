import { NextRequest, NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET(req: NextRequest, {params}: {params: Promise<{shortId: string}>} ) {

    const { shortId } = await params;

    if (!shortId) {
        return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
    }

    try {
    const longUrl = await redis.get(shortId);

    if (!longUrl) {
        return NextResponse.redirect(new URL('/expired-link', req.url)); // Optional: handle expired links
    }

    return NextResponse.redirect(longUrl);
  } catch (error) {
    console.error('Redirect error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
    
}