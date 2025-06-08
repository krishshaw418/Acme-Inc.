import { NextResponse } from "next/server";
import { prisma }from "@/lib/prisma";

export async function POST(req: Request){
    const {email, password} = await req.json();
    if(!email || !password) return NextResponse.json({message: "Email && Password required!"});
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });
        if(user?.password !== password) return NextResponse.json({message: "Invalid Credentials!"});
        if(!user) return NextResponse.json({messahe:"User not found please signup!"});
        return NextResponse.json({message: "Login Sucessful!"});
    } catch (error) {
        return NextResponse.json({message: "Server error please try again!"});
    }
}