import { NextResponse } from "next/server";
import { prisma }from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req: Request){
    const {email, password} = await req.json();
    if(!email || !password) return NextResponse.json({message: "Email && Password required!"});
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if(!user) return NextResponse.json({message:"User not found please signup!"});
        if(user?.password !== password) return NextResponse.json({message: "Invalid Credentials!"});
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, {expiresIn : '1h'});
        if(!token) return NextResponse.json({message: "Error generating token!"});
        (await cookies()).set("access-token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60*60,
            path: "/",
            sameSite: "none"
        })
        return NextResponse.json({message: "Login Sucessful!"});
    } catch (error) {
        return NextResponse.json({message: "Server error please try again!"});
    }
}