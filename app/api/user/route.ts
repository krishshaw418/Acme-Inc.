import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
// export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest){
    // const token = (await cookies()).get('access-token')?.value;
    // console.log("Token: ", token);
    // if(!token) return NextResponse.json({message: "Session Expired. Please Login!"});
    return Response.json({
        id:1,
        name: "Leanne Graham",
        username: "Bret",
        email: "leanne@biz.com"
    })
}