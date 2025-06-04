import { NextResponse } from "next/server";

export async function POST(req: Request){
    const {email, password} = await req.json();
    if(email === "test@example.com" && password === "12345"){
        return NextResponse.json({message: "Login Successful!"});
    }
    else return NextResponse.json({message: "Login Failed! Invalid Credentials."});
}