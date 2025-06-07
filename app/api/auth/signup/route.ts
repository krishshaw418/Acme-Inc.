import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request){
    const {email, password} = await req.json();
    console.log(email);
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required and must be a string.' },
        { status: 400 }
      );
    }
    try {
        const user = await prisma.user.create({
            data: {email, password}, 
        })
        return NextResponse.json({message: "Signup Successful!"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Signup Failed!"});
    }
}