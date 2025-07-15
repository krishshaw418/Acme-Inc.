import { generatePasswordResetToken } from "@/app/lib/util";
import { NextResponse, NextRequest } from "next/server";
import redis from "@/lib/redis";
import { prisma } from "@/lib/prisma";
import { Hashing } from "@/app/lib/util";
import { sendEmail } from "@/lib/mailer";
import crypto from 'crypto';

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    if(!email) return NextResponse.json({error: "Email required!"}, { status: 400 });
    
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if(!user) return NextResponse.json({error: "User not found!"}, { status: 404 });
        
        const resetToken = generatePasswordResetToken();
        // Use a prefixed key for better Redis organization
        await redis.set(`password_reset:${user.id}`, resetToken, {EX: 600});
        
        const link = `${process.env.NEXTAUTH_URL}/reset-password?user_Id=${user.id}&resetToken=${resetToken}`;
        await sendEmail(email, link);
        
        return NextResponse.json({message: "Mail sent!"});
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({error: "Server Error!"}, { status: 500 });
    }
}

// GET method for token validation
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const user_Id = url.searchParams.get('user_Id');
    const resetToken = url.searchParams.get('resetToken');

    if (!user_Id || !resetToken) {
        return NextResponse.json({ 
            valid: false, 
            error: 'Missing required parameters' 
        }, { status: 400 });
    }

    try {
        // Check if token exists in Redis
        const storedToken = await redis.get(`password_reset:${user_Id}`);
        if (!storedToken) {
            return NextResponse.json({ 
                valid: false, 
                error: 'Reset link has expired or is invalid' 
            }, { status: 400 });
        }

        // Secure token comparison to prevent timing attacks
        const isValidToken = crypto.timingSafeEqual(
            Buffer.from(storedToken, 'utf8'),
            Buffer.from(resetToken, 'utf8')
        );

        if (!isValidToken) {
            return NextResponse.json({ 
                valid: false, 
                error: 'Invalid reset token' 
            }, { status: 400 });
        }

        // Verify user still exists
        const user = await prisma.user.findUnique({
            where: { id: user_Id },
            select: { id: true, email: true } // Only select necessary fields
        });

        if (!user) {
            return NextResponse.json({ 
                valid: false, 
                error: 'User not found' 
            }, { status: 404 });
        }

        return NextResponse.json({ 
            valid: true, 
            message: 'Token is valid' 
        });

    } catch (error) {
        console.error('Token validation error:', error);
        return NextResponse.json({ 
            valid: false, 
            error: 'Server error' 
        }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const url = new URL(req.url);
    const user_Id = url.searchParams.get('user_Id');
    const resetToken = url.searchParams.get('resetToken');

    const { newPassword, confirmPassword } = await req.json();

    if (!user_Id || !resetToken) {
        return NextResponse.json({ error: 'Invalid reset link!' }, { status: 400 });
    }

    if (!newPassword || !confirmPassword) {
        return NextResponse.json({ error: 'All fields required!' }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
        return NextResponse.json({ error: 'Passwords do not match!' }, { status: 400 });
    }

    // Add password strength validation
    if (newPassword.length < 8) {
        return NextResponse.json({ error: 'Password must be at least 8 characters long!' }, { status: 400 });
    }

    try {
        // Re-validate token (important for security)
        const storedToken = await redis.get(`password_reset:${user_Id}`);
        if (!storedToken) {
            return NextResponse.json({ error: 'Reset link expired!' }, { status: 400 });
        }

        // Secure token comparison
        const isValidToken = crypto.timingSafeEqual(
            Buffer.from(storedToken, 'utf8'),
            Buffer.from(resetToken, 'utf8')
        );

        if (!isValidToken) {
            return NextResponse.json({ error: 'Invalid reset token!' }, { status: 400 });
        }

        // Verify user exists
        const user = await prisma.user.findUnique({
            where: { id: user_Id }
        });

        if (!user) {
            return NextResponse.json({ error: 'User not found!' }, { status: 404 });
        }

        const hashedPassword = await Hashing(newPassword);

        await prisma.user.update({
            where: { id: user_Id },
            data: { 
                hashedPassword,
            },
        });

        // Delete the used token from Redis
        await redis.del(`password_reset:${user_Id}`);
        await redis.del(user.email);

        return NextResponse.json({ message: 'Password reset successful!' });
    } catch (error) {
        console.error('Password reset error:', error);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
}