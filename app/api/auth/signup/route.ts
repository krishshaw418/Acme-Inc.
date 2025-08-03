import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { Hashing, validateEmail } from "@/app/lib/util";

export async function POST(req: NextRequest){
    const {email, password} = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email && Password required!' },
        {status: 400}
      );
    }
    try {

        const isValid = await validateEmail(email);
        if(!isValid) {
          return NextResponse.json({message: "Invalid email address!"}, {status: 400});
        }

        const hashedPassword = await Hashing(password);

        const ExistingUser = await prisma.user.findUnique({
          where: { email }
        });

        if(ExistingUser) return NextResponse.json({message: "User already exist. Please login."}, {status: 409});
        const user = await prisma.user.create({
            data: {email, hashedPassword},
            select: {id: true, email: true, hashedPassword: true} 
        })
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET!, {expiresIn: '1h'});
        console.log("access-token: ", token);
        if(!token) return NextResponse.json({message: "Error generating token!"}, {status: 500});
        const response = NextResponse.json({message: "Signup Successful!"}, {status: 200});
        response.cookies.set("access-token", token, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          path: '/',
          maxAge: 60 * 60
        });
        return response;
    } catch (error) {
        console.log("Error: ", error);
        return NextResponse.json({message: "Signup Failed!"}, {status: 500});
    }
}