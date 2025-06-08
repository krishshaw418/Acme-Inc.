import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request){
    const {email, password} = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email && Password required!' }
      );
    }
    try {
        const user = await prisma.user.create({
            data: {email, password},
            select: {id: true, email: true, password: true} 
        })
        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET!, {expiresIn: '1h'});
        console.log("access-token: ", token);
        if(!token) return NextResponse.json({message: "Error generating token!"});
        (await cookies()).set("access-token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60*60,
          path: "/"
        });
        return NextResponse.json({message: "Signup Successful!"});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Signup Failed!"});
    }
}