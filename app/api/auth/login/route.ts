import { NextRequest, NextResponse } from "next/server";
import { prisma }from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest){
    const {email, password} = await req.json();
    if(!email || !password) return NextResponse.json({message: "Email && Password required!"}, {status: 400});
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if(!user) return NextResponse.json({message:"User not found please signup!"}, {status: 404});
        if(user?.password !== password) return NextResponse.json({message: "Invalid Credentials!"}, {status: 401});
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, {expiresIn : '1h'});
        if(!token) return NextResponse.json({message: "Error generating token!"}, {status: 500});
        const response = NextResponse.json({message: "Login Sucessful!"},{status: 200});
        response.cookies.set("access-token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60*60,
            path: "/",
            sameSite: "lax"
        })
        return response;
    } catch (error) {
        return NextResponse.json({message: "Server error please try again!"});
    }
}